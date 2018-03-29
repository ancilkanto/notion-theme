<?php
require_once get_template_directory().'/cs-framework-override/default-options.php';
// require_once get_template_directory().'/inc/color-scheme.php';

function notion_get_option($opt_id){
  if ( function_exists( 'cs_framework_init' ) ) {
    return cs_get_option($opt_id);
  }else{
    return notion_get_default_option_value($opt_id);
  }
}


if (!is_admin()){
  add_action( 'wp_enqueue_scripts', 'notion_scripts' );
  add_action( 'wp_enqueue_scripts', 'notion_styles' );
}else{
  add_action( 'admin_enqueue_scripts', 'notion_admin_scripts', '1000' );
  add_action( 'admin_enqueue_scripts', 'notion_admin_styles', '1000' );
}

function notion_admin_scripts(){

  wp_enqueue_script("dropdown-scripts", get_template_directory_uri(). "/admin/js/dropdown.js", array(), false, true);
  wp_enqueue_script("jquery-ui-script", get_template_directory_uri(). "/admin/js/jquery-ui.js", array(), false, true);
  wp_enqueue_script("cs-addon-scripts", get_template_directory_uri(). "/admin/js/cs-addons.js", array(), false, true);
  wp_enqueue_script("ace-scripts", "https://ace.c9.io/build/src-min-noconflict/ace.js", array(), false, true);
  wp_enqueue_script("ace-init", get_template_directory_uri(). "/admin/js/ace-init.js", array(), false, true);
}

function notion_admin_styles()
{ wp_enqueue_style("dropdown-styles", get_template_directory_uri(). "/admin/css/dropdown.css");
  wp_enqueue_style("cs-addon-styles", get_template_directory_uri(). "/admin/css/cs-addons.css");
  wp_enqueue_style("admin-styles", get_template_directory_uri(). "/admin/css/admin-styles.css");
  wp_enqueue_style("ion-icons", get_template_directory_uri(). "/admin/icon-font/ion-icons/ion-icons.css");
}

function notion_scripts()
{
    wp_enqueue_script("lib-js", get_template_directory_uri()."/javascripts/library-imports.js", array('jquery'), false, true);
    wp_enqueue_script("preloader-js", get_template_directory_uri()."/javascripts/preloader.js", array(), false, true);
    // wp_enqueue_script( 'ajax-pagination',  get_template_directory_uri() . '/javascripts/ajax-pagination.js', array(), '1.0', true );
    wp_enqueue_script("main-js", get_template_directory_uri()."/javascripts/main.js", array(), false, true);
    // wp_localize_script( 'ajax-pagination', 'ajaxpagination', array('ajaxurl' => admin_url( 'admin-ajax.php' )));
}



function notion_styles()
 {
     wp_enqueue_style("bootstrap", get_template_directory_uri()."/bootstrap/bootstrap.min.css");
     wp_enqueue_style("style", get_template_directory_uri()."/style.css");
     wp_enqueue_style("libr", get_template_directory_uri()."/stylesheets/library-imports.css");
     // wp_enqueue_style("panel", get_template_directory_uri()."/stylesheets/libs/panel.css");
     wp_enqueue_style("main", get_template_directory_uri()."/stylesheets/main.css");
     // wp_enqueue_style("but", get_template_directory_uri()."/stylesheets/buttons.css");
     // wp_enqueue_style("ion", get_template_directory_uri()."/ionicons/css/ion-icons.css");
 }

 function notion_setup()
{
  // Add Featured Image Option To Post Types
  add_theme_support('post-thumbnails' );
  add_theme_support( "title-tag" );
  add_theme_support( 'custom-header' );
  add_theme_support( "custom-background");
  add_theme_support( 'automatic-feed-links' );
  //Content width
  if ( ! isset( $content_width ) ) $content_width = 900;
}

add_action( 'after_setup_theme', 'notion_setup' );

register_nav_menus(array(
  'primary' => esc_html__( 'Primary Menu' )
));


function notion_allowed_html($text)
{
  return wp_kses($text, array(
      'a' => array(
        'href' => array(),
        'target' => array()
      ),
      'br' => array(),
      'small' => array(),
    )
  );
}

