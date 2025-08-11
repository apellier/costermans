# System Patterns: Café Costermans

## Architecture Overview
- **Framework**: Next.js 15 with App Router architecture
- **UI Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with custom color system
- **Structure**: Multi-page application with shared components

## Key Technical Decisions

### Framework Choice
- **Next.js 15**: Chosen for modern React features, built-in optimization, and excellent developer experience
- **App Router**: Using the new app directory structure for better organization and performance
- **TypeScript**: Full type safety across the application
- **Tailwind CSS v4**: Utility-first CSS with custom design system integration

### Design System Integration
- **Color System**: Complete CSS custom properties integrated with Tailwind (forest-green, warm-beige, dark-green, ochre)
- **Typography System**: Geometric sans-serif (Futura/Avenir) headers with serif body text using CSS custom properties
- **Button System**: .btn-primary and .btn-secondary classes with hover animations and accessibility
- **Component Architecture**: Reusable components with consistent accessibility patterns

## Design Patterns in Use

### Typography System Implementation
```css
/* Typography hierarchy with brand fonts */
--font-geometric: 'Futura', 'Avenir', 'Helvetica Neue', system-ui, sans-serif;
--font-serif: 'Garamond', 'Times New Roman', serif;

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-geometric);
  font-weight: 600;
  letter-spacing: 0.025em;
}

.text-body {
  font-family: var(--font-serif);
  line-height: 1.7;
}
```

### Enhanced Button System
```css
.btn-primary {
  font-family: var(--font-geometric);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-2px) on hover;
}
```

### Component Organization
- **Header.tsx**: Enhanced navigation with mobile menu, ARIA labels, and accessibility
- **Footer.tsx**: Contact information and links
- **Layout Components**: Root layout with skip links, SEO metadata, and structured data
- **Page Layouts**: Individual layouts for metadata handling (about/, menu/, contact/)
- **Interactive Components**: Contact form with React state management and validation

### Advanced Styling Patterns
- **Button System**: .btn-primary and .btn-secondary with hover animations and focus states
- **Typography Hierarchy**: Geometric headers with serif body text and proper line heights
- **Accessibility Features**: Skip links, ARIA labels, keyboard navigation, and screen reader support
- **Interactive States**: Consistent hover, focus, and active states with cubic-bezier transitions
- **Responsive Design**: Mobile-first with progressive enhancement and touch-friendly interactions

## Component Relationships

### Enhanced Layout Hierarchy
```
app/
├── layout.tsx (root layout with SEO, skip links, structured data)
├── page.tsx (home page with accessibility improvements)
├── about/
│   ├── layout.tsx (metadata handling)
│   └── page.tsx (complete heritage story)
├── menu/
│   ├── layout.tsx (metadata handling)
│   └── page.tsx (structured menu with categories)
└── contact/
    ├── layout.tsx (metadata handling)
    └── page.tsx (interactive form with validation)

components/
├── Header.tsx (enhanced navigation with accessibility)
└── Footer.tsx (site footer)

content-templates/
├── about-content.md
├── menu-content.md
├── contact-content.md
└── site-metadata.md
```

### Data Flow & State Management
- **Content Templates**: Structured markdown templates for content population
- **Form State**: React useState for contact form with conditional field rendering
- **Navigation State**: Mobile menu toggle with proper ARIA states
- **SEO Data**: Structured data (JSON-LD) for search engine optimization

## Critical Implementation Paths

### Page Structure
1. **Root Layout**: Provides consistent Header/Footer across all pages
2. **Home Page**: Hero section, features, hours/location, reservation CTA
3. **Navigation**: Link components connecting all major pages
4. **Responsive Design**: Mobile-first approach with progressive enhancement

### Enhanced Styling System
1. **Typography System**: Geometric sans-serif headers with serif body text
2. **Accessibility CSS**: Focus states, reduced motion, high contrast support
3. **Interactive Elements**: Hover animations with cubic-bezier transitions
4. **Component Utilities**: Card shadows, texture overlays, and visual hierarchy
5. **Form Styling**: Consistent input styling with focus management

### Implementation Achievements
- **SEO Complete**: Comprehensive metadata, structured data, Open Graph tags
- **Accessibility Complete**: WCAG compliant with ARIA labels, keyboard navigation, skip links
- **Performance Optimized**: Static generation, reduced motion support, optimized CSS
- **Form Functionality**: Interactive contact form with validation and conditional fields
- **Mobile Experience**: Responsive design with touch-friendly interactions and mobile menu