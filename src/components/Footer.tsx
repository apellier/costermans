'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
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
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{color: 'white'}}>{t('contact.title')}</h4>
            <address className="text-white not-italic font-space-grotesk">
              <p className="mb-2">5 place du grand sablon</p>
              <p className="mb-2">1000 Bruxelles</p>
              <p>
                <a href="mailto:cafecostermans@gmail.com" className="text-white hover:text-grasse transition-colors">
                  cafecostermans@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{color: 'white'}}>{t('hours.title')}</h4>
            <div className="text-white space-y-1 mb-6 font-space-grotesk">
              <p><strong>{t('hours.days.tuesday')}:</strong> 09h-18h</p>
              <p><strong>{t('hours.days.wednesday')}:</strong> 09h-23h</p>
              <p><strong>{t('hours.days.thursday')}:</strong> 09h-23h</p>
              <p><strong>{t('hours.days.friday')}:</strong> 09h-23h</p>
              <p><strong>{t('hours.days.saturday')}:</strong> 09h-18h</p>
              <p><strong>{t('hours.days.sunday')}:</strong> 09h-18h</p>
              <p className="text-sm italic">{t('hours.days.monday')}</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href={`/${locale}/menu`} className="text-white hover:text-grasse transition-colors font-space-grotesk">
                {t('links.menu')}
              </Link>
              <Link href={`/${locale}/about`} className="text-white hover:text-grasse transition-colors font-space-grotesk">
                {t('links.about')}
              </Link>
              <Link href={`/${locale}/contact`} className="text-white hover:text-grasse transition-colors font-space-grotesk">
                {t('links.contact')}
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