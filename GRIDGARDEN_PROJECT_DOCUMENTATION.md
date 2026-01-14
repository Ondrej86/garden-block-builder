# GridGarden Website - Complete AI Reproduction Guide

> **Purpose:** This document contains everything an AI agent needs to recreate this exact website from scratch.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Design System](#design-system)
4. [Typography](#typography)
5. [Color Palette](#color-palette)
6. [Spacing & Layout](#spacing--layout)
7. [Component Architecture](#component-architecture)
8. [Animation System](#animation-system)
9. [Component Details](#component-details)
10. [CSS Utilities](#css-utilities)
11. [Image Assets](#image-assets)
12. [Responsive Design](#responsive-design)
13. [SEO Configuration](#seo-configuration)

---

## Project Overview

**Company:** GridGarden (zahonynamieru.sk)  
**Industry:** Premium modular wooden garden beds  
**Location:** Slovakia, EU  
**Primary Goal:** Drive users to 3D Configurator for custom garden bed design

### Brand Identity
- Premium but approachable
- Natural and organic (wood textures, earthy tones)
- Clean, modern Scandinavian aesthetic
- Trustworthy and professional

---

## Technology Stack

```json
{
  "framework": "React 18.3.1",
  "bundler": "Vite",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion 12.26.2",
  "ui-components": "shadcn/ui",
  "icons": "Lucide React"
}
```

### Key Dependencies

```bash
npm install framer-motion lucide-react class-variance-authority tailwind-merge tailwindcss-animate @radix-ui/react-slot
```

---

## Design System

### CSS Variables (index.css)

All colors use HSL format without the `hsl()` wrapper for Tailwind compatibility.

```css
:root {
  /* Background & Foreground */
  --background: 30 20% 98%;        /* Warm off-white: #FAF9F7 */
  --foreground: 0 0% 20%;          /* Dark gray: #333333 */

  /* Card surfaces */
  --card: 0 0% 100%;               /* Pure white */
  --card-foreground: 0 0% 20%;

  /* Primary - Brand Green */
  --primary: 144 34% 27%;          /* #2D5A3D */
  --primary-foreground: 0 0% 100%; /* White text on green */
  --primary-dark: 144 34% 22%;     /* Darker green for hover: #234a30 */
  --primary-light: 144 34% 27%;

  /* Secondary - Wood/Warm */
  --secondary: 28 35% 48%;         /* #A67C52 */
  --secondary-foreground: 0 0% 100%;

  /* Muted - Warm Cream */
  --muted: 30 20% 96%;             /* #F7F5F2 */
  --muted-foreground: 0 0% 40%;

  /* Accent - Same as secondary */
  --accent: 28 35% 48%;
  --accent-foreground: 0 0% 100%;

  /* Gold - Rating stars only */
  --gold: 45 100% 50%;             /* #FFB800 */

  /* Borders & Inputs */
  --border: 30 10% 90%;
  --input: 30 10% 90%;
  --ring: 144 34% 27%;

  /* Border Radius */
  --radius: 0.75rem;               /* 12px */

  /* Custom Shadows */
  --shadow-sm: 0 1px 2px 0 hsl(0 0% 0% / 0.05);
  --shadow-md: 0 4px 6px -1px hsl(0 0% 0% / 0.1), 0 2px 4px -2px hsl(0 0% 0% / 0.1);
  --shadow-lg: 0 10px 15px -3px hsl(0 0% 0% / 0.1), 0 4px 6px -4px hsl(0 0% 0% / 0.1);
  --shadow-xl: 0 20px 25px -5px hsl(0 0% 0% / 0.1), 0 8px 10px -6px hsl(0 0% 0% / 0.1);
  --shadow-elevated: 0 25px 50px -12px hsl(144 34% 27% / 0.15);
}
```

---

## Typography

### Font Family

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

### Tailwind Config

```typescript
fontFamily: {
  sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
}
```

### Typography Scale

| Element | Classes | Example |
|---------|---------|---------|
| Hero H1 | `text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight` | "Design Your Dream Garden" |
| Section H2 | `text-4xl lg:text-5xl font-extrabold` | "Why Choose GridGarden?" |
| Card H3 | `text-2xl font-bold` | "PREMIUM Line" |
| Subsection H3 | `text-lg font-bold` | "Stack the blocks" |
| Body Large | `text-xl text-muted-foreground leading-relaxed` | Intro paragraphs |
| Body Default | `text-base text-muted-foreground` | Regular text |
| Body Small | `text-sm text-muted-foreground` | Descriptions |
| Caption | `text-xs font-medium` | Badges, labels |

### Typography Rules

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  letter-spacing: -0.025em; /* tracking-tight */
  line-height: 1.2;
}

p {
  line-height: 1.7;
}
```

---

## Color Palette

### Primary Colors

| Name | HSL | HEX | Usage |
|------|-----|-----|-------|
| Primary (Green) | `144 34% 27%` | #2D5A3D | Buttons, accents, headings |
| Primary Dark | `144 34% 22%` | #234a30 | Hover states, gradients |
| Primary Light | `144 34% 27% / 0.1` | - | Subtle backgrounds |

### Secondary Colors

| Name | HSL | HEX | Usage |
|------|-----|-----|-------|
| Secondary (Wood) | `28 35% 48%` | #A67C52 | Secondary accents, wood elements |
| Gold | `45 100% 50%` | #FFB800 | Rating stars ONLY |

### Neutral Colors

| Name | HSL | HEX | Usage |
|------|-----|-----|-------|
| Background | `30 20% 98%` | #FAF9F7 | Page background |
| Foreground | `0 0% 20%` | #333333 | Primary text |
| Muted | `30 20% 96%` | #F7F5F2 | Alternating sections |
| Muted Foreground | `0 0% 40%` | #666666 | Secondary text |
| Border | `30 10% 90%` | #E8E5E0 | Borders, dividers |

### Color Usage in Tailwind

```tsx
// ✅ CORRECT - Use semantic tokens
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">
<span className="text-muted-foreground">

// ❌ WRONG - Never use raw colors
<div className="bg-white text-gray-800">
<button className="bg-[#2D5A3D]">
```

---

## Spacing & Layout

### Container

```css
.container-grid {
  max-width: 80rem;        /* 1280px - max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;      /* 16px - px-4 */
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-grid {
    padding-left: 1.5rem;  /* 24px - sm:px-6 */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-grid {
    padding-left: 2rem;    /* 32px - lg:px-8 */
    padding-right: 2rem;
  }
}
```

### Section Spacing

| Type | Classes | Size |
|------|---------|------|
| Section Vertical | `py-24` | 96px top/bottom |
| Section Gap | `gap-16` | 64px between major elements |
| Content Gap | `gap-8` | 32px between cards/items |
| Text Gap | `mb-6` | 24px between paragraphs |
| Small Gap | `gap-4` | 16px for inline items |

### Grid Layouts

```tsx
// 4-column stats
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

// 3-column products
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

// 2-column content
<div className="grid lg:grid-cols-2 gap-16 items-center">
```

### Border Radius Scale

```typescript
borderRadius: {
  sm: "calc(var(--radius) - 4px)",   // 8px
  md: "calc(var(--radius) - 2px)",   // 10px
  lg: "var(--radius)",                // 12px
  xl: "1rem",                         // 16px
  "2xl": "1rem",                      // 16px
  "3xl": "1.5rem",                    // 24px
  full: "9999px",
}
```

---

## Component Architecture

### Page Structure (Index.tsx)

```tsx
<div className="min-h-screen">
  <Header />
  <main>
    <Hero />
    <USPSection />
    <section id="products">
      <ProductCategories />
    </section>
    <section id="assembly">
      <AssemblySection />
    </section>
    <ConfiguratorCTA />
    <Testimonials />
    <section id="about">
      <CompanyStory />
    </section>
    <section id="partners">
      <AffiliateSection />
    </section>
    <FinalCTA />
  </main>
  <Footer />
  <FloatingCTA />
</div>
```

### Section Background Pattern

```tsx
// White section
<section className="py-24 section-white">

// Cream/muted section
<section className="py-24 section-cream">

// Primary gradient (ConfiguratorCTA)
<section className="py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
```

---

## Animation System

### Framer Motion Setup

```tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerRef = useRef(null);
const isInView = useInView(containerRef, { once: true, margin: "-100px" });
```

### Standard Fade-Up Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
>
```

### Staggered Animation Pattern

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
```

### Slide-In Animation

```tsx
// From left
initial={{ opacity: 0, x: -50 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}

// From right
initial={{ opacity: 0, x: 50 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}
```

### Keyframe Animations (CSS)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### Tailwind Keyframes

```typescript
keyframes: {
  "count-up": {
    from: { opacity: "0", transform: "translateY(10px)" },
    to: { opacity: "1", transform: "translateY(0)" },
  },
  float: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
}
```

### Animated Number Counter

```tsx
const Counter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};
```

---

## Component Details

### 1. Header Component

**Behavior:**
- Fixed position, transparent on top
- Solid white background on scroll (after 50px)
- Mobile menu with full-screen overlay

**Scroll State Classes:**

```tsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? "bg-card/95 backdrop-blur-md shadow-md py-3"
    : "bg-transparent py-5"
}`}
```

**Navigation Links:**
```tsx
const navLinks = [
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#assembly" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "/pages/faq" },
  { label: "Contact", href: "/pages/contact" },
];
```

**Logo Structure:**
```tsx
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
  <span className="text-primary-foreground font-bold text-lg">G</span>
</div>
<span className="font-bold text-xl">GridGarden</span>
```

---

### 2. Hero Component

**Layout:**
- Full viewport height (`min-h-screen`)
- Background image with gradient overlay
- Content max-width: 48rem (max-w-3xl)

**Hero Overlay Gradient:**
```css
.hero-overlay {
  background: linear-gradient(
    to right,
    hsl(0 0% 0% / 0.65) 0%,
    hsl(0 0% 0% / 0.4) 50%,
    hsl(0 0% 0% / 0.2) 100%
  );
}
```

**Trust Badges:**
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm">
  🇸🇰 Made in Slovakia
</span>
```

**Product Line Label:**
```tsx
<p className="text-primary-foreground/80 text-sm tracking-[0.25em] uppercase font-medium mb-4">
  Raised Beds • Retaining Walls • Stairs • Custom Projects
</p>
```

**Scroll Indicator:**
```tsx
<div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full mt-2"
  />
</div>
```

---

### 3. Button Component Variants

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-md hover:shadow-lg",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        hero: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-xl hover:shadow-2xl hover:scale-105 transform",
        heroOutline: "border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm",
        cta: "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground shadow-elevated hover:shadow-2xl hover:scale-105 transform",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 rounded-md px-3 text-xs",
        default: "h-11 px-5 py-2.5",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
  }
);
```

---

### 4. USP Section Stats

**Data Structure:**
```tsx
const stats = [
  { number: 60, suffix: "mm", label: "Solid Wood Thickness", description: "..." },
  { number: 25, suffix: "+", label: "Years Lifespan", description: "..." },
  { number: 500, suffix: "+", label: "Happy Customers", description: "..." },
  { number: 0, suffix: "", label: "Screws Needed", description: "..." },
];
```

**Stat Card:**
```tsx
<div className="text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300">
  <div className="text-5xl lg:text-6xl font-extrabold text-primary mb-2">
    {number}{suffix}
  </div>
  <h3 className="text-lg font-bold text-foreground mb-2">{label}</h3>
  <p className="text-sm text-muted-foreground">{description}</p>
</div>
```

---

### 5. Product Categories

**Product Data:**
```tsx
const products = [
  {
    id: "basic",
    name: "BASIC Line",
    badge: "Budget-Friendly",
    badgeClass: "badge-budget",
    price: "from €45",
    material: "Spruce Wood • 18mm",
    lifespan: "3-5 Years",
    features: ["Easy assembly", "Lightweight design", "Ideal for small spaces"],
    featured: false,
  },
  {
    id: "premium",
    name: "PREMIUM Line",
    badge: "Most Popular",
    badgeClass: "badge-popular",
    price: "from €123",
    material: "Red Larch • 60mm",
    lifespan: "25+ Years",
    features: ["Patented BRICK system", "No maintenance", "Expandable anytime", "Superior insulation"],
    featured: true, // Gets special styling
  },
  // ...
];
```

**Badge Classes:**
```css
.badge-popular {
  background: linear-gradient(135deg, hsl(144 34% 27%) 0%, hsl(144 34% 35%) 100%);
  color: white;
}

.badge-budget {
  background: hsl(28 35% 48%);
  color: white;
}

.badge-custom {
  background: hsl(0 0% 20%);
  color: white;
}
```

**Featured Card Styling:**
```tsx
className={`group relative bg-card rounded-2xl overflow-hidden shadow-card card-hover ${
  product.featured ? "lg:scale-105 lg:-my-4 ring-2 ring-primary" : ""
}`}
```

**Card Hover Effect:**
```css
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-elevated);
}
```

**Star Rating:**
```tsx
{[...Array(5)].map((_, i) => (
  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
))}
```

---

### 6. Assembly Section

**Steps Data:**
```tsx
const steps = [
  { icon: Layers, title: "Stack the blocks", description: "..." },
  { icon: Hammer, title: "Tap into place", description: "..." },
  { icon: CheckCircle2, title: "Done!", description: "..." },
];
```

**Step Item:**
```tsx
<div className="flex gap-5">
  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
    <StepIcon className="w-7 h-7 text-primary" />
  </div>
  <div>
    <h3 className="text-lg font-bold text-foreground mb-1">
      <span className="text-primary mr-2">{index + 1}.</span>
      {title}
    </h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
</div>
```

**Animated Blocks Visual:**
- 3 stacked blocks with staggered animation
- Wood color gradient: `bg-gradient-to-r from-secondary to-secondary/80`
- Hammer icon appearing with spring animation

---

### 7. ConfiguratorCTA Section

**Background Pattern:**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
<div className="absolute inset-0 opacity-10">
  <div className="absolute inset-0" style={{
    backgroundImage: `url("data:image/svg+xml,...")`, // Cross pattern SVG
  }} />
</div>
```

**Feature Card:**
```tsx
<div className="flex flex-col items-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-primary-foreground" />
  </div>
  <h3 className="font-bold text-primary-foreground mb-1">{title}</h3>
  <p className="text-sm text-primary-foreground/70">{description}</p>
</div>
```

**Inverted CTA Button:**
```tsx
<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all">
```

---

### 8. Testimonials Carousel

**Testimonial Data:**
```tsx
const testimonials = [
  { name: "Jana K.", location: "Bratislava", rating: 5, text: "..." },
  // ...
];
```

**Carousel Implementation:**
```tsx
<div
  className="flex transition-transform duration-500 ease-out"
  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
  {testimonials.map((testimonial, index) => (
    <div key={index} className="w-full flex-shrink-0 px-4">
      {/* Card content */}
    </div>
  ))}
</div>
```

**Dot Navigation:**
```tsx
<button
  className={`w-2.5 h-2.5 rounded-full transition-all ${
    index === currentIndex
      ? "bg-primary w-8"
      : "bg-primary/20 hover:bg-primary/40"
  }`}
/>
```

**Quote Card:**
```tsx
<div className="bg-card rounded-3xl p-10 shadow-card relative">
  <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
  <div className="flex gap-1 mb-6">{/* Stars */}</div>
  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
    "{text}"
  </blockquote>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="text-primary font-bold text-lg">{name.charAt(0)}</span>
    </div>
    <div>
      <p className="font-bold text-foreground">{name}</p>
      <p className="text-sm text-muted-foreground">{location}</p>
    </div>
  </div>
</div>
```

---

### 9. Company Story Section

**Two-column layout with image on left, content on right (desktop)**

**Value Cards:**
```tsx
<div className="flex gap-4">
  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
    <Icon className="w-6 h-6 text-primary" />
  </div>
  <div>
    <h3 className="font-bold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
</div>
```

**Floating Badge:**
```tsx
<div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-elevated">
  <p className="text-3xl font-bold">25+</p>
  <p className="text-sm opacity-80">Years Guaranteed</p>
</div>
```

---

### 10. Affiliate Section

**In Slovak language - B2B partner program**

**Benefits Grid:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {benefits.map((benefit) => (
    <div className="text-center p-6 bg-background rounded-2xl border border-border/50">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <benefit.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
      <p className="text-sm text-muted-foreground">{benefit.description}</p>
    </div>
  ))}
</div>
```

**Partner Type Card:**
```tsx
<div className="group bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
  <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
  <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
    {cta}
    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</div>
```

---

### 11. Footer Component

**4-column layout on desktop, stacked on mobile**

**Social Icons:**
```tsx
<a className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
  <Icon className="w-5 h-5" />
</a>
```

**Link List:**
```tsx
<li>
  <a href="/path" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
    Link Text
  </a>
</li>
```

**Contact Item:**
```tsx
<li className="flex items-center gap-3">
  <Mail className="w-5 h-5 text-primary" />
  <a href="mailto:..." className="text-primary-foreground/70 hover:text-primary-foreground">
    email@domain.com
  </a>
</li>
```

**Bottom Bar:**
```tsx
<div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
```

---

### 12. Floating CTA

**Appears after 600px scroll**

```tsx
const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="floating-cta"
        >
          <Button variant="cta" size="lg">...</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

**Floating CTA CSS:**
```css
.floating-cta {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  box-shadow: 0 10px 40px -10px hsl(144 34% 27% / 0.5);
}
```

---

## CSS Utilities

### Section Backgrounds

```css
.section-cream {
  background-color: hsl(30 20% 96%);
}

.section-white {
  background-color: hsl(0 0% 100%);
}
```

### Gradient Text

```css
.text-gradient {
  background: linear-gradient(135deg, hsl(144 34% 27%) 0%, hsl(144 34% 35%) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Trust Badge

```css
.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: hsl(144 34% 27% / 0.08);
  color: hsl(144 34% 27%);
}
```

### Animated Underline

```css
.animated-underline {
  position: relative;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: hsl(144 34% 27%);
  transition: width 0.3s ease;
}

.animated-underline:hover::after {
  width: 100%;
}
```

### Custom Shadows (Tailwind)

```typescript
boxShadow: {
  elevated: "0 25px 50px -12px hsl(144 34% 27% / 0.15)",
  card: "0 4px 20px -2px hsl(0 0% 0% / 0.08)",
  "card-hover": "0 20px 40px -8px hsl(0 0% 0% / 0.12)",
}
```

---

## Image Assets

Generate with these prompts:

### hero-garden.jpg (1920x1080)
```
A 16:9 hero image of a beautiful backyard garden with premium wooden raised garden beds filled with lush vegetables and herbs. Golden hour sunlight, professional landscape photography, organic gardening, European countryside setting. Ultra high resolution.
```

### product-premium.jpg (800x600)
```
A product photo of a premium wooden raised garden bed made from thick red larch wood, filled with growing vegetables. Natural lighting, garden setting, Scandinavian design aesthetic, 60mm thick wood visible. Ultra high resolution.
```

### product-basic.jpg (800x600)
```
A product photo of a simple wooden raised garden bed made from light spruce wood, in a small urban garden or balcony. Bright daylight, minimal design, budget-friendly appearance. Ultra high resolution.
```

### product-wall.jpg (800x600)
```
A landscape photo of wooden retaining walls creating terraced garden levels on a slope, made from thick natural wood. Professional landscaping, multi-level design, European garden style. Ultra high resolution.
```

### wood-texture.jpg (800x1000)
```
Close-up texture photo of premium European red larch wood grain, warm tones, natural patterns visible, 60mm thickness visible from the side, craftsmanship quality. Ultra high resolution.
```

---

## Responsive Design

### Breakpoints

```css
/* Tailwind defaults */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Patterns

```tsx
// Typography
className="text-5xl sm:text-6xl lg:text-7xl"

// Grid columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Flex direction
className="flex flex-col sm:flex-row"

// Spacing
className="py-16 md:py-20 lg:py-24"

// Show/hide
className="hidden lg:flex"
className="lg:hidden"
```

### Touch Targets

All interactive elements: minimum `h-11` (44px) for mobile accessibility.

---

## SEO Configuration

### HTML Head (index.html)

```html
<title>GridGarden – Premium Modular Wooden Garden Beds | Made in Slovakia</title>
<meta name="description" content="Design your perfect raised garden bed with our 3D configurator. Premium 60mm red larch wood, 25+ year lifespan, no-screw assembly. Made in Slovakia." />
<meta name="keywords" content="raised garden beds, modular garden beds, wooden raised beds, red larch, premium garden beds, vyvýšené záhony, záhony na mieru" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="GridGarden – Premium Modular Wooden Garden Beds" />
<meta property="og:description" content="Design your perfect raised garden bed with our 3D configurator. Premium 60mm red larch wood, 25+ year lifespan." />
<meta property="og:image" content="/og-image.jpg" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="GridGarden – Premium Modular Wooden Garden Beds" />
<meta name="twitter:description" content="Design your perfect raised garden bed with our 3D configurator." />
```

### Semantic HTML

- Single `<h1>` in Hero: "Design Your Dream Garden"
- Section headings use `<h2>`
- Subsections use `<h3>`
- All images have descriptive `alt` attributes
- Navigation uses `<nav>` element
- Main content wrapped in `<main>`
- Footer uses `<footer>` element

---

## Quick Reference Card

### Colors (Tailwind Classes)
- Primary: `bg-primary`, `text-primary`
- Secondary: `bg-secondary`, `text-secondary`
- Background: `bg-background`, `bg-muted`, `bg-card`
- Text: `text-foreground`, `text-muted-foreground`
- Gold stars: `text-gold`, `fill-gold`

### Common Patterns
- Section: `py-24 section-white` or `py-24 section-cream`
- Container: `container-grid`
- Heading: `text-4xl lg:text-5xl font-extrabold text-foreground`
- Subtext: `text-lg text-muted-foreground`
- Icon container: `w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center`
- Card: `bg-card rounded-2xl shadow-card`
- Badge: `px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary`

### Animation
- Fade up: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Duration: `transition={{ duration: 0.5 }}`
- Stagger: `delay: index * 0.1`

---

*Document generated for AI reproduction purposes. Last updated: 2024*
