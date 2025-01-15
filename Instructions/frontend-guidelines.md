# Frontend Guidelines Document

## 1. Design Principles

### 1.1 Core Principles
- **Minimalism**: Clean, uncluttered layouts that prioritize content
- **Hierarchy**: Clear visual hierarchy to guide user attention
- **Consistency**: Uniform design patterns throughout the site
- **Responsiveness**: Fluid adaptation across all device sizes
- **Intentionality**: Every design element serves a purpose

### 1.2 Visual Language
- Modern and sophisticated
- Emphasis on whitespace
- Strong typography
- Subtle animations
- High-contrast elements

## 2. Color Palette

### 2.1 Primary Colors
```css
/* Core Brand Colors */
--primary-900: #1a1a1a;     /* Main Text */
--primary-800: #2b2b2b;     /* Headers */
--primary-100: #f5f5f5;     /* Background */
--accent-500: #3b82f6;      /* Interactive Elements */
```

### 2.2 Neutral Colors
```css
/* Grayscale */
--gray-900: #111827;
--gray-800: #1f2937;
--gray-700: #374151;
--gray-600: #4b5563;
--gray-500: #6b7280;
--gray-400: #9ca3af;
--gray-300: #d1d5db;
--gray-200: #e5e7eb;
--gray-100: #f3f4f6;
--gray-50:  #f9fafb;
```

### 2.3 Semantic Colors
```css
/* Status Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

## 3. Typography

### 3.1 Font Families
```css
/* Primary Font - Headers */
--font-primary: 'Instrument Sans', sans-serif;

/* Secondary Font - Body */
--font-secondary: 'Inter', sans-serif;

/* Monospace - Code */
--font-mono: 'JetBrains Mono', monospace;
```

### 3.2 Font Sizes
```css
/* Type Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### 3.3 Font Weights
```css
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## 4. Spacing System

### 4.1 Base Spacing Units
```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### 4.2 Layout Spacing
- Content padding: 1.5rem (24px)
- Section spacing: 4rem (64px)
- Grid gap: 1rem (16px)

## 5. Component Guidelines

### 5.1 Buttons
```css
/* Button Styles */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.button-primary {
  background-color: var(--accent-500);
  color: white;
}

.button-secondary {
  border: 1px solid var(--gray-300);
  background-color: white;
}
```

### 5.2 Cards
```css
/* Card Styles */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1.5rem;
}
```

### 5.3 Social Icons
- Size: 24px x 24px
- Color: Monochrome with hover states
- Spacing: 1.5rem between icons
- Transition: 0.2s ease-in-out

## 6. Layout Guidelines

### 6.1 Grid System
- 12-column grid
- Gutter width: 24px
- Maximum content width: 1280px
- Breakpoints:
  ```css
  --screen-sm: 640px;
  --screen-md: 768px;
  --screen-lg: 1024px;
  --screen-xl: 1280px;
  --screen-2xl: 1536px;
  ```

### 6.2 Header Layout
- Height: 80px
- Sticky positioning
- Full-width
- Centered content
- Logo height: 40px
- Navigation spacing: 24px between items

### 6.3 Main Content Area
- Max-width: 1200px
- Side padding: 24px
- Top padding: 40px
- Bottom padding: 80px

## 7. Animation Guidelines

### 7.1 Transitions
```css
/* Standard Transitions */
--transition-base: all 0.2s ease;
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 7.2 Hover States
- Scale: 1.02
- Opacity: 0.8
- Background lightness: +5%
- Shadow increase: +4px blur

## 8. Image Guidelines

### 8.1 Album Cover/Profile Image
- Aspect ratio: 1:1
- Dimensions: 400px x 400px
- Format: WebP with JPEG fallback
- Loading: Lazy with blur placeholder

### 8.2 Optimization Rules
- Max file size: 200KB
- Compression level: 80%
- Responsive sizes:
  ```html
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  ```

## 9. Responsive Design

### 9.1 Mobile First
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch targets: minimum 44px x 44px
- Font size adjustments at breakpoints

### 9.2 Breakpoint Behavior
```css
/* Small screens (mobile) */
@media (max-width: 640px) {
  :root {
    --content-padding: 1rem;
    --header-height: 64px;
  }
}

/* Medium screens (tablet) */
@media (min-width: 641px) and (max-width: 1024px) {
  :root {
    --content-padding: 2rem;
    --header-height: 72px;
  }
}

/* Large screens (desktop) */
@media (min-width: 1025px) {
  :root {
    --content-padding: 3rem;
    --header-height: 80px;
  }
}
```

## 10. Accessibility Guidelines

### 10.1 Color Contrast
- Text contrast ratio: minimum 4.5:1
- Large text contrast ratio: minimum 3:1
- Interactive elements: minimum 3:1

### 10.2 Focus States
```css
/* Focus Styles */
:focus {
  outline: 2px solid var(--accent-500);
  outline-offset: 2px;
}

/* Focus-visible for better UX */
:focus:not(:focus-visible) {
  outline: none;
}
```

## 11. Performance Guidelines

### 11.1 Image Loading
- Lazy loading for off-screen images
- Proper sizing and compression
- Next/Image component usage
- WebP format with fallbacks

### 11.2 Animation Performance
- Use transform and opacity
- Avoid layout triggers
- RequestAnimationFrame for complex animations
- Reduced motion support