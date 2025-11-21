import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('about');
  return (
    <div className="min-h-screen bg-white">
      {/* About Header - Mobile First Hero with Ambiance Photo */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Interior/Ambiance Photo */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen overflow-hidden">
          <Image
            src="/images/ambiance/DSC02865-2.jpg"
            alt="Café Costermans - Interior heritage atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/10 to-forest/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-forest to-deep">
          <div className="text-center text-white px-4 py-8 lg:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl !text-white mb-6 font-bold tracking-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Story Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-forest mb-6">
                {t('legacy.title')}
              </h2>
              <div className="space-y-6 text-lg text-body">
                <p>
                  {t('legacy.description1')}
                </p>
                <p>
                  {t('legacy.description2')}
                </p>
                <p>
                  {t('legacy.description3')}
                </p>
              </div>
            </div>
            
            {/* Heritage Photo */}
            <div className="order-first lg:order-last">
              <div className="aspect-[4/5] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/ambiance/DSC02741-2.jpg"
                  alt="Heritage atmosphere at Café Costermans"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Terrace */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">
              {t('terrace.title')}
            </h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto">
              {t('terrace.subtitle')}
            </p>
          </div>
          
          {/* Photo Grid showcasing the terrace - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src="/images/ambiance/terrace.jpg"
                alt="Secret terrace seating area"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <Image
                src="/images/ambiance/terrace-statue.jpg"
                alt="Heritage terrace with vintage details"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/ambiance/DSC02753-2.jpg"
                alt="Intimate terrace atmosphere"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Atmosphere description */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-body leading-relaxed">
                {t('terrace.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - with Food Photos */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Approach Photo */}
            <div>
              <div className="aspect-[4/5] bg-warm-beige rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/brunch/DSC02824-2.jpg"
                  alt="Artisan food preparation at Café Costermans"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Approach Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-forest mb-6">
                {t('philosophy.title')}
              </h2>
              <div className="space-y-6 text-lg text-body">
                <p>
                  {t('philosophy.description1')}
                </p>
                <p>
                  {t('philosophy.description2')}
                </p>
                <p>
                  {t('philosophy.description3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Visual Icons */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">
              {t('values.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-6 mx-auto max-w-48 hover:shadow-lg transition-shadow">
                <Image
                  src="/images/drinks/DSC02794.jpg"
                  alt="Quality coffee craftsmanship"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl lg:text-2xl text-forest mb-4">{t('values.quality')}</h3>
              <p className="text-body">
                {t('values.qualityDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-6 mx-auto max-w-48 hover:shadow-lg transition-shadow">
                <Image
                  src="/images/ambiance/IMG_6551.jpg"
                  alt="Heritage atmosphere and craftsmanship"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl lg:text-2xl text-forest mb-4">{t('values.heritage')}</h3>
              <p className="text-body">
                {t('values.heritageDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden mb-6 mx-auto max-w-48 hover:shadow-lg transition-shadow">
                <Image
                  src="/images/brunch/IMG_6514.jpg"
                  alt="Community gathering over great food"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl lg:text-2xl text-forest mb-4">{t('values.community')}</h3>
              <p className="text-body">
                {t('values.communityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6 font-light !text-white">
            {t('cta.title')}
          </h2>
          <p className="text-lg lg:text-xl mb-8 lg:mb-12 text-white/90 font-light max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <a href="https://www.costermans-antiques.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-deep border-2 border-white hover:bg-forest hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300">
              {t('cta.viewArtGallery')}
            </a>
            <Link href="contact" className="bg-white text-deep border-2 border-white hover:bg-forest hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300">
              {t('cta.visitUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}