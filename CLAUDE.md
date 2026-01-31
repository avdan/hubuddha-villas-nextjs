# Hubuddha Villas - Next.js Frontend

## Project Overview
Headless WordPress + Next.js website for Hubuddha Villas luxury rental in Ubud, Bali.

## Commands
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

### Stack
- **Frontend:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4 with oklch colors
- **Animations:** Framer Motion (use motion components from `@/components/motion`)
- **CMS:** Headless WordPress with WPGraphQL

### WordPress Backend
- **Location:** `/Users/danavramescu/Sites/localhost/hubuddha-wp`
- **Admin URL:** http://localhost:8888/hubuddha-wp/wp-admin
- **GraphQL Endpoint:** http://localhost:8888/hubuddha-wp/index.php?graphql

### Required WordPress Plugins
- WPGraphQL
- Advanced Custom Fields (ACF)
- WPGraphQL for ACF
- Custom Post Type UI

## Data Fetching

### GraphQL Client
Located at `src/lib/graphql.ts` - use `fetchGraphQL<T>()` for all queries.

### Queries
Located at `src/lib/queries.ts`:

**Villas:**
- `getAllVillas()` - Fetch all villas
- `getVillaBySlug(slug)` - Fetch single villa
- `getAllVillaSlugs()` - For static generation

**Posts/Articles:**
- `getAllPosts(first?)` - Fetch all posts
- `getLatestPosts(count?)` - Fetch latest N posts
- `getPostBySlug(slug)` - Fetch single post
- `getAllPostSlugs()` - For static generation

### Types
Located at `src/lib/types.ts` - TypeScript interfaces for WordPress data.

## Custom Post Types in WordPress

### Villa (CPT: `villa`)
ACF Field Group: "Villa Details" (`villaDetails` in GraphQL)

| Field | GraphQL Name | Type |
|-------|--------------|------|
| Tagline | `tagline` | String |
| Short Description | `shortDescription` | String |
| Price Per Night | `pricePerNight` | Number |
| Bedrooms | `bedrooms` | Number |
| Bathrooms | `bathrooms` | Number |
| Max Guests | `maxGuests` | Number |
| Pool Type | `poolType` | String |
| Villa Size | `villaSize` | String |
| Amenities | `amenities` | String[] (checkbox) |
| Gallery | `gallery.nodes[]` | Media connection |
| Highlight Features | `highlightFeatures` | Repeater |

## Brand Design System

### Colors (defined in `src/app/globals.css`)
- `jungle` - Primary dark green
- `moss-green` - Secondary green
- `sage-green` - Accent green
- `seashell` - Light cream/white
- `bali-sand` - Warm neutral
- `bamboo-pole` - Brown accent

### Typography
- Font: Cormorant Garamond
- Use `heading-display` class for headings

### Animations
Import from `@/components/motion`:
```tsx
import { MotionDiv, fadeUp, fadeLeft, fadeRight, viewportOnce, defaultTransition } from "@/components/motion";

<MotionDiv {...fadeUp} viewport={viewportOnce} transition={defaultTransition}>
  Content
</MotionDiv>
```

For staggered animations, inline the delay:
```tsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```

## File Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (uses components from /home)
│   ├── about/page.tsx     # About page
│   ├── articles/page.tsx  # Articles listing (fetches from WP)
│   ├── [slug]/page.tsx    # Article detail (fetches from WP)
│   ├── villas/
│   │   ├── page.tsx       # Villas listing (fetches from WP)
│   │   └── [slug]/
│   │       ├── page.tsx   # Server component (data fetching)
│   │       └── VillaDetailClient.tsx  # Client component (interactivity)
│   ├── retreats/page.tsx
│   ├── location/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── home/              # Home page sections (Hero, About, Services, etc.)
│   │   ├── index.ts       # Exports all home components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Villas.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Blog.tsx
│   ├── layout/            # Navbar, Footer
│   ├── motion.tsx         # Framer Motion wrappers ("use client")
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── graphql.ts         # GraphQL fetch client
│   ├── queries.ts         # WordPress GraphQL queries
│   ├── types.ts           # TypeScript types for WP data
│   └── utils.ts           # Utilities (cn helper)
public/
└── images/                # Static images (villa photos, hero images)
```

## Pages Status

| Page | WordPress Integration | Status |
|------|----------------------|--------|
| Home | Static (uses placeholder data) | Complete - 1:1 copy from original |
| Villas | ✅ Fetches from WordPress | Complete |
| Villa Detail | ✅ Fetches from WordPress | Complete |
| Articles | ✅ Fetches from WordPress | Complete |
| Article Detail | ✅ Fetches from WordPress | Complete (at root `/[slug]`) |
| About | Static | Ready |
| Retreats | Static | Ready |
| Location | Static | Ready |
| Contact | Static | Ready |

## Next Steps
1. Add more villas in WordPress
2. Add blog posts in WordPress
3. Connect Home page Blog section to WordPress posts
4. Add images to WordPress Media Library
5. Production deployment setup

## Environment Variables
```env
WORDPRESS_GRAPHQL_URL=http://localhost:8888/hubuddha-wp/index.php?graphql
NEXT_PUBLIC_WORDPRESS_URL=http://localhost:8888/hubuddha-wp
```

## Important Notes
- Always use `index.php?graphql` endpoint (pretty permalinks may not work locally)
- ACF Gallery fields return `gallery.nodes[]` not `gallery[]`
- Images need `remotePatterns` in `next.config.ts`
- Client components need "use client" directive for framer-motion
- Don't use `staggerDelay()` function in server components - inline the values instead
- Article URLs are at root level (e.g., `/article-slug` not `/articles/article-slug`)

## CPT UI Settings (for all Custom Post Types)
When creating custom post types in CPT UI, always set:
- **Show in REST API:** `True`
- **REST API base slug:** `{post-type-slug}` (e.g., `villa`, `article`)
- **Show in GraphQL:** `True`
- **GraphQL Single Name:** `{singular}` (e.g., `villa`)
- **GraphQL Plural Name:** `{plural}` (e.g., `villas`)
