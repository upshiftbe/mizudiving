# Static Assets Guide

This directory contains all static assets for the Mizu Diving website.

## Required Assets

### Favicon & App Icons

Add these files to improve branding and mobile experience:

1. **favicon.ico** (32x32 or 16x16)
   - Place in `/public/favicon.ico`
   - Automatically detected by Next.js

2. **Apple Touch Icon** (180x180)
   - File: `apple-touch-icon.png`
   - For iOS home screen bookmarks

3. **Android Icons**
   - File: `icon-192.png` (192x192)
   - File: `icon-512.png` (512x512)
   - For Android home screen

### Open Graph Images

For better social media sharing:

1. **og-image.jpg** or **og-image.png** (1200x630)
   - Used when sharing on Facebook, Twitter, LinkedIn
   - Should include your logo and tagline
   - Add to `/public/og-image.jpg`

2. Update in `app/layout.tsx`:
   ```tsx
   openGraph: {
     images: ['/og-image.jpg'],
   }
   ```

### Logo Files

Recommended logo formats:

1. **logo.svg** - Vector logo (preferred for scaling)
2. **logo.png** - PNG version with transparent background
3. **logo-white.svg** - White version for dark backgrounds

Usage in components:
```tsx
import Image from 'next/image'

<Image 
  src="/logo.png" 
  alt="Mizu Diving Logo" 
  width={200} 
  height={60}
/>
```

## Optional Assets

### Background Images

For gallery or hero sections:
- `hero-bg.jpg` - Hero section background
- `about-bg.jpg` - About section background

### Gallery Images

Create a `gallery/` subdirectory:
```
public/
  gallery/
    dive-1.jpg
    dive-2.jpg
    dive-3.jpg
    ...
```

### Certificates & Badges

For displaying certifications:
```
public/
  certificates/
    padi-certified.png
    diving-license.pdf
```

## Image Optimization Tips

### Recommended Formats

1. **JPEG** - Photos and complex images
2. **PNG** - Logos, icons, images with transparency
3. **WebP** - Modern format (smaller file size)
4. **SVG** - Vector graphics, logos, icons

### Image Sizes

Optimize images before uploading:

- **Hero images:** Max 1920px width, ~200-400KB
- **Thumbnails:** 400px width, ~50-100KB
- **Full images:** 1200px width, ~150-300KB
- **Icons:** 192px, 512px (PNG), or SVG

### Tools for Optimization

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPEG
- [Squoosh](https://squoosh.app/) - Online image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimizer

## Using Images in Next.js

### With next/image (Recommended)

```tsx
import Image from 'next/image'

<Image
  src="/gallery/dive-1.jpg"
  alt="Diving in crystal clear waters"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

### Background Images

```tsx
<div 
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  className="bg-cover bg-center"
>
  Content
</div>
```

## Accessibility

Always include descriptive alt text:

✅ Good: `alt="Diver exploring coral reef at 30 meters depth"`
❌ Bad: `alt="Image 1"` or `alt=""`

## Current Structure

```
public/
├── .gitkeep          # Keeps directory in Git
├── robots.txt        # SEO crawler instructions
└── ASSETS.md         # This file

TO ADD:
├── favicon.ico
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
├── og-image.jpg
├── logo.svg
├── logo.png
└── gallery/
    ├── dive-1.jpg
    ├── dive-2.jpg
    └── ...
```

## Next Steps

1. ✅ Add favicon.ico
2. ✅ Create logo files
3. ✅ Add Open Graph image
4. ✅ Optimize all images
5. ✅ Add app icons for mobile
6. ✅ Add gallery images
7. ✅ Test on different devices

---

**Need help?** Check the [Next.js Image Optimization docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
