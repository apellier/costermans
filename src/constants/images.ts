// Centralized image path constants for Café Costermans
// Organized by page/section for easy management and maintenance

export const IMAGES = {
  // Home page images
  home: {
    hero: "/images/home/hero.jpg",
    gallery: {
      gallery1: "/images/home/gallery-1.jpg", // was ambianceTerrace
      gallery2: "/images/home/gallery-2.jpg", // was brunchSample
      gallery3: "/images/home/gallery-3.jpg", // was coffeeDrinks
      gallery4: "/images/home/gallery-4.jpg", // was interior
      gallery5: "/images/home/gallery-5.jpg", // was freshFood
      gallery6: "/images/home/gallery-6.jpg", // was heritageTerrace
    }
  },

  // Day page images (brunch & lunch)
  day: {
    hero: "/images/day/hero.jpg",
    morningBrunch: "/images/day/morning-brunch.jpg",
    lunch: "/images/day/lunch.jpg",
    gallery: {
      brunchPlate: "/images/day/gallery-1.jpg",
      coffeeDrinks: "/images/day/gallery-2.jpg",
      freshLunch: "/images/day/gallery-3.jpg",
      specialtyDrinks: "/images/day/gallery-4.jpg",
      artisanLunch: "/images/day/gallery-5.jpg",
      morningCoffee: "/images/day/gallery-6.jpg",
    },
  },

  // Night page images (dinner & wine)
  night: {
    hero: "/images/night/hero.jpg",
    dinnerSection: "/images/night/dinner-section.jpg",
    gallery: {
      dinnerPresentation: "/images/night/gallery-1.jpg",
      wineAndCocktails: "/images/night/gallery-2.jpg",
      artisanDishes: "/images/night/gallery-3.jpg",
      beverageService: "/images/night/gallery-4.jpg",
      refinedPlates: "/images/night/gallery-5.jpg",
      craftCocktails: "/images/night/gallery-6.jpg",
    },
  },

  // About page images
  about: {
    hero: "/images/about/hero.jpg",
    heritage: "/images/about/heritage.jpg",
    philosophy: "/images/about/philosophy.jpg",
    terrace: {
      main: "/images/about/terrace-1.jpg",
      heritage: "/images/about/terrace-2.jpg",
      intimate: "/images/about/terrace-3.jpg",
    },
    values: {
      quality: "https://placehold.co/600x800", // Placeholder
      heritage: "https://placehold.co/600x800", // Placeholder
      community: "https://placehold.co/600x800", // Placeholder
    },
  },

  // Contact page images
  contact: {
    hero: "/images/contact/hero.jpg",
  },

  // Common/shared images across pages
  common: {
    logo: "/images/common/logo.png",
  },
} as const;

// Type for image path keys (useful for TypeScript autocomplete)
export type ImagePath = typeof IMAGES;

// Helper function to get image path with type safety
export const getImagePath = (
  section: keyof typeof IMAGES,
  image: string
): string => {
  const sectionImages = IMAGES[section];
  if (typeof sectionImages === 'string') {
    return sectionImages;
  }
  // For nested objects, you'd need to implement deeper access
  return ''; // Fallback
};

// Responsive image sizes for different use cases
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw",
  heroFull: "100vw",
  gallery: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  galleryLarge: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  small: "(max-width: 768px) 50vw, 25vw",
} as const;