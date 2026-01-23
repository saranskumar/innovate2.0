# Interactive Components

This directory contains three advanced interactive UI components for your React/Next.js application.

## Components

### 1. GradualBlur
A gradual blur effect component for images and boxes. Perfect for creating smooth fade-out effects at edges.

**Features:**
- Customizable position (top, bottom, left, right)
- Adjustable strength and curve functions
- Multiple presets (subtle, intense, smooth, sharp, etc.)
- Responsive design support
- Animation support

**Basic Usage:**
```tsx
import GradualBlur from '@/components/GradualBlur';

<section style={{position: 'relative', height: 500, overflow: 'hidden'}}>
  <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 2rem' }}>
    <img src="/image.jpg" alt="Content" />
  </div>
  <GradualBlur
    target="parent"
    position="bottom"
    height="7rem"
    strength={2}
    divCount={5}
    curve="bezier"
    exponential
    opacity={1}
  />
</section>
```

### 2. ClickSpark
Interactive click spark animations using HTML5 Canvas.

**Features:**
- Customizable spark color, size, and count
- Adjustable animation duration and easing
- Responsive to parent container

**Basic Usage:**
```tsx
import ClickSpark from '@/components/ClickSpark';

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  <div>Click anywhere to see sparks!</div>
</ClickSpark>
```

### 3. GlassSurface
Advanced glass morphism effects with SVG filters and fallback support.

**Features:**
- SVG filter-based distortion effects
- Automatic fallback for unsupported browsers
- Dark mode support
- Highly customizable (blur, opacity, saturation, etc.)

**Basic Usage:**
```tsx
import GlassSurface from '@/components/GlassSurface';

<GlassSurface 
  width={300} 
  height={200}
  borderRadius={50}
>
  <h2>Glass Surface Content</h2>
</GlassSurface>

// Advanced usage with custom effects
<GlassSurface
  displace={0.5}
  distortionScale={-180}
  redOffset={0}
  greenOffset={10}
  blueOffset={20}
  brightness={50}
  opacity={0.93}
  mixBlendMode="screen"
>
  <span>Advanced Glass Distortion</span>
</GlassSurface>
```

## Installation

The components require the following dependencies:

```bash
pnpm add mathjs
```

This has already been added to your `package.json`. Run:

```bash
pnpm install
```

## Browser Support

- **GradualBlur**: All modern browsers
- **ClickSpark**: All browsers with Canvas support
- **GlassSurface**: 
  - Full features: Chrome, Edge (Chromium-based)
  - Fallback mode: Safari, Firefox, and other browsers

## Examples

See `InteractiveExamples.tsx` for complete usage examples, including how to combine multiple components together.

## Notes

- All components are fully typed with TypeScript
- Fully responsive and production-ready
- Optimized for performance with memoization and proper cleanup
