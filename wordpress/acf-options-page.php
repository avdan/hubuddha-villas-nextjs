<?php
/**
 * ACF Options Page Registration
 *
 * Add this code to your theme's functions.php file
 * OR create a simple plugin by placing this in:
 * wp-content/plugins/hubuddha-options/hubuddha-options.php
 */

// If creating as a plugin, uncomment the following lines:
/*
Plugin Name: Hubuddha Site Settings
Description: Registers ACF Options Page for site-wide settings
Version: 1.0
Author: Hubuddha
*/

/**
 * Register ACF Options Page
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'      => 'Site Settings',
        'menu_title'      => 'Site Settings',
        'menu_slug'       => 'site-settings',
        'capability'      => 'edit_posts',
        'redirect'        => false,
        'icon_url'        => 'dashicons-admin-site-alt3',
        'position'        => 30,
        'show_in_graphql' => true,
        'graphql_field_name' => 'siteSettings',
    ));
}

/**
 * Expose ACF Options to GraphQL
 * This ensures the Site Settings are available via WPGraphQL
 */
add_action('graphql_register_types', function() {
    register_graphql_field('RootQuery', 'siteSettings', [
        'type' => 'SiteSettings',
        'description' => 'Site-wide settings from ACF Options',
        'resolve' => function() {
            return [
                'heroTitle'       => get_field('heroTitle', 'option'),
                'heroSubtitle'    => get_field('heroSubtitle', 'option'),
                'heroImage'       => get_field('heroImage', 'option'),
                'aboutWelcome'    => get_field('aboutWelcome', 'option'),
                'aboutIntro'      => get_field('aboutIntro', 'option'),
                'aboutStory'      => get_field('aboutStory', 'option'),
                'contactPhone'    => get_field('contactPhone', 'option'),
                'contactEmail'    => get_field('contactEmail', 'option'),
                'contactAddress'  => get_field('contactAddress', 'option'),
                'whatsappNumber'  => get_field('whatsappNumber', 'option'),
                'retreatsIntro'   => get_field('retreatsIntro', 'option'),
            ];
        }
    ]);

    register_graphql_object_type('SiteSettings', [
        'description' => 'Site Settings from ACF Options Page',
        'fields' => [
            'heroTitle' => [
                'type' => 'String',
                'description' => 'Hero section title',
            ],
            'heroSubtitle' => [
                'type' => 'String',
                'description' => 'Hero section subtitle',
            ],
            'heroImage' => [
                'type' => 'MediaItem',
                'description' => 'Hero background image',
                'resolve' => function($source) {
                    if (!empty($source['heroImage']) && is_array($source['heroImage'])) {
                        return \WPGraphQL\Data\DataSource::resolve_post_object(
                            $source['heroImage']['ID'],
                            \WPGraphQL::get_app_context()
                        );
                    }
                    return null;
                }
            ],
            'aboutWelcome' => [
                'type' => 'String',
                'description' => 'About section welcome text',
            ],
            'aboutIntro' => [
                'type' => 'String',
                'description' => 'About section intro paragraph',
            ],
            'aboutStory' => [
                'type' => 'String',
                'description' => 'About section story content',
            ],
            'contactPhone' => [
                'type' => 'String',
                'description' => 'Contact phone number',
            ],
            'contactEmail' => [
                'type' => 'String',
                'description' => 'Contact email address',
            ],
            'contactAddress' => [
                'type' => 'String',
                'description' => 'Physical address',
            ],
            'whatsappNumber' => [
                'type' => 'String',
                'description' => 'WhatsApp number (digits only)',
            ],
            'retreatsIntro' => [
                'type' => 'String',
                'description' => 'Retreats page intro text',
            ],
        ],
    ]);
});
