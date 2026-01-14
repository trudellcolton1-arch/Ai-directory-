# TopAI.tools - AI Directory

A modern, production-ready AI tools directory built with Next.js 14, Supabase, and Stripe. Features a bold dark theme, SEO optimization, and monetization through featured listings.

![TopAI.tools](https://via.placeholder.com/1200x630/0a0a0a/22c55e?text=TopAI.tools)

## Features

- **🔍 Search & Discovery** - Full-text search, category browsing, filters
- **⭐ Featured Listings** - Monetize through paid promotional placements
- **📊 Analytics** - Click tracking, engagement metrics
- **🎨 Modern UI** - Dark theme, animations, responsive design
- **🚀 SEO Optimized** - Meta tags, sitemaps, structured data
- **💳 Stripe Integration** - One-time payments for featured listings
- **🔐 Supabase Backend** - Auth, database, real-time subscriptions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Payments:** Stripe
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/ai-directory.git
cd ai-directory
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration:

```bash
# Copy contents of supabase/migration.sql and run in Supabase SQL Editor
```

3. Get your credentials from Project Settings > API

### 3. Set Up Stripe

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Developers > API keys
3. Create webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
4. Select events: `checkout.session.completed`, `payment_intent.payment_failed`

### 4. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ai-directory/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── checkout/      # Stripe checkout
│   │   ├── clicks/        # Click tracking
│   │   ├── tools/         # Tool submissions
│   │   └── webhooks/      # Stripe webhooks
│   ├── category/[slug]/   # Category pages
│   ├── tool/[slug]/       # Tool detail pages
│   ├── search/            # Search results
│   ├── submit/            # Submit tool form
│   ├── pricing/           # Featured pricing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Reusable components
├── lib/
│   ├── data.ts            # Data fetching functions
│   ├── stripe.ts          # Stripe configuration
│   ├── supabase.ts        # Supabase clients
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
├── supabase/
│   └── migration.sql      # Database schema
└── public/                # Static assets
```

## Database Schema

### Tables

- **categories** - Tool categories (Writing, Image Gen, etc.)
- **tools** - AI tool listings
- **submissions** - User-submitted tools pending review
- **tool_clicks** - Click analytics
- **featured_purchases** - Payment records

### Key Fields (tools)

| Field | Type | Description |
|-------|------|-------------|
| `name` | text | Tool name |
| `slug` | text | URL-friendly identifier |
| `tagline` | text | Short description |
| `pricing_type` | enum | free/freemium/paid/enterprise |
| `is_featured` | boolean | Featured status |
| `click_count` | int | Total clicks |
| `status` | enum | pending/approved/rejected |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production

Set these in Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Customization

### Branding

1. Update `app/layout.tsx` - Site name, meta tags
2. Update `components/layout/Header.tsx` - Logo
3. Update `tailwind.config.ts` - Colors, fonts
4. Add logo to `public/` folder

### Pricing Tiers

Edit `lib/stripe.ts`:

```typescript
export const PRICING_TIERS = [
  {
    id: 'weekly',
    name: 'Weekly Boost',
    price: 29,
    duration: '7 days',
    // ...
  },
  // Add/modify tiers
];
```

### Categories

Edit the seed data in `supabase/migration.sql` or add via Supabase dashboard.

## Monetization Strategies

1. **Featured Listings** - $29-249 for premium placement
2. **Affiliate Links** - Add `affiliate_url` to tools
3. **Sponsored Categories** - Charge for category sponsorship
4. **Newsletter** - Collect emails, sell sponsorships
5. **API Access** - Charge for directory API

## SEO Checklist

- [x] Dynamic meta tags per page
- [x] Semantic HTML structure
- [x] Mobile responsive
- [x] Fast load times (SSR/ISR)
- [ ] Add `robots.txt` to `public/`
- [ ] Add `sitemap.xml` generation
- [ ] Submit to Google Search Console
- [ ] Add structured data (JSON-LD)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open a Pull Request

## License

MIT License - feel free to use for your own projects.

## Support

- 📧 Email: support@topai.tools
- 🐦 Twitter: [@topaitools](https://twitter.com/topaitools)

---

Built with ❤️ for the AI community
