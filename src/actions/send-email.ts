'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Veuillez corriger les erreurs ci-dessous.',
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    const subjectMap = {
      reservation: 'Réservation / Groupe',
      event: 'Événement Privé',
      general: 'Question Générale',
      feedback: 'Commentaires',
    };

    const emailSubject = `[Café Costermans] ${subjectMap[subject as keyof typeof subjectMap] || subject}`;

    const emailContent = `
      <h2>Nouveau message depuis le site web Café Costermans</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Sujet:</strong> ${subjectMap[subject as keyof typeof subjectMap] || subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Ce message a été envoyé depuis le formulaire de contact du site web Café Costermans.
      </p>
    `;

    const { error } = await resend.emails.send({
      from: 'Contact Café Costermans <contact@costermans.be>',
      to: ['pellieralex@gmail.com'],
      replyTo: email,
      subject: emailSubject,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
      };
    }

    return {
      success: true,
      message: 'Votre message a été envoyé avec succès. Nous vous répondrons bientôt.',
    };

  } catch (error) {
    console.error('Send email error:', error);
    return {
      success: false,
      message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.',
    };
  }
}