# Technical Context

## Technology Stack

### Core Technologies
- React 18+
- TypeScript
- Vite (Build tool)
- SCSS/SASS

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Git for version control

### Project Structure
```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable React components
│   ├── common/     # Shared components
│   ├── layout/     # Layout components
│   ├── sections/   # Page-specific sections
│   ├── Button3D.tsx # Reusable 3D button component
│   └── HeroSection.tsx # Hero section component
├── fonts/          # Custom font files
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── styles/         # Global styles and SCSS modules
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

### Components
- Section Components
  - HeroSection: Main hero with title and image animations
  - AboutSection: Text and button with horizontal reveal
  - WorkSection: Project grid with hover animations
  - ServicesSection: Service cards with staggered animations
  - BlogSection: Blog post grid with text animations
  - TestimonialSection: Testimonials and statistics
  - CTASection: Call to action with marquee animation
- Reusable Components
  - Button3D: Button with 3D flip animation
  - HorizontalRevealText: Text with gradient reveal animation

### Dependencies
- React Router for navigation
- Framer Motion for animations
  - useInView for scroll-triggered animations
  - useAnimation for controlled animations
  - useTransform for value mapping
- React Icons for iconography

### Development Setup
1. Node.js environment
2. Package manager: npm/yarn
3. Development server: Vite
4. Browser developer tools

### Technical Constraints
- Must work in modern browsers
- Must be responsive
- Must maintain performance
- Must follow accessibility guidelines

### Build & Deployment
- Production build via Vite
- Static file hosting
- Environment configuration
- Asset optimization 