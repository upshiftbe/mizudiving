# Mizu Diving - Professional Diving Website

A modern, responsive website for professional diving services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI with ocean-themed design
- 📱 Fully responsive and mobile-first
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- ♿ Accessible components
- 🚀 Production-ready setup

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
mizudiving/
├── app/
│   ├── layout.tsx      # Root layout with Header and Footer
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Gallery.tsx     # Gallery section
│   └── Contact.tsx     # Contact form
└── public/             # Static assets
```

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Footer.tsx` - Footer contact info
- `components/Contact.tsx` - Contact section

### Add Gallery Images

Replace the placeholder gallery items in `components/Gallery.tsx` with actual images using Next.js `Image` component.

### Customize Colors

Modify the color scheme in `tailwind.config.ts` under the `ocean` color palette.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## License

Private project - All rights reserved