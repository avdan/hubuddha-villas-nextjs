<?php
/**
 * Plugin Name: Hubuddha Site Settings
 * Plugin URI: https://hubuddha.com
 * Description: Registers ACF Options Page for site-wide settings and exposes them to WPGraphQL
 * Version: 1.0.0
 * Author: Hubuddha
 * Author URI: https://hubuddha.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: hubuddha-site-settings
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register ACF Options Page
 */
function hubuddha_register_options_page() {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page(array(
            'page_title'         => 'Site Settings',
            'menu_title'         => 'Site Settings',
            'menu_slug'          => 'site-settings',
            'capability'         => 'edit_posts',
            'redirect'           => false,
            'icon_url'           => 'dashicons-admin-site-alt3',
            'position'           => 30,
            'show_in_graphql'    => true,
            'graphql_field_name' => 'siteSettings',
        ));
    }
}
add_action('acf/init', 'hubuddha_register_options_page');

/**
 * Register Site Settings GraphQL Type and Field
 */
function hubuddha_register_graphql_site_settings() {
    // Register the SiteSettings type
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
                'type' => 'SiteSettingsImage',
                'description' => 'Hero background image',
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

    // Register image type for site settings
    register_graphql_object_type('SiteSettingsImage', [
        'description' => 'Image from Site Settings',
        'fields' => [
            'sourceUrl' => [
                'type' => 'String',
                'description' => 'URL of the image',
            ],
            'altText' => [
                'type' => 'String',
                'description' => 'Alt text for the image',
            ],
        ],
    ]);

    // Register the siteSettings field on RootQuery
    register_graphql_field('RootQuery', 'siteSettings', [
        'type' => 'SiteSettings',
        'description' => 'Site-wide settings from ACF Options',
        'resolve' => function() {
            $hero_image = get_field('heroImage', 'option');
            $hero_image_data = null;

            if (!empty($hero_image)) {
                if (is_array($hero_image)) {
                    $hero_image_data = [
                        'sourceUrl' => $hero_image['url'] ?? '',
                        'altText'   => $hero_image['alt'] ?? '',
                    ];
                } elseif (is_numeric($hero_image)) {
                    $hero_image_data = [
                        'sourceUrl' => wp_get_attachment_url($hero_image),
                        'altText'   => get_post_meta($hero_image, '_wp_attachment_image_alt', true),
                    ];
                }
            }

            return [
                'heroTitle'      => get_field('heroTitle', 'option') ?: '',
                'heroSubtitle'   => get_field('heroSubtitle', 'option') ?: '',
                'heroImage'      => $hero_image_data,
                'aboutWelcome'   => get_field('aboutWelcome', 'option') ?: '',
                'aboutIntro'     => get_field('aboutIntro', 'option') ?: '',
                'aboutStory'     => get_field('aboutStory', 'option') ?: '',
                'contactPhone'   => get_field('contactPhone', 'option') ?: '',
                'contactEmail'   => get_field('contactEmail', 'option') ?: '',
                'contactAddress' => get_field('contactAddress', 'option') ?: '',
                'whatsappNumber' => get_field('whatsappNumber', 'option') ?: '',
                'retreatsIntro'  => get_field('retreatsIntro', 'option') ?: '',
            ];
        }
    ]);
}
add_action('graphql_register_types', 'hubuddha_register_graphql_site_settings');
