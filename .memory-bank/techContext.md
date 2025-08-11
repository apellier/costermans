# Tech Context: Café Costermans

## Technologies Used

### Core Framework
- **Next.js 15.4.6**: React framework with App Router
- **React 19.1.0**: UI library with latest features
- **TypeScript 5.x**: Static type checking
- **Node.js**: Runtime environment

### Styling & UI
- **Tailwind CSS 4.x**: Utility-first CSS framework with custom brand integration
- **@tailwindcss/postcss**: PostCSS integration
- **Enhanced CSS System**: Typography hierarchy, button system, accessibility features
- **Font Implementation**: Geometric sans-serif (Futura/Avenir) and serif (Garamond) fonts

### Development Tools
- **ESLint**: Code linting with Next.js config
- **@eslint/eslintrc**: ESLint configuration
- **PostCSS**: CSS processing for Tailwind

### Build & Development
- **Turbopack**: Fast development server (via `--turbopack` flag)
- **npm**: Package management
- **TypeScript Compiler**: Type checking and compilation

## Development Setup

### Environment Requirements
- Node.js (version compatible with Next.js 15)
- npm for package management
- Modern browser for testing

### Available Scripts
```json
{
  "dev": "next dev --turbopack",    // Development server with Turbopack
  "build": "next build",            // Production build
  "start": "next start",            // Production server
  "lint": "next lint"               // Code linting
}
```

### Development Workflow
1. **Local Development**: `npm run dev` for hot-reload development server
2. **Type Checking**: Integrated TypeScript compilation
3. **Linting**: `npm run lint` for code quality checks
4. **Building**: `npm run build` for production optimization

## Implementation Features

### SEO & Metadata
- **Comprehensive Metadata**: Page-specific titles, descriptions, keywords
- **Structured Data**: JSON-LD schema for restaurant information
- **Open Graph**: Social media sharing optimization
- **Page Layouts**: Individual layouts for metadata handling

### Accessibility Implementation
- **WCAG Compliance**: Full accessibility with ARIA labels and semantic HTML
- **Keyboard Navigation**: Tab order, focus management, skip links
- **Screen Reader Support**: Proper headings hierarchy and descriptive labels
- **Responsive Design**: Touch-friendly interactions and mobile optimization

### Interactive Features
- **Contact Form**: React state management with conditional field rendering
- **Mobile Menu**: Responsive navigation with proper ARIA states
- **Form Validation**: Client-side validation with user feedback
- **Accessibility Preferences**: Reduced motion and high contrast support

## Dependencies

### Production Dependencies
- **react**: 19.1.0 (UI library)
- **react-dom**: 19.1.0 (React DOM bindings)
- **next**: 15.4.6 (Framework)

### Development Dependencies
- **typescript**: ^5 (Type checking)
- **@types/node**: ^20 (Node.js types)
- **@types/react**: ^19 (React types)
- **@types/react-dom**: ^19 (React DOM types)
- **@tailwindcss/postcss**: ^4 (Tailwind PostCSS)
- **tailwindcss**: ^4 (CSS framework)
- **eslint**: ^9 (Linting)
- **eslint-config-next**: 15.4.6 (Next.js ESLint config)
- **@eslint/eslintrc**: ^3 (ESLint configuration)

## Tool Usage Patterns

### Development Server
- **Turbopack**: Enabled by default for faster development builds
- **Hot Reload**: Automatic browser refresh on file changes
- **Error Overlay**: Development-time error reporting

### Build Process
- **Static Generation**: Pages pre-rendered at build time
- **Optimization**: Automatic code splitting and optimization
- **Type Checking**: Integrated TypeScript compilation during build

### Code Quality & Architecture
- **ESLint**: Next.js best practices with accessibility rules
- **TypeScript**: Full type safety across components and forms
- **Component Architecture**: Reusable patterns with accessibility built-in
- **CSS Organization**: Custom properties, utility classes, and component styles

## Deployment Ready

### Production Features
- **SEO Complete**: Metadata, structured data, sitemap ready
- **Performance Optimized**: Static generation with Next.js optimizations
- **Accessibility Compliant**: WCAG 2.1 AA compliance achieved
- **Content Management**: Template system for easy content updates

### Deployment Stack
- **Vercel Ready**: Optimized for seamless Vercel deployment
- **Domain Ready**: Prepared for costermans.be domain configuration
- **Analytics Ready**: Structure prepared for Google Analytics integration
- **Monitoring Ready**: Error tracking and performance monitoring setup

### Content Integration
- **Template System**: Structured markdown templates in /content-templates/
- **Content Structure**: Clear separation between code and content
- **Multi-language Ready**: Architecture supports future internationalization
- **CMS Ready**: Structure prepared for headless CMS integration if needed