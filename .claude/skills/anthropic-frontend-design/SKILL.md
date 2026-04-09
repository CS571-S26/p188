---
name: anthropic-frontend-design
description: Creates distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Use when building UI components, pages, or full interfaces where visual quality and bold creative direction matter. Triggers on tasks like "build a landing page", "create a dashboard", "design a component", or any frontend UI task.
---

# Anthropic Frontend Design

Guides the creation of distinctive, production-grade frontend interfaces by combining structured design intelligence with a bold, intentional aesthetic philosophy. The goal is to avoid cookie-cutter "AI default" output and produce work that feels human, intentional, and memorable.

## Core Philosophy: Anti-AI Slop

Claude is capable of extraordinary creative work yet often defaults to safe, generic patterns. This skill **mandates** breaking those patterns.

**Avoid:**
- Inter, Roboto, Arial, system fonts as primary choice
- Generic SaaS blue (#3B82F6) and purple-on-white gradients
- Glass morphism and generic card layouts
- Emojis used as UI icons
- Apple design mimicry

**Mandate:**
- Unique, characterful typography
- Context-specific color schemes
- Intentional motion and animation
- Unexpected spatial composition
- Production-grade functional code

---

## Design Thinking Process

Before writing a single line of code, understand context and commit to a bold aesthetic direction:

1. **Purpose** — What problem does this solve? Who is it for?
2. **Tone** — Pick an extreme direction (see Aesthetic Directions below)
3. **Differentiation** — What makes this unforgettable?
4. **Intelligence** — Use design references to gather palettes, fonts, and UX guidelines

**Never half-commit. Pick a direction and execute it fully.**

---

## Aesthetic Directions

| Direction | Description |
|---|---|
| **Brutally Minimal** | Monochrome, extreme white space, sparse typography |
| **Maximalist Chaos** | Overlapping elements, dense information, pattern mixing |
| **Retro-Futuristic** | Chrome effects, neon accents, 80s-inspired geometry |
| **Luxury / Refined** | Gold/dark accents, serif fonts, generous spacing |
| **Playful / Toy-like** | Rounded corners, bright pastels, bouncy animations |
| **Editorial / Magazine** | Grid-based, bold headlines, clean visual hierarchy |
| **Brutalist / Raw** | Monospace fonts, harsh contrasts, industrial aesthetic |
| **Art Deco** | Sharp angles, metallic accents, ornate geometric borders |
| **Organic / Natural** | Earth tones, fluid shapes, textured backgrounds |
| **Soft / Pastel** | Gentle colors, rounded forms, calm visual rhythm |

---

## Professional UI Rules

| Rule | Do | Don't |
|---|---|---|
| **Icons** | SVG only (Heroicons, Lucide, Simple Icons) | Use emojis as UI icons |
| **Typography** | Beautiful, unique Google Fonts or custom fonts | Inter, Roboto, Arial, system fonts |
| **Hover states** | Stable transitions (color/opacity/shadow) | Scale transforms that shift layout |
| **Cursor** | Add `cursor-pointer` to all interactive items | Leave default cursor on buttons/links |
| **Contrast** | Minimum 4.5:1 ratio for accessibility | Low-contrast unreadable text |
| **Colors** | Unique, context-specific palette | Generic SaaS gradients |

---

## Motion & Animation

- Prioritize CSS-only solutions where possible
- Focus on high-impact moments: staggered reveals on page load, micro-interactions on state change
- Duration: **150–300ms** for micro-interactions; **≤400ms** for complex transitions
- Always respect `prefers-reduced-motion`

---

## Spatial Composition

- Use **asymmetry, overlap, or diagonal flow** to break standard grids
- Balance generous negative space with intentional density
- Every element's position should feel deliberate, not default

---

## Implementation Tools

- **Components:** shadcn/ui (v4), Radix UI primitives
- **Styling:** Tailwind CSS utilities
- **Icons:** Phosphor Icons, Lucide, Heroicons (SVG only)
- **Notifications:** sonner
- **Spacing:** `gap` via flex/grid wrappers (not direct margins)
- **Fonts:** Google Fonts or self-hosted variable fonts

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (SVG only throughout)
- [ ] Typography is characterful — not "AI standard" Inter/Roboto
- [ ] Color scheme is unique to this context (no generic gradients)
- [ ] Hover states provide clear, stable visual feedback
- [ ] Motion feels intentional and enhances UX

### UX & Accessibility
- [ ] All interactive elements have `cursor-pointer`
- [ ] Form inputs have visible labels; images have `alt` text
- [ ] Text contrast meets 4.5:1 minimum (WCAG AA)
- [ ] Tested in Light and Dark mode
- [ ] Responsive at all breakpoints: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

---

## Example Prompts

- "Build a SaaS landing page with a retro-futuristic aesthetic"
- "Create a dashboard component using an editorial magazine layout"
- "Design a login form — make it feel luxury and refined, not generic"
- "Refactor this component to avoid looking like AI-generated slop"

---

*Source: Anthropic Frontend Design skill via [openclaw/skills](https://github.com/openclaw/skills/blob/main/skills/qrucio/anthropic-frontend-design/SKILL.md)*
