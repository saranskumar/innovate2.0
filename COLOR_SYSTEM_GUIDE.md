# IEEE × inApp Color System Guide

> **Quick Reference & Usage Documentation**
> 
> This is your single source of truth for all color usage on the IEEE × inApp Hackathon website.

---

## 🎯 Core Philosophy

1. **Light theme is default** (no dark-first thinking)
2. **Red is an accent**, never dominant
3. **Neutrals carry content** (80% of UI)
4. **Gradients are branding moments**, not layout tools

---

## 🎨 Color Tokens Quick Reference

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-red-500` | #E53935 | Primary CTA buttons, active nav, important numbers, focus rings |
| `brand-red-600` | #D32F2F | Button hover, active link state, pressed state |
| `brand-orange-500` | #F4511E | Gradient blends only, small highlights |

### Neutral System

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-0` | #FFFFFF | Main page background, primary reading areas |
| `neutral-50` | #F9FAFB | Alternate sections, visual rhythm |
| `neutral-100` | #F3F4F6 | Cards, FAQ panels, schedule blocks, tables |

### Text Hierarchy

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | #111827 | H1-H4, section titles, important labels |
| `text-secondary` | #374151 | Paragraphs, descriptions, card content |
| `text-muted` | #6B7280 | Dates, locations, helper text, footnotes |

### Borders & Links

| Token | Hex | Usage |
|-------|-----|-------|
| `border-default` | #E5E7EB | Cards, inputs, section dividers |
| `border-active` | #E53935 | Focus states, active inputs, selected cards |
| `link-default` | #E53935 | Default link color |
| `link-hover` | #D32F2F | Link hover state |

### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | #16A34A | Success messages, confirmation states |
| `warning` | #F59E0B | Warning messages, attention states |
| `error` | #DC2626 | Error messages, destructive actions |

---

## 🧩 Component Color Mapping

### Navbar
```tsx
<nav className="bg-neutral-0 border-b border-border-default">
  <a className="text-text-primary hover:text-brand-red-500">Link</a>
  <a className="text-brand-red-500" aria-current="page">Active Link</a>
</nav>
```

### Hero Section
```tsx
<section className="bg-brand-gradient">
  <div className="bg-neutral-0/90 backdrop-blur-sm">
    <h1 className="text-text-primary">Heading</h1>
  </div>
</section>
```

### Cards
```tsx
<div className="bg-neutral-100 border border-border-default rounded-lg hover:shadow-md">
  <h3 className="text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Card description</p>
  <span className="text-text-muted">Meta info</span>
</div>
```

### Buttons

**Primary Button**
```tsx
<button className="bg-brand-red-500 hover:bg-brand-red-600 text-neutral-0 rounded-xl font-medium">
  Register Now
</button>
```

**Secondary Button**
```tsx
<button className="bg-neutral-0 border border-brand-red-500 text-brand-red-500 hover:bg-red-50 rounded-xl">
  Learn More
</button>
```

**Tertiary (Link Button)**
```tsx
<button className="text-brand-red-500 hover:text-brand-red-600 hover:underline">
  View Details
</button>
```

### Schedule Table
```tsx
<div className="bg-neutral-50">
  <div className="bg-neutral-100 border border-border-default">
    <h4 className="text-text-primary">Event Name</h4>
    <p className="text-text-secondary">Description</p>
    <span className="text-text-muted">10:00 AM - 11:00 AM</span>
  </div>
</div>
```

### Glass Surface (Limited Use)
```tsx
<div className="glass-surface rounded-lg">
  <h3 className="text-text-primary">Highlighted Content</h3>
</div>
```

---

## ✅ Do's and ❌ Don'ts

### ✅ DO

- Use `brand-red-500` for primary CTAs and important actions
- Use neutral system for 80% of backgrounds
- Use text hierarchy consistently (primary for headings, secondary for body)
- Underline links only on hover
- Keep button corners rounded (10-12px / `rounded-xl`)
- Use subtle shadows (`shadow-sm` to `shadow-md`)

### ❌ DON'T

- **Never** use red as page background
- **Never** use red for body text
- **Never** use gradients behind dense content
- **Never** use colored shadows
- **Never** use more than 1-2 glass surfaces per page
- **Never** bold links inside paragraphs

---

## 🎨 Brand Gradient Usage

### Allowed
- ✅ Hero background
- ✅ Highlight banner (1 max)
- ✅ Section divider background

### NOT Allowed
- ❌ Behind paragraphs
- ❌ Forms
- ❌ Cards with dense content
- ❌ Footer

**Rule:** If text needs more than 2 lines, the gradient must be removed.

---

## ♿ Accessibility Requirements

1. **Contrast ≥ WCAG AA** for all text
2. **Red never used alone** to indicate state (must have icon/text)
3. **Focus rings visible and clear** (`border-active` or `focus-ring` class)
4. **Text always readable** without relying on color

---

## 🔄 Migration Guide

If you have existing components using old tokens, here's how to migrate:

| Old Token | New Token | Notes |
|-----------|-----------|-------|
| `primary` | `brand-red-500` | Main brand color |
| `primary-dark` | `brand-red-600` | Hover states |
| `background` | `neutral-0` | Main background |
| `background-subtle` | `neutral-50` | Alternate sections |
| `background-muted` | `neutral-100` | Cards and surfaces |
| `text-secondary` | `text-secondary` | ✅ Same (but new hex) |
| `text-tertiary` | `text-muted` | Renamed for clarity |
| `border` | `border-default` | Default borders |

---

## 📦 Where Colors Live

- **Tailwind Config**: `tailwind.config.ts` - All color tokens
- **CSS Variables**: `styles/color-system.css` - Gradients, glass effects
- **This Guide**: Usage examples and component mapping

---

## 🚀 Quick Start

1. Use Tailwind classes: `bg-brand-red-500`, `text-text-primary`, etc.
2. For gradients: Use `bg-brand-gradient` class or `var(--brand-gradient)`
3. For glass surfaces: Use `glass-surface` class
4. Always check this guide when unsure about color usage

---

**Last Updated**: January 23, 2026  
**Version**: 1.0 - IEEE × inApp Production Grade
