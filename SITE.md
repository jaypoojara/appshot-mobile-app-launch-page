# AppShot — Mobile App Launch Page

> A conversion-optimized landing page template for mobile app launches.

## Brand Identity

- **Personality**: Modern, warm, professional, premium
- **Primary Color**: Amber (#D97706) — warm and energetic
- **Secondary Color**: Purple (#9333EA) — distinctive and premium
- **Text Color**: Deep stone-brown (#292524) — warm, NOT pure black
- **Background**: Warm cream (#FDFCFB) — NOT pure white
- **Muted Text**: Warm gray (#8C857E)
- **Surface/Cards**: Light stone (#F5F0EB)
- **Restricted Colors**: No red, green, blue, or black used anywhere
- **Fonts**: Space Grotesk (headings) + DM Sans (body text)

## Pages

- **Homepage** (`/`) — The full landing page with all sections listed below

## Sections (in order)

1. **Navbar** — Sticky navigation bar with logo, links (Features, How It Works, Reviews, Download), and "Get the App" CTA button. Mobile hamburger menu included.

2. **Hero Section** — Large headline "Your App, Perfectly Launched" with gradient text, subtitle, App Store + Google Play download buttons, social proof (avatar stack + star rating), and two floating device mockups (iPhone + Android) with animated badges showing download stats and rating.

3. **Stats Counter** — Dark card with 4 animated counting stats: 500K+ Downloads, 4.9 App Store Rating, 180+ Countries, 99.9% Uptime. Numbers animate when scrolled into view.

4. **Feature Showcase** — Interactive 4-feature section with clickable tabs. Each feature shows a different phone screen in a device mockup. Features: Smart Notifications, Real-Time Analytics, Bank-Level Security, Works Offline.

5. **How It Works** — 3-step walkthrough: Download the App, Create Your Account, Start Using It. Each step has a phone mockup with animated screen content. Steps alternate left/right layout.

6. **Video Demo** — Large video player section with play button overlay. Placeholder for video embed (YouTube, Vimeo, or MP4). Includes decorative phone mockup previews in the background.

7. **Reviews** — Masonry grid of 6 user reviews with 5-star ratings, review text, author info, and app store source badges (App Store / Google Play).

8. **QR Download** — Dark CTA section with download buttons (App Store + Google Play) and a large scannable QR code placeholder. Final conversion push.

9. **Footer** — 4 link columns (Product, Company, Resources, Legal), social links (Twitter, GitHub, LinkedIn), and copyright.

## Components

- **`components/Navbar.tsx`** — Sticky nav, scrolled state with blur, mobile menu
- **`components/HeroSection.tsx`** — Hero with device mockups and CTA
- **`components/DeviceMockup.tsx`** — Reusable iPhone/Android device frames with placeholder screens
- **`components/StatsCounter.tsx`** — Animated counting stats bar
- **`components/FeatureShowcase.tsx`** — Interactive feature tabs with phone screen transitions
- **`components/HowItWorks.tsx`** — 3-step walkthrough with alternating layout
- **`components/VideoDemo.tsx`** — Video player section with play overlay
- **`components/Reviews.tsx`** — Review cards with star ratings in masonry grid
- **`components/QRDownload.tsx`** — Final CTA with QR code and download buttons
- **`components/Footer.tsx`** — Site footer with links and socials

## Animations (powered by Framer Motion)

- Scroll-triggered fade-in animations on all sections
- Floating device mockups with CSS keyframe animations
- Animated stat counter numbers on scroll into view
- Feature screen transitions (cross-fade) when switching tabs
- Interactive play button with glow effect
- Spring-based micro-interactions on badges and cards
- Progress bar animations in How It Works screens
- Staggered reveal on review cards

## How to Customize

- **To change app name**: Edit the logo text in `Navbar.tsx` and `Footer.tsx`
- **To change colors**: Update CSS variables in `app/globals.css` (the `:root` section)
- **To update stats**: Edit the `stats` array in `components/StatsCounter.tsx`
- **To change features**: Edit the `features` array in `components/FeatureShowcase.tsx`
- **To update reviews**: Edit the `reviews` array in `components/Reviews.tsx`
- **To add your video**: Replace the placeholder in `components/VideoDemo.tsx` with your embed code
- **To update QR code**: Replace the QR pattern in `components/QRDownload.tsx` with your actual QR code
- **To change app store links**: Update the `href="#"` in hero section and QR download buttons
- **To add real screenshots**: Replace the placeholder screen components in `DeviceMockup.tsx` with actual images

## Recent Changes

- 2026-02-17: Created complete AppShot template with all 9 sections
- 2026-02-17: Set up amber + purple color palette (no red/green/blue/black)
- 2026-02-17: Added Framer Motion animations throughout
- 2026-02-17: Built responsive device mockups (iPhone + Android)
- 2026-02-17: Created interactive feature showcase with screen transitions