function notion_font_setup()
{
  $fonts = notion_get_option( 'notion_font_group' );
  $font_details = '';
  $font_syntax_array = array();
  // var_dump($fonts);
  if($fonts)
    foreach ($fonts as $font) {
      $font_weight_all = $font_name = $font_syntax = '';
      if (!array_key_exists('notion_font_source_switch', $font)){
        $font_name .= str_replace(' ', '+', $font['notion_font_group_fonts']['family']);
        $font_syntax .= $font_name.':';
        if($font['notion_font_group_fontweight'] !== ''){
          $font_weights = $font['notion_font_group_fontweight'];
          foreach ($font_weights as $font_weight) {
            $font_weight_all .= $font_weight;
            $font_weight_all .= ',';
          }
        }
        $font_weight_all = rtrim($font_weight_all, ',');
        $font_syntax .= $font_weight_all;
        array_push($font_syntax_array, $font_syntax);
      }
    }
  return $font_syntax_array;
}

 /**
  * Register custom fonts.
  */
 function notion_fonts_url() {
  $fonts_url = '';

  if ( notion_font_setup() ) {
    $fonts_url = add_query_arg( array(
      'family' => urlencode( implode( '|', notion_font_setup() ) ),
    ), 'https://fonts.googleapis.com/css' );
  }

  return esc_url_raw( $fonts_url );
 }

 /**
  * Enqueue scripts and styles.
  */
 function notion_font_scripts() {
  // Add custom fonts, used in the main stylesheet.
  wp_enqueue_style( 'notion-fonts', notion_fonts_url(), array(), null );
 }
 add_action( 'wp_enqueue_scripts', 'notion_font_scripts' );


 function notion_get_fonts_group()
 {
   $fonts = notion_get_option( 'notion_font_group' );
   $font_array = array();
   if($fonts)
     foreach ($fonts as $font) {

       if (array_key_exists('notion_font_source_switch', $font)){
         $font_array[ $font['notion_font_id'] ] = $font['notion_custom_font_name'];
       }else{
         $font_array[ $font['notion_font_id'] ] = $font['notion_font_group_fonts']['family'];
       }
     }else{
       $font_array['-'] = 'No font defined in theme options';
     }
   return $font_array;
 }

function notion_get_font_size()
{
  $font_sizes = notion_get_option( 'notion_font_size_group' );
  $font_size_array = array();
  if($font_sizes){
    foreach ($font_sizes as $font_size ) {



      $font_size_array[ $font_size['notion_font_size_id'] ] = $font_size['notion_font_size_title'];
    }
  }else{
    $font_size_array['-'] = 'No font size defined in theme options';

  }
  return $font_size_array;
}

function notion_get_color_palette()
{
  $colors = notion_get_option( 'notion_color_palette' );
  $highlight_color = notion_get_option( 'notion_highlight_color' );
  $color_array = array();

  if($highlight_color){
    $highlight_color_title = $highlight_color['notion_highlight_color_title'];
    $highlight_color_title = strtolower($highlight_color_title);
    $highlight_color_title = str_replace(' ', '-', $highlight_color_title);
    $highlight_color_title = preg_replace('/[^A-Za-z0-9\-]/', '', $highlight_color_title);

    $color_array[ $highlight_color_title.'|'.$highlight_color['notion_highlight_color_id'] ] = $highlight_color['notion_highlight_color_picker'];

  }

  if($colors)
    foreach ($colors as $color) {
      $title = $color['notion_color_title'];
      $color_id = $color['notion_color_id'];

      $notion_color_title = strtolower($title);
      $notion_color_title = str_replace(' ', '-', $notion_color_title);
      $notion_color_title = preg_replace('/[^A-Za-z0-9\-]/', '', $notion_color_title);

      $color_array[ $notion_color_title.'|'.$color_id ] = $color['notion_color_picker'];
    }else{
      $color_array['-|-'] = 'No color defined in theme options';
    }
  return $color_array;
}


function notion_get_letter_spacings()
{
  $letter_spacing = array(
    'letter-space-0' => esc_html__('Letter Spacing 0px', 'notion'),
    'letter-space--1' => esc_html__('Letter Spacing -1px', 'notion'),
    'letter-space-1' => esc_html__('Letter Spacing 1px', 'notion'),
    'letter-space-2' => esc_html__('Letter Spacing 2px', 'notion'),
    'letter-space-3' => esc_html__('Letter Spacing 3px', 'notion'),
    'letter-space-4' => esc_html__('Letter Spacing 4px', 'notion'),
    'letter-space-6' => esc_html__('Letter Spacing 6px', 'notion'),
    'letter-space-8' => esc_html__('Letter Spacing 8px', 'notion'),
    'letter-space-10' => esc_html__('Letter Spacing 10px', 'notion'),
    'letter-space-12' => esc_html__('Letter Spacing 12px', 'notion'),
  );

  return $letter_spacing;
}

function notion_get_line_heights()
{
  $line_height = array(
    'line-height-half' => esc_html__('Line Height 0.5', 'notion'),
    'line-height-threefourth' => esc_html__('Line Height 0.75', 'notion'),
    'line-height-one' => esc_html__('Line Height 1', 'notion'),
    'line-height-one-quarter' => esc_html__('Line Height 1.25', 'notion'),
    'line-height-one-half' => esc_html__('Line Height 1.5', 'notion'),
    'line-height-one-threefourth' => esc_html__('Line Height 1.75', 'notion'),
    'line-height-two' => esc_html__('Line Height 2', 'notion'),
  );

  return $line_height;
}

function notion_custom_css(){
    $notion_options = get_option('notion_wp');
    wp_enqueue_style('custom-style',get_template_directory() . '/stylesheets/custom-style.css');
    require_once(get_template_directory().'/inc/dynamic-style.php');

    $notion_custom_css = notion_generate_absolute_color_style() .' '. esc_html(notion_get_option('notion_ace_css_editor')) .' '. notion_generate_font_style();

    wp_add_inline_style( 'custom-style', $notion_custom_css );
}

add_action( 'wp_enqueue_scripts', 'notion_custom_css' );
