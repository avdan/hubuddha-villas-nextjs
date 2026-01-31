# WordPress Import Files

This folder contains JSON import files and PHP code for setting up the WordPress CMS.

## Quick Setup Steps

### 1. Import Custom Post Types

1. Go to **CPT UI → Tools** in WordPress admin
2. Click the **Import** tab
3. Paste the contents of `cpt-ui-import.json`
4. Click **Import**

This creates: Service, Testimonial, Team Member, FAQ post types.

### 2. Import ACF Field Groups

1. Go to **ACF → Tools** in WordPress admin
2. Under **Import Field Groups**, click **Choose File**
3. Select `acf-field-groups.json`
4. Click **Import**

This creates field groups for all post types + Site Settings.

### 3. Add Options Page PHP Code

Copy the contents of `acf-options-page.php` and add it to your theme's `functions.php` file.

**OR** create a simple plugin:
1. Create folder: `wp-content/plugins/hubuddha-options/`
2. Copy `acf-options-page.php` into that folder as `hubuddha-options.php`
3. Uncomment the plugin header at the top of the file
4. Activate the plugin in WordPress

### 4. Verify GraphQL

Test the GraphQL endpoint at: `http://localhost:8888/hubuddha-wp/index.php?graphql`

Test query:
```graphql
{
  services { nodes { id title serviceDetails { icon description } } }
  siteSettings { heroTitle heroSubtitle contactPhone }
}
```

## Files

| File | Purpose | Import Location |
|------|---------|-----------------|
| `cpt-ui-import.json` | Custom Post Types | CPT UI → Tools → Import |
| `acf-field-groups.json` | ACF Field Groups | ACF → Tools → Import |
| `acf-options-page.php` | Options Page code | functions.php or plugin |

## Content to Add After Import

### Services (8 items)
| Title | Icon | Description |
|-------|------|-------------|
| VERY Comfy Mattresses | bed | Premium super-king mattresses... |
| Breakfast included | breakfast | Fully equipped modern kitchens... |
| Working area | desk | Spacious office with AC... |
| High-Speed Wi-Fi | wifi | Fiber-optic internet... |
| Private pool | pool | Each villa features its own... |
| Blackout curtains | curtains | Complete darkness for perfect sleep... |
| Daily Housekeeping | housekeeping | Daily cleaning service... |
| Group & Retreat Friendly | group | Merge 3 villas into one... |

### Testimonials
- **Title**: Guest name (e.g., "Vicky")
- **Content**: The review text
- **Guest Location**: e.g., "Australia"
- **Rating**: 5

### Team Members
- **Title**: Name
- **Featured Image**: Photo
- **Role**: e.g., "Villa Manager"

### FAQs (for Retreats page)
- **Title**: The question
- **Answer**: The answer
- **Page**: Select "Retreats"

### Site Settings
Fill in the fields under **Site Settings** in the admin menu.
