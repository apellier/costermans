import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location - Visit Our Terrace",
  description: "Find Café Costermans on Place du Grand Sablon in Brussels. Get directions, opening hours, and contact information. Make reservations for our secret terrace.",
  keywords: ['café contact Brussels', 'Sablon café location', 'Brussels café directions', 'café reservations Brussels', 'Place du Grand Sablon'],
  openGraph: {
    title: "Contact & Location - Café Costermans Brussels",
    description: "Find Café Costermans on Place du Grand Sablon in Brussels. Get directions, opening hours, and make reservations for our secret terrace.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}