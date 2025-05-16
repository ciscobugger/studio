# System Patterns

## Architecture Overview

### Component Architecture
- Atomic Design Methodology
  - Atoms: Basic building blocks (buttons, inputs)
  - Molecules: Combinations of atoms (form fields, cards)
  - Organisms: Complex UI sections (headers, footers)
  - Templates: Page layouts
  - Pages: Complete pages

### State Management
- React Context for global state
- Local state for component-specific data
- Custom hooks for reusable state logic

### Routing
- React Router for navigation
- Route-based code splitting
- Protected routes where needed

### Styling Patterns
- SCSS Modules for component styles
- BEM naming convention
- CSS Custom Properties for theming
- Responsive mixins for breakpoints

### Animation Patterns
- Framer Motion for component animations
  - Scroll-triggered animations using useInView and useScroll
  - useTransform for scroll-based value interpolation
  - Direction-aware animations based on scroll direction
  - Blur/unblur reveal effects
  - Staggered text animations with delays
  - Horizontal text reveal with gradient masking
    - Fade-in gradient overlay technique
    - CSS mask with linear-gradient
  - 3D flip animations for buttons
    - Front and back face implementations
    - Rotation with preserve-3d
  - Custom animation variants for hover/tap states
  - MotionValues for fine-grained control
  - Spring animations with proper physics
- Intersection Observer for scroll triggers
  - Custom threshold configurations
  - Root margin adjustments
  - Lazy loading based on viewport entry
- CSS transforms for 3D effects
  - transform-style: preserve-3d for true 3D layering
  - perspective management (perspective property)
  - backface-visibility control
  - transform-origin manipulation
  - Combined transforms (rotate, translate, scale)
- RequestAnimationFrame for smooth marquee animations
  - Endless loop implementation
  - Self-adjusting timing
  - Performance throttling
- Horizontal scroll animations
  - Title movement tied to scroll position
  - Parallax effects with different speeds
  - Custom scroll ranges for controlled movement ([0, 0.75] for smoother animations)
- CSS transitions for simple animations
  - Easing functions (cubic-bezier)
  - Multi-property transitions
  - Staggered delays
- Hardware acceleration optimizations
  - transform: translate3d(0, 0, 0) for GPU rendering
  - will-change property for performance hints
  - backface-visibility management
  - Composite layer control
  - Paint optimization through transform-only animations

## Design Patterns

### Component Patterns
- Container/Presenter pattern
- Higher-Order Components
- Render Props
- Custom Hooks
- Section components for page organization
- Reusable animation components
  - HorizontalRevealText for consistent text animations
  - Button3D for interactive 3D buttons
  - Animated containers with consistent behavior

### Code Organization
- Feature-based folder structure
- Shared components in common directory
- Page-specific components in pages directory
- Utility functions in utils directory
- Section components in dedicated sections directory

### Performance Patterns
- Code splitting
- Lazy loading
- Image optimization
- Memoization where needed
- Animation performance optimization
  - GPU acceleration
  - Optimized blur effects
  - Throttled scroll event listeners
  - Avoiding layout thrashing
  - Reducing paint operations

### Testing Patterns
- Component testing
- Integration testing
- E2E testing
- Test-driven development

## Best Practices

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for formatting
- Git hooks for pre-commit checks

### Documentation
- JSDoc comments
- README files
- Component documentation
- API documentation

### Security
- Input validation
- XSS prevention
- CSRF protection
- Secure headers 

### Accessibility
- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation
- Animation considerations
  - Respecting reduced motion preferences
  - Ensuring content is readable during animations
  - High-contrast mode adaptations 