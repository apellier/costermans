import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata, getKeywordsForPage } from '@/lib/seo';
import { ADDRESS_CITY, ADDRESS_STREET, PHONE_NUMBER, EMAIL, ENTERPRISE_NUMBER, VAT_NUMBER } from '@/constants/info';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('seo');

  return generatePageMetadata({
    title: t('pages.legal.title'),
    description: t('pages.legal.description'),
    path: '/legal',
    locale,
    keywords: getKeywordsForPage(locale, 'legal'),
    image: '/images/home/hero.jpg'
  });
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('legal');

  return (
    <div className="min-h-screen bg-white py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl text-forest mb-12 text-center font-bold">
          {t('title')}
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-forest mb-4 font-bold">{t('company.title')}</h2>
            <div className="bg-warm-beige rounded-lg p-6">
              <p className="mb-2"><strong>{t('company.name')}:</strong> Maison Costermans SRL</p>
              <p className="mb-2"><strong>{t('company.address')}:</strong></p>
              <p className="ml-4 mb-2">{ADDRESS_STREET[locale as keyof typeof ADDRESS_STREET]}</p>
              <p className="ml-4 mb-4">{ADDRESS_CITY[locale as keyof typeof ADDRESS_CITY]}, Belgique</p>

              <p className="mb-2"><strong>{t('company.contact')}:</strong></p>
              <p className="ml-4 mb-2">
                <strong>{t('company.email')}:</strong>{' '}
                <a href={`mailto:${EMAIL}`} className="text-forest hover:text-grasse transition-colors">
                  {EMAIL}
                </a>
              </p>
              <p className="ml-4 mb-4">
                <strong>{t('company.phone')}:</strong>{' '}
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-forest hover:text-grasse transition-colors">
                  {PHONE_NUMBER}
                </a>
              </p>

              <p className="mb-2"><strong>{t('company.registration')}:</strong> {ENTERPRISE_NUMBER}</p>
              <p className="mb-2"><strong>{t('company.vat')}:</strong> {VAT_NUMBER}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-forest mb-4 font-bold">{t('website.title')}</h2>
            <div className="bg-warm-beige rounded-lg p-6">
              <p className="mb-2"><strong>{t('website.host')}:</strong> Café Costermans</p>
              <p className="mb-2"><strong>{t('website.responsible')}:</strong> Maison Costermans SRL</p>
              <p className="mb-2"><strong>{t('website.design')}:</strong> Tribe Agency; Camille Riche</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-forest mb-4 font-bold">{t('disclaimer.title')}</h2>
            <div className="bg-warm-beige rounded-lg p-6">
              <p className="mb-4">{t('disclaimer.content1')}</p>
              <p className="mb-4">{t('disclaimer.content2')}</p>
              <p>{t('disclaimer.content3')}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-forest mb-4 font-bold">{t('privacy.title')}</h2>
            <div className="bg-warm-beige rounded-lg p-6">
              <p className="mb-4">{t('privacy.content1')}</p>
              <p>{t('privacy.content2')}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}