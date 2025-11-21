'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';
import { sendContactEmail, type ContactFormState } from '@/actions/send-email';

const initialState: ContactFormState = {
  success: undefined,
  errors: {},
  message: '',
};

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <div>
      <form action={formAction} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
            {t('fields.name.label')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest focus:border-forest transition-colors ${
              state?.errors?.name ? 'border-red-500' : 'border-forest/20'
            }`}
            placeholder={t('fields.name.placeholder')}
          />
          {state?.errors?.name && (
            <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
            {t('fields.email.label')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest focus:border-forest transition-colors ${
              state?.errors?.email ? 'border-red-500' : 'border-forest/20'
            }`}
            placeholder={t('fields.email.placeholder')}
          />
          {state?.errors?.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-forest mb-2">
            {t('fields.subject.label')} *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest focus:border-forest transition-colors ${
              state?.errors?.subject ? 'border-red-500' : 'border-forest/20'
            }`}
          >
            <option value="">{t('fields.subject.placeholder')}</option>
            <option value="reservation">{t('fields.subject.options.reservation')}</option>
            <option value="event">{t('fields.subject.options.event')}</option>
            <option value="general">{t('fields.subject.options.general')}</option>
            <option value="feedback">{t('fields.subject.options.feedback')}</option>
          </select>
          {state?.errors?.subject && (
            <p className="mt-1 text-sm text-red-600">{state.errors.subject[0]}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
            {t('fields.message.label')} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest focus:border-forest transition-colors resize-vertical ${
              state?.errors?.message ? 'border-red-500' : 'border-forest/20'
            }`}
            placeholder={t('fields.message.placeholder')}
          />
          {state?.errors?.message && (
            <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website (do not fill)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-forest text-white px-8 py-4 rounded-full font-bold hover:bg-forest-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('buttons.sending')}
            </>
          ) : (
            t('buttons.send')
          )}
        </button>
      </form>

      {/* Status Messages */}
      {state?.success === true && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-800 font-medium">{state.message || t('messages.success')}</p>
          </div>
        </div>
      )}

      {state?.success === false && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p className="text-red-800 font-medium">{state.message || t('messages.error')}</p>
          </div>
        </div>
      )}

      {/* Form Note */}
      <div className="mt-6 p-4 bg-warm-beige rounded-lg">
        <p className="text-sm text-body">
          {t('note')}
        </p>
      </div>
    </div>
  );
}