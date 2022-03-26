<?php

/**
 * Enqueue scripts & styles.
 */

if ( ! function_exists( 'add_child_theme_scripts' ) ) :

function add_child_theme_scripts() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array(  ), '1.1' );

    wp_enqueue_style( 'asset-style', get_stylesheet_directory_uri() . '/assets/style.css', array(), '1.1', 'all');
    wp_enqueue_script( 'font-awesome-kit', 'https://kit.fontawesome.com/3781f4751f.js', [], null );
    wp_enqueue_script( 'script', get_stylesheet_directory_uri() . '/assets/script.js', array ( 'jquery' ), 1.1, true);



    
}
endif;

add_action( 'wp_enqueue_scripts', 'add_child_theme_scripts' );















