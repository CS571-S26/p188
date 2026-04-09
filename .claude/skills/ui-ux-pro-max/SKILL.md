---
name: ui-ux-pro-max
description: Design intelligence for building professional UI/UX across multiple platforms. Contains 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 10 technology stacks. Use when designing new pages, creating UI components, choosing visual styles, or reviewing UI code for UX and accessibility quality.
---

# UI/UX Pro Max

Comprehensive design intelligence skill for building professional UI/UX across web and mobile platforms. Provides a searchable database of styles, palettes, font pairings, and UX guidelines to inform every design decision.

**Contains:** 50+ styles · 161 color palettes · 57 font pairings · 161 product types · 99 UX guidelines · 25 chart types · 10 technology stacks

## When to Apply

**Must use when:**
- Designing new pages (Landing Page, Dashboard, Admin, SaaS, Mobile App)
- Creating or refactoring UI components
- Choosing color schemes, typography, spacing, or layout systems
- Reviewing UI code for UX, accessibility, or visual consistency
- Implementing navigation structures, animations, or responsive behavior

**Not needed for:**
- Pure backend logic
- API or database design only
- Infrastructure or DevOps work

---

## Ten Rule Categories by Priority

### 1. Accessibility (CRITICAL)
- Contrast ratio minimum 4.5:1 for normal text; 3:1 for large text
- All images have descriptive `alt` text
- Full keyboard navigation support
- `aria-label` on all icon-only interactive elements
- Semantic HTML elements throughout

### 2. Touch & Interaction (CRITICAL)
- Minimum touch target: 44×44px (Apple) / 48×48dp (Material)
- 8px minimum spacing between adjacent touch targets
- Loading feedback on all async actions (spinner, skeleton, progress)
- Swipe gestures follow platform conventions

### 3. Performance (HIGH)
- Use WebP or AVIF for all images
- Lazy load images and heavy components below the fold
- Cumulative Layout Shift (CLS) < 0.1
- Largest Contentful Paint (LCP) < 2.5s target

### 4. Style Selection (HIGH)
- Match visual style to product type and audience
- SVG icons only — no emojis as UI icons
- Consistent visual effects across the product (no style mixing)
- Use established design system tokens

### 5. Layout & Responsive (HIGH)
- Mobile-first design and implementation
- Viewport meta tag required on all pages
- No horizontal scroll at any standard breakpoint
- Grid/flex layouts with consistent spacing units

### 6. Typography & Color (MEDIUM)
- 16px base font size
- 1.5 line-height for body text
- Semantic color tokens (not raw hex values in components)
- Maximum 2 typeface families per product

### 7. Animation (MEDIUM)
- Duration: 150–300ms for micro-interactions; ≤400ms for complex transitions
- Motion must convey meaning or guide attention — not decorative
- Always respect `prefers-reduced-motion` media query
- Easing: ease-out for entrances, ease-in for exits

### 8. Forms & Feedback (MEDIUM)
- Visible labels for every input (never placeholder-only)
- Error messages appear near the relevant field
- Progressive disclosure: show advanced options only when needed
- Success confirmations after form submission

### 9. Navigation Patterns (HIGH)
- Bottom navigation: maximum 5 items, always icon + label
- Predictable back navigation behavior
- Deep linking support for all primary views
- Active state clearly distinguished from inactive

### 10. Charts & Data (LOW)
- All charts have legends and tooltips
- Colors convey meaning through both hue AND pattern (colorblind safe)
- Accessible label alternatives for all data visualizations
- Responsive chart sizing at all breakpoints

---

## Supported Technology Stacks

`html-tailwind` (default) · `react` · `nextjs` · `astro` · `vue` · `nuxtjs` · `nuxt-ui` · `svelte` · `swiftui` · `react-native` · `flutter` · `shadcn` · `jetpack-compose`

---

## How to Use

**Step 1:** Identify the product type, target audience, style keywords, and technology stack.

**Step 2 (Required):** Generate a design system appropriate to the product context:
- Product type (SaaS, e-commerce, dashboard, mobile app, etc.)
- Industry and audience characteristics
- Style keywords (minimal, bold, playful, enterprise, etc.)

**Step 3:** Apply stack-specific guidelines for your platform.

**Step 4:** Validate all outputs against the priority rules above before delivery.

---

## Key Quick Reference

| Rule | Value |
|---|---|
| Text contrast | 4.5:1 minimum |
| Large text contrast | 3:1 minimum |
| Touch target (iOS) | 44×44pt |
| Touch target (Android) | 48×48dp |
| Micro-interaction duration | 150–300ms |
| Complex transition max | 400ms |
| Base font size | 16px |
| Body line-height | 1.5 |
| Bottom nav max items | 5 |

---

*Source: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)*
