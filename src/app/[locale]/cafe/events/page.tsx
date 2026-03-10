import Image from "next/image";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { IMAGES, IMAGE_SIZES } from "@/constants/images";
import { generatePageMetadata, getKeywordsForPage } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations('seo');

    return generatePageMetadata({
        title: t('pages.events.title'),
        description: t('pages.events.description'),
        path: '/events',
        locale,
        keywords: getKeywordsForPage(locale, 'events'),
        image: '/images/home/hero.jpg' // Using a default hero for now
    });
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('events');
    const tSeo = await getTranslations('seo');

    const events = [
        {
            id: 'quizz',
            title: t('sections.quizz.title'),
            description: t('sections.quizz.description'),
            when: t('sections.quizz.when'),
            image: IMAGES.events.quizz
        },
        {
            id: 'concerts',
            title: t('sections.concerts.title'),
            description: t('sections.concerts.description'),
            when: t('sections.concerts.when'),
            image: IMAGES.events.concert
        },
        {
            id: 'chess',
            title: t('sections.chess.title'),
            description: t('sections.chess.description'),
            when: t('sections.chess.when'),
            image: IMAGES.events.chess
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Events Header */}
            <section className="relative min-h-[60vh] flex items-center justify-center">
                <Image
                    src={IMAGES.events.hero}
                    alt="Café Costermans Events"
                    fill
                    className="object-cover"
                    sizes={IMAGE_SIZES.heroFull}
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 tracking-wide drop-shadow-lg !text-white">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-light mb-10 text-white/90">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/events-menu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-deep hover:bg-forest hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t('hero.downloadBrochure')}
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-white/80 animate-bounce">
                        {t('hero.scrollText')}
                    </p>
                </div>
            </section>

            {/* Events List */}
            <section className="py-20 bg-warm-beige">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes={IMAGE_SIZES.card}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
                                        {event.when}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-light text-forest mb-4">
                                        {event.title}
                                    </h3>
                                    <p className="text-body leading-relaxed mb-6 flex-1">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram & Footer CTA */}
            <section className="py-20 bg-forest text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-light mb-8 !text-white">
                        {t('footerText')}
                    </h2>
                    <a
                        href="https://www.instagram.com/cafecostermans"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-forest px-8 py-3 rounded-full font-bold transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        {t('hero.instagram')}
                    </a>
                </div>
            </section>
        </div>
    );
}
