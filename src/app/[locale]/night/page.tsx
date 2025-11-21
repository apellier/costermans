import Image from "next/image";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { IMAGES, IMAGE_SIZES } from "@/constants/images";
import { generatePageMetadata, getKeywordsForPage } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('seo');
  
  return generatePageMetadata({
    title: t('pages.night.title'),
    description: t('pages.night.description'),
    path: '/night',
    locale,
    keywords: getKeywordsForPage(locale, 'night'),
    image: '/images/night/hero.jpg'
  });
}

export default async function NightPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('night');
  
  const nightHighlights = [
    {
      title: t('sections.dinner.title'),
      description: t('sections.dinner.description'),
      image: "dinner-vertical",
      highlights: [
        t('sections.dinner.items.ravioles'),
        t('sections.dinner.items.pommesDauphines'),
        t('sections.dinner.items.maquereau')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Night Menu Header - Dark/moody image */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Dark/Evening Photo */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <Image
            src={IMAGES.night.hero}
            alt="Café Costermans - Night menu with refined dinner offerings"
            fill
            className="object-cover"
            sizes={IMAGE_SIZES.hero}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/20 to-forest/40"></div>
        </div>
        
        {/* Night Menu Content & PDF Access */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-deep to-forest">
          <div className="text-center text-white px-4 py-8 lg:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl !text-white mb-6 font-light tracking-wide drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              {t('hero.subtitle')}
            </p>
            
            {/* PDF Download Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/Carte food.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-deep border-2 border-white hover:bg-forest hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('hero.foodMenu')}
              </a>
              <a 
                href="/Carte boissons.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-deep border-2 border-white hover:bg-forest hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('hero.drinksMenu')}
              </a>
            </div>
            
            <p className="text-sm text-white/70">
              {t('hero.scrollText')}
            </p>
          </div>
        </div>
      </section>

      {/* Night Menu Highlights - Only Dinner */}
      {nightHighlights.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Vertical Image */}
              <div className="w-full lg:w-1/3">
                <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-none hover:shadow-lg transition-shadow">
                  <Image
                    src={IMAGES.night.dinnerSection}
                    alt={`${section.title} at Café Costermans`}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    sizes={IMAGE_SIZES.card}
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl text-forest mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-body mb-6">
                  {section.description}
                </p>
                
                {/* Highlight Items */}
                <div className="space-y-3 mb-8">
                  {section.highlights.map((highlight, index) => (
                    <div key={index} className="text-forest font-medium">
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-body italic">
                  {t('footerText')}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Wine & Evening Drinks Section */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">{t('wine.title')}</h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto">
              {t('wine.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-forest rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{t('wine.features.natural')}</h3>
              <p className="text-body">{t('wine.features.naturalDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-forest rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{t('wine.features.curated')}</h3>
              <p className="text-body">{t('wine.features.curatedDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-forest rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM3 9a2 2 0 012-2h14a2 2 0 012 2v2H3V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{t('wine.features.craft')}</h3>
              <p className="text-body">{t('wine.features.craftDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Night Philosophy Section */}
      <section className="py-16 lg:py-20 bg-deep text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl mb-8 font-light !text-white">
                {t('philosophy.title')}
              </h2>
              <div className="space-y-6 text-lg text-white/90">
                <p>
                  {t('philosophy.description1')}
                </p>
                <p>
                  {t('philosophy.description2')}
                </p>
              </div>
            </div>
            
            <div className="space-y-6 w-full lg:w-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.atmosphere')}</h3>
                <p className="text-white/90">{t('philosophy.atmosphereDesc')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.pairings')}</h3>
                <p className="text-white/90">{t('philosophy.pairingsDesc')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.experience')}</h3>
                <p className="text-white/90">{t('philosophy.experienceDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Evening Gallery */}
      <section className="py-16 lg:py-20 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl !text-white mb-6">{t('gallery.title')}</h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>
          
          {/* Evening Food & Drinks Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
            {[
              { src: IMAGES.night.gallery.dinnerPresentation, alt: "Evening dinner presentation" },
              { src: IMAGES.night.gallery.wineAndCocktails, alt: "Wine and evening cocktails" },
              { src: IMAGES.night.gallery.artisanDishes, alt: "Artisan dinner dishes" },
              { src: IMAGES.night.gallery.beverageService, alt: "Evening beverage service" },
              { src: IMAGES.night.gallery.refinedPlates, alt: "Refined dinner plates" },
              { src: IMAGES.night.gallery.craftCocktails, alt: "Wine and craft cocktails" }
            ].map((photo, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-white/10 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes={IMAGE_SIZES.gallery}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://www.instagram.com/cafecostermans"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-forest px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-all duration-300"
            >
              {t('gallery.follow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}