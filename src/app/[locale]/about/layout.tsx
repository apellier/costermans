import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Heritage & Craftsmanship",
  description: "Discover the story behind Café Costermans, rooted in generations of family heritage and connected to the tradition of Costermans Antiquaire in Brussels' Sablon district.",
  keywords: ['café heritage Brussels', 'Costermans Antiquaire', 'family tradition café', 'Sablon history', 'Belgian café story'],
  openGraph: {
    title: "Our Story - Café Costermans Heritage",
    description: "Discover the story behind Café Costermans, rooted in generations of family heritage and craftsmanship in Brussels' historic Sablon district.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}