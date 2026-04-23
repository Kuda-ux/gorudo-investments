# Gorudo Investments — Website

A world-class, modern business website for **Gorudo Investments**, a Zimbabwean agribusiness and diversified supply company operating from **Harare** and **Marondera**.

Divisions: **Shashi Maputi**, **Shashi Ice**, **Gorudo Poultry & Piggery**.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3** (custom `brand` green palette)
- **lucide-react** for iconography
- **next/font** (Inter + Fraunces) for premium typography

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & run (production)

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js          # Root layout, SEO metadata, fonts
  page.js            # Homepage (composes all sections)
  globals.css        # Tailwind + design tokens
  api/contact/       # Contact form submission endpoint
  sitemap.js         # SEO sitemap
  robots.js          # SEO robots

components/
  Navbar.jsx         # Sticky, responsive, mobile drawer
  Hero.jsx           # Premium hero with floating cards
  About.jsx          # Company story, vision/mission/values
  Divisions.jsx      # Shashi Maputi / Shashi Ice / Poultry & Piggery
  Products.jsx       # Products & services grid
  Procurement.jsx    # Government/institutional procurement capability
  WhyChooseUs.jsx    # Trust & differentiators
  CTASection.jsx     # Mid-page call to action
  Contact.jsx        # Contact form with validation & states
  Footer.jsx         # Premium footer with sitemap + contact
  Reveal.jsx         # Scroll reveal animations

public/
  logo.jpeg          # Company logo (used site-wide and for favicon/OG)
  images/            # Optimised image assets
```

## Design system

- **Primary brand green**: `#1f6236` (tailwind `brand.700`)
- **Deep accent**: `#174027` (`brand.900`) / `#0a2414` (`brand.950`)
- **Background cream**: `#fbfaf6`
- **Display font**: Fraunces (editorial, premium)
- **UI font**: Inter (modern, legible)

## Contact form backend

The form posts to `POST /api/contact`. Currently it validates input and logs the submission to server logs. To go live with email delivery, integrate a provider in `app/api/contact/route.js`:

- Resend, SendGrid or Postmark for email
- Or persist to a database / CRM of your choice

## Deployment

Deploy on Vercel, Netlify or any Node-capable host.

Domain: **gorudoinvestments.co.zw**

## SEO

- Title + description + Open Graph + Twitter tags in `app/layout.js`
- `sitemap.xml` and `robots.txt` auto-generated
- Semantic landmarks, alt text, and heading hierarchy throughout

---

© Gorudo Investments. All rights reserved.
