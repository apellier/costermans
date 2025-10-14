import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('contact');

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header - Mobile First Hero */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Terrace Photo */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen overflow-hidden">
          <Image
            src="/images/ambiance/terrace.jpg"
            alt="Café Costermans - Contact us about our secret terrace"
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

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-forest mb-8">
                {t('info.title')}
              </h2>
              
              {/* Location */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-forest mb-4">{t('info.location.title')}</h3>
                <div className="space-y-2 text-lg text-body">
                  <p>5 place du grand sablon</p>
                  <p>1000 Bruxelles</p>
                  <p className="text-sm text-body/70">{t('info.location.description')}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-forest mb-4">{t('info.hours.title')}</h3>
                <div className="space-y-1 text-body">
                  <p><strong>{t('info.hours.days.tuesday')}:</strong> 09h-18h</p>
                  <p><strong>{t('info.hours.days.wednesday')}:</strong> 09h-23h</p>
                  <p><strong>{t('info.hours.days.thursday')}:</strong> 09h-23h</p>
                  <p><strong>{t('info.hours.days.friday')}:</strong> 09h-23h</p>
                  <p><strong>{t('info.hours.days.saturday')}:</strong> 09h-18h</p>
                  <p><strong>{t('info.hours.days.sunday')}:</strong> 09h-18h</p>
                  <p className="text-sm italic text-body/70">{t('info.hours.days.monday')}</p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-forest mb-4">{t('info.contact.title')}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-forest">{t('info.contact.email')}</p>
                    <a href="mailto:cafecostermans@gmail.com" className="text-forest hover:text-grasse transition-colors">
                      cafecostermans@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-forest">{t('info.contact.social')}</p>
                    <a href="https://www.instagram.com/cafecostermans" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-grasse transition-colors">
                      @cafecostermans
                    </a>
                  </div>
                </div>
              </div>

              {/* Reservations Note */}
              <div className="bg-warm-beige rounded-lg p-6">
                <h4 className="font-bold text-forest mb-2">{t('info.reservations.title')}</h4>
                <p className="text-body text-sm">{t('info.reservations.description')}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-forest mb-8">
                {t('form.title')}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">{t('map.title')}</h2>
            <p className="text-lg text-body max-w-3xl mx-auto">
              {t('map.subtitle')}
            </p>
          </div>
          
          {/* Placeholder for map - can be replaced with actual map integration */}
          <div className="aspect-[16/9] bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-forest/40 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-forest/60 font-medium">{t('map.placeholder')}</p>
              <p className="text-body/60 text-sm mt-2">5 place du grand sablon, 1000 Bruxelles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}