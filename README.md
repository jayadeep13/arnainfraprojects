# ARNA INFRA PROJECTS — Official Website

Premium construction & architectural design company website built with Next.js 15.

## 🏗️ Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom Navy/Sky/Orange brand palette)
- **Lucide React** (icons)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (Navbar + Footer + WhatsApp)
│   ├── page.tsx            ← HOME PAGE
│   ├── globals.css         ← Brand variables, base styles
│   ├── not-found.tsx       ← 404 page
│   ├── about/
│   │   └── page.tsx        ← ABOUT PAGE
│   ├── services/
│   │   └── page.tsx        ← SERVICES PAGE (all 23 services)
│   ├── projects/
│   │   └── page.tsx        ← PROJECTS PAGE (with filter gallery)
│   ├── process/
│   │   └── page.tsx        ← PROCESS PAGE (5-step + FAQ)
│   └── contact/
│       └── page.tsx        ← CONTACT PAGE (form + map)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      ← Sticky nav (6 tabs, mobile menu)
│   │   └── Footer.tsx      ← Full footer with CTA strip
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AreasSection.tsx
│   │   ├── HomeCtaBanner.tsx
│   │   ├── ProjectsGallery.tsx  ← Client-side filter
│   │   └── ContactForm.tsx      ← Client form with validation
│   └── ui/
│       ├── ArnaLogo.tsx    ← SVG logo matching your brand
│       ├── Button.tsx
│       ├── SectionTag.tsx
│       └── FloatingWhatsApp.tsx
└── lib/
    └── useReveal.ts        ← Scroll reveal hook
```

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## 🎨 Brand Colors

| Color        | Hex       | Use                       |
|--------------|-----------|---------------------------|
| Navy 950     | #070e2e   | Main background           |
| Navy 800     | #1a2f7a   | Card backgrounds          |
| Sky Blue     | #29aae1   | Primary accent (from logo)|
| Orange       | #e8941a   | Secondary accent (logo)   |
| White        | #ffffff   | Text                      |

## 📱 Pages

| Route        | Page          |
|--------------|---------------|
| `/`          | Home          |
| `/about`     | About Us      |
| `/services`  | Services      |
| `/projects`  | Projects      |
| `/process`   | Our Process   |
| `/contact`   | Contact       |

## 🌐 Deployment

Deploy to **Vercel** (recommended):
1. Push to GitHub
2. Import repo at vercel.com
3. Deploy (zero config needed)

## 📞 Contact Info Embedded

- **Owner:** K. Vidya Sagar
- **Phone 1:** 8897072777
- **Phone 2:** 9491869866
- **Address:** Opp. IDFC First Bank, Gudivada Road, Hanuman Junction – 521105, AP
- **WhatsApp:** Linked throughout site
