import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ADDRESS, EMAIL, OPENING_HOURS, PHONE_NUMBER } from '@/constants/info';

type FooterProps = {
  locale: string;
};

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations('footer');
  const tSeo = await getTranslations('seo');
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-space-grotesk font-bold text-sun mb-4 title-accent">Café Costermans</h3>
            <p className="text-white/80 mb-4 font-space-grotesk">
              {t('brand.description')}
            </p>
            <p className="text-sm text-white/60 font-space-grotesk">
              {t('brand.heritage')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{ color: 'white' }}>{t('contact.title')}</h4>
            <address className="text-white not-italic font-space-grotesk">
              <p className="mb-2 whitespace-pre-line">{ADDRESS[locale as keyof typeof ADDRESS]}</p>
              <p>
                <a href={`mailto:${EMAIL}`} className="text-white hover:text-grasse transition-colors">
                  {EMAIL}
                </a>
              </p>
              <p className="mt-2">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-white hover:text-grasse transition-colors">
                  {PHONE_NUMBER}
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{ color: 'white' }}>{t('hours.title')}</h4>
            <div className="text-white space-y-1 mb-6 font-space-grotesk">
              <p><strong>{t('hours.days.tuesday')}:</strong> {OPENING_HOURS.tuesday}</p>
              <p><strong>{t('hours.days.wednesday')}:</strong> {OPENING_HOURS.wednesday}</p>
              <p><strong>{t('hours.days.thursday')}:</strong> {OPENING_HOURS.thursday}</p>
              <p><strong>{t('hours.days.friday')}:</strong> {OPENING_HOURS.friday}</p>
              <p><strong>{t('hours.days.saturday')}:</strong> {OPENING_HOURS.saturday}</p>
              <p><strong>{t('hours.days.sunday')}:</strong> {OPENING_HOURS.sunday}</p>
              <p className="text-sm italic">{t('hours.days.monday')}</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/${locale}/day`}
                title={tSeo('navigation.day')}
                className="text-white hover:text-grasse transition-colors font-space-grotesk"
              >
                {t('links.menu')}
              </Link>
              <Link
                href={`/${locale}/about`}
                title={tSeo('navigation.about')}
                className="text-white hover:text-grasse transition-colors font-space-grotesk"
              >
                {t('links.about')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                title={tSeo('navigation.contact')}
                className="text-white hover:text-grasse transition-colors font-space-grotesk"
              >
                {t('links.contact')}
              </Link>
              <Link
                href={`/${locale}/legal`}
                title={tSeo('pages.legal.title')}
                className="text-white hover:text-grasse transition-colors font-space-grotesk"
              >
                {t('links.legal')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-forest mt-8 pt-8 text-center text-white/60 space-y-2">
          <p>&copy; {new Date().getFullYear()} Maison Costermans SRL. {t('copyright')}</p>
          <p className="text-sm">
            Photographies par <a href="https://tribeagency.be/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors underline">Tribe Agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
}