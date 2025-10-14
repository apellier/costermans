import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Artisan Brunch & Coffee",
  description: "Explore our carefully curated menu featuring artisan brunch classics, specialty coffee, and fresh pastries. Quality ingredients meet timeless recipes at Café Costermans.",
  keywords: ['brunch menu Brussels', 'artisan coffee Brussels', 'Sablon café menu', 'Belgian brunch', 'specialty coffee menu'],
  openGraph: {
    title: "Menu - Artisan Brunch & Coffee | Café Costermans",
    description: "Explore our carefully curated menu featuring artisan brunch classics, specialty coffee, and fresh pastries in Brussels' Sablon district.",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}