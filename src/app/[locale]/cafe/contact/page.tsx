import Image from "next/image";
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import { IMAGES, IMAGE_SIZES } from "@/constants/images";
import { generatePageMetadata, getKeywordsForPage } from '@/lib/seo';
import { ADDRESS, ADDRESS_CITY, ADDRESS_STREET, PHONE_NUMBER, EMAIL, OPENING_HOURS } from '@/constants/info';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('seo');

  return generatePageMetadata({
    title: t('pages.contact.title'),
    description: t('pages.contact.description'),
    path: '/contact',
    locale,
    keywords: getKeywordsForPage(locale, 'contact'),
    image: '/images/contact/hero.jpg'
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('contact');
  const tSeo = await getTranslations('seo');

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header - Mobile First Hero */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Terrace Photo */}
        <div className="relative flex-1 min-h-[60vh] lg:min-h-screen overflow-hidden">
          <Image
            src={IMAGES.contact.hero}
            alt="Café Costermans - Contact us about our secret address"
            fill
            className="object-cover"
            sizes={IMAGE_SIZES.hero}
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
                  <p className="whitespace-pre-line">{ADDRESS[locale as keyof typeof ADDRESS]}</p>
                  <p className="text-sm text-body/70">{t('info.location.description')}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-forest mb-4">{t('info.hours.title')}</h3>
                <div className="space-y-1 text-body">
                  <p><strong>{t('info.hours.days.tuesday')}:</strong> {OPENING_HOURS.tuesday}</p>
                  <p><strong>{t('info.hours.days.wednesday')}:</strong> {OPENING_HOURS.wednesday}</p>
                  <p><strong>{t('info.hours.days.thursday')}:</strong> {OPENING_HOURS.thursday}</p>
                  <p><strong>{t('info.hours.days.friday')}:</strong> {OPENING_HOURS.friday}</p>
                  <p><strong>{t('info.hours.days.saturday')}:</strong> {OPENING_HOURS.saturday}</p>
                  <p><strong>{t('info.hours.days.sunday')}:</strong> {OPENING_HOURS.sunday}</p>
                  <p className="text-sm italic text-body/70">{t('info.hours.days.monday')}</p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-forest mb-4">{t('info.contact.title')}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-forest">Téléphone</p>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                      title={tSeo('links.phone')}
                      className="text-forest hover:text-grasse transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-forest">{t('info.contact.email')}</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      title={tSeo('links.email')}
                      className="text-forest hover:text-grasse transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-forest">{t('info.contact.social')}</p>
                    <a
                      href="https://www.instagram.com/cafecostermans"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tSeo('links.instagram')}
                      className="text-forest hover:text-grasse transition-colors"
                    >
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

          {/* Google Maps Integration */}
          <div className="aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden border-4 border-warm-beige">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6382037936994!2d4.355472776989676!3d50.840111971394384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f1c8a91a5%3A0x8f67b15e6c6b4f4a!2sPlace%20du%20Grand%20Sablon%205%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(10%) saturate(90%) hue-rotate(15deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Costermans - 5 place du grand sablon, 1000 Bruxelles"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}