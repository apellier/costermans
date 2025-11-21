import Image from "next/image";
import { getTranslations } from 'next-intl/server';

export default async function DayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('day');
  
  const dayHighlights = [
    {
      title: t('sections.morningBrunch.title'),
      description: t('sections.morningBrunch.description'),
      image: "brunch-vertical",
      highlights: [
        t('sections.morningBrunch.items.superBun'),
        t('sections.morningBrunch.items.ndujaEggs'),
        t('sections.morningBrunch.items.toastedBrioche')
      ]
    },
    {
      title: t('sections.lunchBrunch.title'),
      description: t('sections.lunchBrunch.description'),
      image: "lunch-vertical",
      highlights: [
        t('sections.lunchBrunch.items.bunLegumes'),
        t('sections.lunchBrunch.items.croqueJambonneau'),
        t('sections.lunchBrunch.items.tunaMelt')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Day Menu Header - Bright daytime image */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Bright/Daytime Photo */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <Image
            src="/images/brunch/DSC02698-2.jpg"
            alt="Café Costermans - Day menu with fresh brunch and lunch offerings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/10 to-forest/30"></div>
        </div>
        
        {/* Day Menu Content & PDF Access */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-forest to-deep">
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

      {/* Day Menu Highlights - Only Morning Brunch and Lunch */}
      {dayHighlights.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-12 lg:py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-warm-beige'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Vertical Image */}
              <div className="w-full lg:w-1/3">
                <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-none hover:shadow-lg transition-shadow">
                  <Image
                    src={sectionIndex === 0 ? "/images/brunch/DSC02686-2.jpg" : "/images/brunch/DSC02828-2.jpg"}
                    alt={`${section.title} at Café Costermans`}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

      {/* Day Philosophy Section */}
      <section className="py-16 lg:py-20 bg-forest text-white">
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
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.dietary')}</h3>
                <p className="text-white/90">{t('philosophy.dietaryDesc')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.sourcing')}</h3>
                <p className="text-white/90">{t('philosophy.sourcingDesc')}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 !text-white">{t('philosophy.fresh')}</h3>
                <p className="text-white/90">{t('philosophy.freshDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Food Gallery - Day Foods */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">{t('gallery.title')}</h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </div>
          
          {/* Day Food Photo Grid - Brunch & Lunch focused */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
            {[
              { src: "/images/brunch/DSC02693-2.jpg", alt: "Morning brunch at Café Costermans" },
              { src: "/images/drinks/DSC02818-2.jpg", alt: "Coffee and daytime beverages" },
              { src: "/images/brunch/DSC02705-2.jpg", alt: "Fresh lunch offerings" },
              { src: "/images/drinks/drinks-2.jpg", alt: "Daytime specialty drinks" },
              { src: "/images/brunch/DSC02783-2.jpg", alt: "Artisan lunch selection" },
              { src: "/images/drinks/DSC02900-2.jpg", alt: "Morning coffee ritual" }
            ].map((photo, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://www.instagram.com/cafecostermans"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('gallery.follow')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}