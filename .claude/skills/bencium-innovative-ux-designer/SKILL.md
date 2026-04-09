---
name: bencium-innovative-ux-designer
description: Comprehensive UX design skill covering design thinking, visual standards, interaction design, and accessibility. Use when creating or reviewing UI/UX for web or mobile products. Triggers on tasks involving design systems, component design, user flows, visual hierarchy, typography, color, spacing, or accessibility audits.
---

# Bencium Innovative UX Designer

A comprehensive UX design skill that covers the full spectrum of modern interface design — from high-level design thinking to pixel-level implementation details. Emphasizes distinctive, production-grade interfaces that avoid generic AI aesthetics.

## Core Philosophy

Ask clarifying questions before implementation, then commit boldly to a chosen aesthetic direction. Every design decision should be deliberate: nothing arbitrary, nothing default.

**Avoid:**
- Inter, Roboto, Arial, Space Grotesk as primary font choices
- Generic SaaS blue (#3B82F6)
- Glass morphism effects
- Apple design mimicry
- Cookie-cutter component layouts

**Embrace:**
- Characterful typography
- Unexpected color palettes
- Intentional hierarchy through type, color, and space
- Direct manipulation and immediate feedback patterns

---

## Design Principles

### 1. Simplicity Through Reduction
Eliminate distractions deliberately. Every element that remains should earn its place.

### 2. Material Honesty
Embrace digital properties authentically — don't simulate physical materials unless it serves a purpose.

### 3. Functional Layering
Create hierarchy through typography, color, and space. Not decoration.

### 4. Obsessive Detail
Hundreds of small intentional decisions define great design. Sweating the details is the job.

### 5. Coherent Design Language
Nothing should feel arbitrary. Every choice connects to the system.

---

## Tone Options

Select one direction and commit fully:

| Tone | Description |
|---|---|
| **Minimalist** | Reductive, clean, maximum whitespace, typographic focus |
| **Maximalist** | Rich layers, dense information, pattern mixing, high energy |
| **Retro-Futuristic** | Neon accents, chrome, geometry, nostalgic tech aesthetics |
| **Organic / Natural** | Earth tones, fluid shapes, textured warmth |
| **Editorial** | Bold headlines, grid-based, magazine-style hierarchy |
| **Brutalist** | Harsh contrasts, raw grid, monospace type, industrial |

---

## Visual Standards

### Color System
- Neutral base palette (gray scale foundation)
- 1–2 accent colors that carry meaning
- Semantic color tokens for states (success, warning, error, info)
- Test all combinations for 4.5:1 contrast minimum

### Typography Hierarchy
- **Headline:** Emotional, distinctive, brand-expressive
- **Body:** Functional, readable, 16px base, 1.5 line-height
- **UI Labels:** Compact, clear, consistent weight system
- Never use more than 2 typeface families

### Layout
- Grid-based with deliberate negative space
- 8px base spacing unit
- Generous padding on containers

### Interaction Patterns
- Direct manipulation wherever possible
- Immediate visual feedback on all state changes
- Transitions: 150–300ms for micro-interactions

---

## Accessibility Standards (WCAG 2.1 AA)

- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 for large text (18pt+ or 14pt+ bold)
- Minimum 44×44px touch targets
- All interactive elements keyboard-navigable
- Semantic HTML throughout
- Screen reader tested
- Documented support for reduced-motion preferences

---

## Implementation Stack

- **Components:** shadcn/ui (v4), Radix UI
- **Styling:** Tailwind CSS
- **Icons:** Phosphor Icons (SVG only — no emojis as icons)
- **Notifications:** sonner
- **Spacing:** flex/grid with `gap` (not direct margins)

---

## Pre-Implementation Questions

Before starting any design work, ask:

1. What is this interface's primary purpose?
2. Who is the target user? What are their mental models?
3. What tone/aesthetic direction fits this context?
4. What technical constraints exist (stack, existing design system)?
5. What will make this interface memorable and distinctive?

---

## Pre-Delivery Checklist

- [ ] Tone direction was chosen and executed consistently
- [ ] No generic fonts (Inter/Roboto/system as primary)
- [ ] No emojis as icons (SVG only)
- [ ] All interactive elements have `cursor-pointer`
- [ ] 4.5:1 contrast minimum verified
- [ ] WCAG 2.1 AA compliance checked
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Keyboard navigation works throughout
- [ ] Hover/focus states are visible and stable
- [ ] No horizontal scroll on mobile

---

*Source: [bencium/bencium-claude-code-design-skill](https://github.com/bencium/bencium-claude-code-design-skill/tree/main/bencium-innovative-ux-designer)*
