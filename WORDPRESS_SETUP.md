# WordPress Setup Guide for Hubuddha Villas

This guide details how to set up WordPress as a headless CMS for the Hubuddha Villas Next.js website.

## Required Plugins

Install these plugins in WordPress:

### Essential

1. **WPGraphQL** (free)
   - Install from: https://wordpress.org/plugins/wp-graphql/
   - Provides GraphQL API for Next.js to fetch content

2. **WPGraphQL for ACF** (free)
   - Install from: https://github.com/wp-graphql/wpgraphql-acf
   - Exposes ACF custom fields in GraphQL

3. **Advanced Custom Fields PRO** ($49/year)
   - Purchase from: https://www.advancedcustomfields.com/
   - Required for custom content fields

4. **Rank Math SEO** (free or pro)
   - Install from: https://wordpress.org/plugins/seo-by-rank-math/
   - Provides SEO fields that are exposed to GraphQL

5. **Mammoth .docx Converter** (free)
   - Install from: https://wordpress.org/plugins/mammoth-docx-converter/
   - Converts Google Docs (.docx) to HTML with image handling

6. **ShortPixel Image Optimizer** (free tier available)
   - Install from: https://wordpress.org/plugins/shortpixel-image-optimiser/
   - Automatically optimizes uploaded images

### Optional but Recommended

7. **WP Webhooks** (for on-demand revalidation)
   - Triggers Next.js revalidation when content changes

## Custom Post Types

Create these Custom Post Types using ACF or code:

### 1. Villa (`villa`)
- Slug: `villas`
- Supports: title, editor, thumbnail, excerpt
- GraphQL enabled: true

### 2. Testimonial (`testimonial`)
- Slug: `testimonials`
- Supports: title, editor
- GraphQL enabled: true

### 3. Team Member (`team_member`)
- Slug: `team`
- Supports: title, thumbnail
- GraphQL enabled: true

### 4. Service (`service`)
- Slug: `services`
- Supports: title, editor
- GraphQL enabled: true

## ACF Field Groups

### Villa Details (attach to Post Type = villa)

```
Field Group: Villa Details
Fields:
  - tagline (text)
  - additional_description (textarea)
  - price_per_night (number)
  - specs (group):
      - size (text) - e.g., "280 m²"
      - beds (text) - e.g., "2 King Beds"
      - occupancy (text) - e.g., "Up to 4 Guests"
      - bathrooms (text) - e.g., "2 Bathrooms"
  - facilities (repeater):
      - icon_name (select: wifi, wind, waves, tv, chef-hat, coffee, car, shield, shirt, utensils, lock, sparkles)
      - name (text)
  - gallery (gallery)
  - hero_image (image)
  - features (repeater):
      - feature_text (text)
```

### Testimonial Details (attach to Post Type = testimonial)

```
Field Group: Testimonial Details
Fields:
  - guest_name (text)
  - guest_location (text)
  - rating (number, 1-5)
  - display_order (number)
```

### Team Member Details (attach to Post Type = team_member)

```
Field Group: Team Member Details
Fields:
  - role (text)
  - display_order (number)
```

### Service Details (attach to Post Type = service)

```
Field Group: Service Details
Fields:
  - icon_svg (textarea) - SVG code
  - display_order (number)
```

### Site Settings (ACF Options Page)

Create an Options Page called "Hubuddha Site Settings" with:

```
Field Group: Site Settings
Location: Options Page = Hubuddha Site Settings
Fields:
  - hero_section (group):
      - title (text)
      - subtitle (text)
      - background_image (image)
  - about_section (group):
      - intro_text (wysiwyg)
      - story_title (text)
      - story_content (wysiwyg)
      - story_image (image)
  - contact_info (group):
      - phone (text)
      - email (text)
      - address (textarea)
      - whatsapp_link (url)
      - google_maps_embed (textarea)
  - social_links (group):
      - facebook (url)
      - instagram (url)
  - footer (group):
      - description (textarea)
```

## Google Docs Import Workflow

For your wife/content editors:

1. Write article in **Google Docs** with images
2. **Export as .docx**: File > Download > Microsoft Word (.docx)
3. In WordPress Admin: **Posts > Add New**
4. Click **"Add Media"** then **"Upload Files"**
5. Upload the .docx file - Mammoth will convert it
6. Click **"Insert into editor"**
7. Review the imported content (formatting preserved)
8. Images are automatically uploaded to Media Library
9. ShortPixel will optimize images automatically
10. Set **Featured Image** (for the article card)
11. Add **Categories** and **Tags**
12. Configure **Rank Math SEO** (mostly auto-fills)
13. Click **Publish** or **Schedule**

## Rank Math Configuration

1. Go to **Rank Math > Titles & Meta**
2. Set default templates:
   - Posts: `%title% - Hubuddha Villas Blog`
   - Villas: `%title% - Private Villa in Ubud | Hubuddha`
   - Homepage: `Hubuddha Villas - Luxury Villas in Ubud, Bali`

3. Enable **Schema Markup**:
   - Posts: Article schema
   - Villas: LodgingBusiness schema

## WPGraphQL Setup

After installing WPGraphQL:

1. Go to **GraphQL > Settings**
2. Enable **GraphiQL IDE** for testing
3. Test at: `https://your-wp-domain.com/graphql`

Example query to test:
```graphql
query {
  posts(first: 5) {
    nodes {
      title
      slug
      date
    }
  }
}
```

## Environment Variables

In your Next.js project, create `.env.local`:

```bash
WORDPRESS_GRAPHQL_URL=https://wp.hubuddha.com/graphql
REVALIDATION_SECRET=your-random-secret-key
NEXT_PUBLIC_SITE_URL=https://hubuddha.com
NEXT_PUBLIC_SITE_NAME=Hubuddha Villas
```

## On-Demand Revalidation (Optional)

To trigger Next.js page rebuilds when WordPress content changes:

1. Install WP Webhooks plugin
2. Create webhook pointing to:
   `https://your-nextjs-domain.com/api/revalidate`
3. Set header: `x-webhook-secret: your-random-secret-key`
4. Configure to trigger on post create/update/delete

## Testing the Setup

1. Create a test blog post in WordPress
2. Run the Next.js dev server: `npm run dev`
3. Check that the GraphQL query returns the post
4. Verify the post appears on the articles page
