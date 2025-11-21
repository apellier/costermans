import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import InstagramEmbed from "@/components/InstagramEmbed";
import { IMAGES, IMAGE_SIZES } from "@/constants/images";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('home');
  return (
    <>
      {/* Hero Section - Mobile First Design with Vertical Images */}
      <section className="relative min-h-screen flex flex-col lg:flex-row" aria-labelledby="hero-heading">
        {/* Hero Background - Landing Image */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen overflow-hidden">
          <Image
            src={IMAGES.home.hero}
            alt="Café Costermans - Secret address in Brussels"
            fill
            className="object-cover"
            sizes={IMAGE_SIZES.heroFull}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/10 to-forest/30"></div>
        </div>
        
        {/* Hero Content - Mobile First Layout */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-forest to-deep">
          <div className="text-center text-white px-4 py-8 lg:py-16">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-7xl !text-white mb-6 font-bold tracking-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              {t('hero.subtitle')}
            </p>
            <Link href="menu" className="bg-white text-deep border-2 border-white hover:bg-forest hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Atmosphere Section - Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">{t('experience.title')}</h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </div>
          
          {/* Photo Grid - Real Photos from Different Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {/* Ambiance photos */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.ambianceTerrace}
                alt="Café Costermans terrace ambiance"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
            
            {/* Brunch photo */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.brunchSample}
                alt="Delicious brunch at Café Costermans"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
            
            {/* Drinks photo */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.coffeeDrinks}
                alt="Artisan coffee and drinks"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
            
            {/* Another ambiance photo */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.interior}
                alt="Interior atmosphere of Café Costermans"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
            
            {/* Food photo */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.freshFood}
                alt="Fresh cuisine at Café Costermans"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
            
            {/* Terrace with statue */}
            <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src={IMAGES.home.heritageTerrace}
                alt="Secret terrace with heritage atmosphere"
                width={300}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes={IMAGE_SIZES.gallery}
              />
            </div>
          </div>
          
          {/* Simple essence statements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl mb-3 title-accent">{t('experience.heritage')}</h3>
              <p className="text-body">{t('experience.heritageDesc')}</p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 title-accent">{t('experience.atmosphere')}</h3>
              <p className="text-body">{t('experience.atmosphereDesc')}</p>
            </div>
            <div>
              <h3 className="text-2xl mb-3 title-accent">{t('experience.quality')}</h3>
              <p className="text-body">{t('experience.qualityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramEmbed />
      
      {/* Visit Us Section - Simplified */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-12 title-accent">{t('visit.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-4 font-bold">{t('visit.hours')}</h3>
              <div className="space-y-2 text-lg text-body">
                <p><strong>{t('visit.days.tuesday')}:</strong> 09h-18h</p>
                <p><strong>{t('visit.days.wednesday')}:</strong> 09h-23h</p>
                <p><strong>{t('visit.days.thursday')}:</strong> 09h-23h</p>
                <p><strong>{t('visit.days.friday')}:</strong> 09h-23h</p>
                <p><strong>{t('visit.days.saturday')}:</strong> 09h-18h</p>
                <p><strong>{t('visit.days.sunday')}:</strong> 09h-18h</p>
                <p className="text-sm italic">{t('visit.days.monday')}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-4 font-bold">{t('visit.address')}</h3>
              <p className="text-lg mb-6 text-body">
                5 place du grand sablon<br />
                1000 Bruxelles
              </p>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 justify-center">
                  <a href="mailto:cafecostermans@gmail.com" className="text-forest hover:text-grasse transition-colors font-medium">
                    cafecostermans@gmail.com
                  </a>
                  <a href="https://www.instagram.com/cafecostermans/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-grasse transition-colors font-medium">
                    @cafecostermans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}