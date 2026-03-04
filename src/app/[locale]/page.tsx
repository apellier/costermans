import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollIndicator from '@/components/ScrollIndicator';
import { IMAGES, IMAGE_SIZES } from "@/constants/images";
import { generatePageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations('hub');

    return generatePageMetadata({
        title: t('title'),
        description: t('subtitle'),
        path: '',
        locale,
        keywords: ['Maison Costermans', 'Sablon', 'Brussels', 'Cafe', 'Antiques', 'Hotel', 'Events'],
        image: '/images/home/hero.jpg'
    });
}

export default async function Hub({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('hub');

    const activities = [
        {
            id: 'cafe',
            title: t('activities.cafe.title'),
            description: t('activities.cafe.description'),
            href: `/${locale}/cafe`,
            image: IMAGES.hub.cafe,
            external: false
        },
        {
            id: 'antiquaire',
            title: t('activities.antiquaire.title'),
            description: t('activities.antiquaire.description'),
            href: 'https://costermans-antiques.com',
            image: IMAGES.hub.antiquaire,
            external: true
        },
        {
            id: 'events',
            title: t('activities.events.title'),
            description: t('activities.events.description'),
            href: 'https://sablonevent.com',
            image: IMAGES.hub.events,
            external: true
        },
        {
            id: 'hotel',
            title: t('activities.hotel.title'),
            description: t('activities.hotel.description'),
            href: 'https://www.booking.com/Share-Y3Za23',
            image: IMAGES.hub.hotel,
            external: true
        }
    ];

    return (
        <div className="relative min-h-screen bg-deep text-white selection:bg-forest selection:text-white">
            {/* Dynamic Scroll Indicator */}
            <ScrollIndicator />

            {/* Header / Logo section */}
            <header className="absolute top-0 left-0 right-0 z-20 py-8 px-4 flex items-center justify-between pointer-events-none">
                {/* Empty div for flex balance */}
                <div className="w-24 md:w-32"></div>

                <Image
                    src={IMAGES.common.logo}
                    alt="Maison Costermans"
                    width={180}
                    height={60}
                    className="h-10 md:h-12 w-auto invert" // Invert filter to make logo white
                    priority
                />

                {/* Language Switcher */}
                <div className="w-24 md:w-32 flex justify-end pointer-events-auto text-black">
                    <div className="bg-white/90 backdrop-blur-md rounded-md shadow-sm">
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>

            {/* Main Grid Content */}
            <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                {activities.map((activity, index) => {
                    const content = (
                        <div className="relative h-[50vh] md:h-screen w-full group overflow-hidden border-b md:border-b-0 border-white/10 last:border-b-0">
                            {/* Background Image */}
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                fill
                                className="object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-80 md:opacity-60 md:group-hover:opacity-80"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={index < 2}
                            />
                            {/* Overlay gradient for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent transition-opacity duration-500 opacity-70 md:opacity-100 md:group-hover:opacity-70"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center md:pb-24 pointer-events-none">
                                <h2 className="!text-white text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold mb-4 tracking-tight drop-shadow-lg transform transition-transform duration-500 md:group-hover:-translate-y-2">
                                    {activity.title}
                                </h2>
                                <p className="!text-white/90 text-lg md:text-xl font-light max-w-md transform transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                    {activity.description}
                                </p>
                                {/* Visual indicator that this is a link */}
                                <div className="mt-6 transform transition-all duration-500 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 text-grasse">
                                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {activity.external ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        )}
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );

                    if (activity.external) {
                        return (
                            <a
                                key={activity.id}
                                href={activity.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                            >
                                {content}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={activity.id}
                            href={activity.href}
                            className="block w-full h-full"
                        >
                            {content}
                        </Link>
                    );
                })}
            </main>

            {/* Minimal Footer */}
            <footer className="bg-black text-white/60 py-4 text-center text-sm font-space-grotesk">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                    <p>&copy; {new Date().getFullYear()} Maison Costermans SRL</p>
                    <span className="hidden md:inline">•</span>
                    <Link href={`/${locale}/cafe/legal`} className="hover:text-white transition-colors">
                        {t('activities.cafe.description') /* We can use a basic 'Legal Notice' string or a dedicated hub.legal, let's just use generic or hardcode Notice Légale */}
                        Mentions Légales / Legal Notice
                    </Link>
                </div>
            </footer>
        </div>
    );
}
