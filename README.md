# Denisa Rohunová - Portfolio Website

A modern, bilingual (Czech/English) portfolio website for Denisa Rohunová, AI Consultant, built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🌍 **Bilingual Support**: Full Czech and English translations
- 🎨 **Modern Design**: Beautiful, responsive UI with smooth animations
- 📱 **Mobile-First**: Fully responsive design
- 🚀 **Performance**: Optimized with Next.js 14 App Router
- 🐳 **Docker Ready**: Includes Dockerfile for easy deployment
- ✨ **Animations**: Smooth Framer Motion animations throughout

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **next-intl** (internationalization)
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/               # API routes
│   └── globals.css
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClientLogos.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Success.tsx
│   ├── Media.tsx
│   └── Contact.tsx
├── data/                  # Data files
│   └── testimonials.ts
├── messages/              # Translation files
│   ├── cs.json
│   └── en.json
├── public/                # Static assets
│   ├── photos/
│   └── client-logos/
└── Dockerfile
```

## Docker Deployment

### Build the Docker image:
```bash
docker build -t denisa-portfolio .
```

### Run the container:
```bash
docker run -p 3000:3000 denisa-portfolio
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to wedos.cz

1. Build the Docker image
2. Push to your container registry
3. Deploy using wedos.cz's Docker hosting service

## Content Management

- **Text Content**: Edit `messages/cs.json` and `messages/en.json` for translations
- **Testimonials**: Edit `data/testimonials.ts`
- **Images**: Add photos to `public/photos/` and logos to `public/client-logos/`

## Color Scheme

- Primary: `#6100D1` (Light Purple)
- Secondary: `#4D007A` (Dark Purple)
- Background: White (for logo section), gradients elsewhere

## Key Sections

1. **Navbar**: Logo, navigation, language toggle, CTA button
2. **Hero**: Main headline, photo, trust badge
3. **Client Logos**: White background section with client logos
4. **Services**: Main services with highlighted subsidy card
5. **About**: Personal story and background
6. **Testimonials**: Client reviews and video testimonials
7. **Success**: Trust bar with achievements
8. **Media**: Podcast and TV appearances
9. **Contact**: Contact form, info, and Cal.com booking widget

## Notes

- The contact form API route (`app/api/contact/route.ts`) currently logs submissions. You'll need to integrate an email service (like Resend, SendGrid, etc.) for production.
- All images should be placed in the `public/` directory
- The website defaults to Czech (cs) but can be switched to English (en)

## License

Private project for Denisa Rohunová.
