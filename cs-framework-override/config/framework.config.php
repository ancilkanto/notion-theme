<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.

// ===============================================================================================
// -----------------------------------------------------------------------------------------------
// FRAMEWORK SETTINGS
// -----------------------------------------------------------------------------------------------
// ===============================================================================================

$settings           = array(
  'menu_title'      => esc_html__('Theme Options', 'notion'),
  'menu_type'       => 'menu', // menu, submenu, options, theme, etc.
  'menu_slug'       => 'notion-options',
  'menu_icon'       => get_template_directory_uri() .'/admin/options-icon.png',
  'ajax_save'       => true,
  'show_reset_all'  => true,
  'framework_title' => esc_html('Notion Theme Options').'<small>'.esc_html(' by Quadnotion').'</small>',
);

// ===============================================================================================
// -----------------------------------------------------------------------------------------------
// FRAMEWORK OPTIONS
// -----------------------------------------------------------------------------------------------
// ===============================================================================================
$options        = array();

// ----------------------------------------
// Typography
// ----------------------------------------
$options[]      = array(
  'name'        => 'typography',
  'title'       => 'Typography',
  'icon'        => 'fa fa-font',
  'fields'      => array(
    // array(
    //   'type'         => 'subheading',
    //   'content'      => 'Basic Dependencies',
    // ),
    array(
      'id'              => 'notion_font_group',
      'type'            => 'group',
      'title'           => esc_html__('Font Family', 'notion'),
      'button_title'    => esc_html__('Add New', 'notion'),
      'accordion_title' => esc_html__('Add New Font', 'notion'),
      'fields'          => array(
        array(
          'id'          => 'notion_font_title',
          'type'        => 'text',
          'title'       => esc_html__('Title', 'notion'),
        ),

        array(
          'id'      => 'notion_font_source_switch',
          'type'    => 'switcher',
          'title'   => esc_html__('Custom Font', 'notion'),
          'default' => false,
          'label'   => esc_html__('Do you want to use custom font in your site', 'notion'),
          'help'    => esc_html__('Please refer documentation, to know more about custom font usage', 'notion'),
        ),

        array(
          'id'        => 'notion_font_group_fonts',
          'type'      => 'typography',
          'title'     => esc_html__('Select Font', 'notion'),
          'default'   => array(
            'family'  => 'Open Sans',
            'font'    => 'google', // this is helper for output ( google, websafe, custom )
          ),
          'font'      => 'custom',
          'variant'   => false,
          'dependency'   => array( 'notion_font_source_switch', '==', 'false' ),
        ),

        array(
          'id'                 => 'notion_font_group_fontweight',
          'type'               => 'select',
          'title'              => esc_html__('Select required font weights', 'notion'),
          'options'            => array(
            '100'              => '100',
            '100i'              => '100 Italic',
            '200'              => '200',
            '200i'              => '200 Italic',
            '300'              => '300',
            '300i'              => '300 Italic',
            '400'              => '400',
            '400i'              => '400 Italic',
            '500'              => '500',
            '500i'              => '500 Italic',
            '600'              => '600',
            '600i'              => '600 Italic',
            '700'              => '700',
            '700i'              => '700 Italic',
            '800'              => '800',
            '800i'              => '800 Italic',
            '900'              => '900',
            '900i'              => '900 Italic',
          ),
          'class'              => 'chosen',
          'attributes'         => array(
            'data-placeholder' => esc_html__('Select Font Weights', 'notion'),
            'multiple'         => 'only-key',
            'style'            => 'width: 200px;'
          ),
          'default' => '400',
          'dependency'         => array( 'notion_font_source_switch', '==', 'false' ),
        ),

        array(
          'id'    => 'notion_font_id',
          'type'  => 'text',
          'title' => 'Unique ID',
          'attributes' => array(
            'readonly' => 'only-key'
          ),
          'class' => 'notion-font-id'
        ),

        array(
          'id'          => 'notion_custom_font_name',
          'type'        => 'text',
          'title'       => esc_html__('Custom Font Name', 'notion'),
          'desc'        => esc_html__('Add custom font family name here', 'notion'),
          'after'       => notion_allowed_html('<a href="#" target="_blank">'.__('Know more about custom font usage', 'notion').'</a>'),
          'dependency'  => array( 'notion_font_source_switch', '==', 'true' ),
        ),
      ),
    ),

    array(
      'id'              => 'notion_font_size_group',
      'type'            => 'group',
      'title'           => esc_html__('Font Sizes', 'notion'),
      'desc'           => esc_html__('Add all the additional font sizes', 'notion'),
      'button_title'    => esc_html__('Add New', 'notion'),
      'accordion_title' => esc_html__('Add New Font Size', 'notion'),
      'fields'          => array(
        array(
          'id'          => 'notion_font_size_title',
          'type'        => 'text',
          'title'       => esc_html__('Title', 'notion'),
        ),

        array(
          'id'          => 'notion_font_size',
          'type'        => 'text',
          'title'       => esc_html__('Font Size', 'notion'),
        ),

        array(
          'id'    => 'notion_font_size_id',
          'type'  => 'text',
          'title' => 'Unique ID',
          'attributes' => array(
            'readonly' => 'only-key'
          ),
          'class' => 'notion-font-size-id'
        ),

        array(
          'type'    => 'notice',
          'class'   => 'info',
          'content' => 'Kindly provide responsive font sizes here',
        ),

        array(
          'id'          => 'notion_font_size_1024',
          'type'        => 'text',
          'title'       => esc_html__('For Screen Below 1025 Pixels', 'notion'),
        ),

        array(
          'id'          => 'notion_font_size_999',
          'type'        => 'text',
          'title'       => esc_html__('For Screen Below 1000 Pixels', 'notion'),
        ),

        array(
          'id'          => 'notion_font_size_767',
          'type'        => 'text',
          'title'       => esc_html__('For Screen Below 768 Pixels', 'notion'),
        ),

        array(
          'id'          => 'notion_font_size_479',
          'type'        => 'text',
          'title'       => esc_html__('For Screen Below 480 Pixels', 'notion'),
        ),
      ),
    ),
  ),
);

// ----------------------------------------
// Color Palette
// ----------------------------------------
$options[]      = array(
  'name'        => 'color_palette',
  'title'       => esc_html__('Color Palatte', 'notion'),
  'icon'        => 'blue ion ion-paintbucket',
  'fields'      => array(

    array(
      'id'              => 'notion_color_palette',
      'type'            => 'group',
      'title'           => 'Colors',
      'button_title'    => 'Add New',
      'accordion_title' => 'Add New Color',
      'fields'          => array(
        array(
          'id'          => 'notion_color_title',
          'type'        => 'text',
          'title'       => 'Title',
        ),

        array(
          'id'      => 'notion_color_picker',
          'type'    => 'color_picker',
          'title'   => 'Color Picker',
          'default' => '#000000',
        ),

        array(
          'id'    => 'notion_color_id',
          'type'  => 'text',
          'title' => 'Unique ID',
          'attributes' => array(
            'readonly' => 'only-key'
          ),
          'class' => 'notion-color-id'
        ),
      ),
    ),
  ),
);

// ----------------------------------------
// General Settings
// ----------------------------------------
$options[]      = array(
  'name'        => 'general_settings',
  'title'       => esc_html__('General Settings', 'notion'),
  'icon'        => 'green fa fa-sliders',
  'sections' => array(
    array(
      'name'      => 'notion_preloader_options',
      'title'     => esc_html__('Preloader', 'notion'),
      'icon'      => 'fa fa-spinner',

      'fields'      => array(
        array(
          'id'      => 'notion_preloader_active',
          'type'    => 'switcher',
          'title'   => esc_html__('Preloader', 'notion'),
          'default' => true,
          'desc'   => esc_html__('Activate to use preloader', 'notion'),
        ),
        array(
          'id'        => 'notion_preloader_image',
          'type'      => 'image',
          'title'     => 'Preloader Image',
          'desc'      => esc_html__('Upload or select preloader image(You can use PNG,JPG,GIF or SVG image)', 'notion'),
          'dependency'  => array( 'notion_preloader_active', '==', true ),
        ),
        array(
          'id'        => 'notion_preloader_style',
          'type'      => 'select',
          'title'     => esc_html__( 'Preloader Style', 'notion'),
          'desc'      => esc_html__( 'Select a preloader style', 'notion' ),
          'options'   => array(
            'preloader_style_1' => esc_html__('Preloader Style 1', 'notion'),
            'preloader_style_2' => esc_html__('Preloader Style 2', 'notion'),
            'preloader_style_3' => esc_html__('Preloader Style 3', 'notion'),
            'preloader_style_4' => esc_html__('Preloader Style 4', 'notion'),
            'preloader_style_5' => esc_html__('Preloader Style 5', 'notion'),
            'preloader_style_6' => esc_html__('Preloader Style 6', 'notion'),
            'preloader_style_7' => esc_html__('Preloader Style 7', 'notion'),
          ),
          'default'      => 'preloader_style_1',
          'dependency'  => array( 'notion_preloader_active', '==', true ),
        ),
        array(
          'id'        => 'notion_preloader_bg',
          'type'      => 'color_picker',
          'title'     => esc_html__('Preloader Background Color', 'notion'),
          'desc'      => esc_html__('Select a background color', 'notion'),
          'default'   =>  '#ffffff',
        ),
      ),
    ),

    array(
      'name'      => 'notion_logo_options',
      'title'     => esc_html__('Logo', 'notion'),
      'icon'      => 'ion ion-image',

      'fields'      => array(
        array(
          'id'        => 'notion_logo_dark',
          'type'      => 'image_extend',
          'title'     => esc_html__('Logo', 'notion'),
          'desc'      => esc_html__('Upload or select logo', 'notion'),
          'class'     =>  'notion_main_logo',
        ),
        array(
          'id'        => 'notion_logo_light',
          'type'      => 'image_extend',
          'title'     => esc_html__('Logo Light', 'notion'),
          'desc'      => esc_html__('Upload or select light version of logo', 'notion'),
          'class'     =>  'notion_main_logo',
        ),
        array(
          'id'        => 'notion_logo_height',
          'type'      => 'slider',
          'title'     => esc_html__( 'Logo Height', 'notion'),
          'link-to'   => 'notion_main_logo',
          'options'   => array(
            'step'    => 1,
            'min'     => 0,
            'max'     => 120,
            'unit'    => 'px',
          ),
          'class'   => 'set-logo-height',
        ),
        array(
          'id'        => 'notion_logo_mobile',
          'type'      => 'image',
          'title'     => esc_html__('Mobile Logo', 'notion'),
          'desc'      => esc_html__('Upload or select logo for mobile and tablet devices', 'notion'),
          // 'after' =>  esc_html__('Upload or select light version of logo for mobile and tablet devices', 'notion'),
          'class'     =>  '',
        ),

        // array(
        //   'id'      => 'notion_multiple_logo',
        //   'type'    => 'switcher',
        //   'title'   => esc_html__('Multiple Logo', 'notion'),
        //   'default' => true,
        //   'desc'   => esc_html__('Activate to upload different logo for each skin.', 'notion'),
        // ),
        //
        // array(
        //   'id'        => 'notion_logo_light_mobile',
        //   'type'      => 'image',
        //   'title'     => esc_html__('Mobile Logo Light', 'notion'),
        //   'desc'      => esc_html__('Upload or select light version of logo for mobile and tablet devices', 'notion'),
        //   'after' =>  esc_html__('Upload or select light version of logo for mobile and tablet devices', 'notion'),
        //   'class'     =>  'notion_logo_select',
        //   'dependency'  => array( 'notion_multiple_logo', '==', true ),
        // ),
        // array(
        //   'id'        => 'notion_logo_dark',
        //   'type'      => 'image',
        //   'title'     => esc_html__('Logo Dark', 'notion'),
        //   'desc'      => esc_html__('Upload or select dark version of logo', 'notion'),
        //   'class'     =>  'notion_logo_select',
        //   'dependency'  => array( 'notion_multiple_logo', '==', true ),
        // ),
        // array(
        //   'id'        => 'notion_logo_dark_mobile',
        //   'type'      => 'image',
        //   'title'     => esc_html__('Mobile Logo Dark', 'notion'),
        //   'desc'      => esc_html__('Upload or select dark version of logo for mobile and tablet devices', 'notion'),
        //   'class'     =>  'notion_logo_select',
        //   'dependency'  => array( 'notion_multiple_logo', '==', true ),
        // ),

        array(
          'id'        => 'notion_logo_mobile',
          'type'      => 'image',
          'title'     => esc_html__('Mobile Logo', 'notion'),
          'desc'      => esc_html__('Upload or select logo for mobile and tablet devices', 'notion'),
          'class'     =>  'notion_logo_select',
          'dependency'  => array( 'notion_multiple_logo', '==', false ),
        ),

      ),
    ),

    array(
      'name'      => 'notion_mobile_header_options',
      'title'     => esc_html__('Mobile Header', 'notion'),
      'icon'      => 'ion ion-iphone',
      'fields' => array(
        array(
          'id'        => 'notion_mobile_header_background1',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Header Background Color', 'notion'),
          'desc'      => esc_html__('Select a background color', 'notion'),
          'default'   => '#333333'
        ),
        array(
          'id'        => 'notion_mobile_header_content_color',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Header Hamburger Icon Color', 'notion'),
          'desc'      => esc_html__('Select a color', 'notion'),
        ),
        array(
          'id'        => 'notion_mobile_primary_menu_background_color',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Primary Menu Backgroud Color', 'notion'),
          'desc'      => esc_html__('Select a color', 'notion'),
        ),
        array(
          'id'        => 'notion_mobile_primary_menu_background_color',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Primary Menu Items Color', 'notion'),
          'desc'      => esc_html__('Select a color', 'notion'),
        ),
        array(
          'id'        => 'notion_mobile_secondary_menu_background_color',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Secondary Menu Backgroud Color', 'notion'),
          'desc'      => esc_html__('Select a color', 'notion'),
        ),
        array(
          'id'        => 'notion_mobile_secondary_menu_background_color',
          'type'      => 'color_picker',
          'title'     => esc_html__('Mobile Secondary Menu Items Color', 'notion'),
          'desc'      => esc_html__('Select a color', 'notion'),
        ),
      ),
    ),
  ),
);


$options[]      = array(
  'name'        => 'layout_styles',
  'title'       => esc_html__('Layout Styles', 'notion'),
  'icon'        => 'orange ion ion-ios-monitor',

  'fields'      => array(
    array(
      'id'           => 'notion_site_layout',
      'type'         => 'image_select',
      'title'        => esc_html__('Site Layout Style', 'notion'),
      'desc'         => esc_html__('Select a layout for the site (Default: Full Width)', 'notion'),
      'options'      => array(
        'site_fluid'     => get_template_directory_uri() .'/admin/icons/cs-layout/1.jpg',
        'site_boxed'    => get_template_directory_uri() .'/admin/icons/cs-layout/2.jpg',
        'site_outlined' => get_template_directory_uri() .'/admin/icons/cs-layout/3.jpg',
      ),
      'default'      => 'site_fluid',
      'radio'        => true,
      'attributes'   => array(
        'data-depend-id' => 'notion_site_layout',
      ),
    ),
    array(
      'id'        => 'notion_site_width',
      'type'      => 'text',
      'title'     => esc_html__('Site Width', 'notion'),
      'desc'      => esc_html__('Add desired width for the site in "px" or "%" (Default: 1200px)', 'notion'),
      'default'      => '1200px',
      'dependency'         => array( 'notion_site_layout', 'any', 'site_boxed' ),
    ),
    array(
      'id'        => 'notion_site_content_align',
      'type'      => 'select',
      'title'     => esc_html__( 'Site Content Area Align', 'notion'),
      'desc'      => esc_html__( 'Select a content area align style for the site (Default: Center Align)', 'notion' ),
      'options'   => array(
        'content_center' => esc_html__('Center', 'notion'),
        'content_left' => esc_html__('Left', 'notion'),
        'content_right' => esc_html__('Right', 'notion'),
      ),
      'default'      => 'content_center',
      'dependency'         => array( 'notion_site_layout', 'any', 'site_boxed' ),
    ),
    array(
      'id'        => 'notion_site_background_type',
      'type'      => 'select',
      'title'     => esc_html__( 'Site Left/Right Area Style', 'notion'),
      'desc'      => esc_html__( 'Select site outside area fill style (Default: Background Color)', 'notion' ),
      'options'   => array(
        'site_background_color'    => esc_html__('Background Color', 'notion'),
        'site_background_image'    => esc_html__('Background Image/Pattern', 'notion'),
        // 'site_background_pattern'  => esc_html__('Background Pattern', 'notion'),
        // 'site_background_gradient' => esc_html__('Background Gardient', 'notion'),
        'site_background_video'    => esc_html__('Background Video', 'notion'),
        'site_background_gallery'  => esc_html__('Background Gallery', 'notion'),
      ),
      'default'    => 'site_background_color',
      'dependency'         => array( 'notion_site_layout', 'any', 'site_boxed' ),
      'attributes'   => array(
        'data-depend-id' => 'notion_site_background_type',
      ),
    ),
    array(
      'id'         => 'notion_boxed_bg_color',
      'type'       => 'color_picker',
      'title'      => esc_html__('Background Color', 'notion'),
      'desc'       => esc_html__('Pick a color for the outside area of site content area', 'notion'),
      'default'    => '#efefef',
      'dependency' => array( 'notion_site_layout|notion_site_background_type', 'any', 'site_boxed|site_background_color,' ),
    ),
    array(
      'id'        => 'notion_boxed_bg_image',
      'type'      => 'image',
      'title'     => esc_html__('Background Image', 'notion'),
      'desc'      => esc_html__('Upload or choose an image ', 'notion'),
      'dependency' => array( 'notion_site_layout|notion_site_background_type', 'any', 'site_boxed|site_background_image,' ),
    ),
    array(
      'id'        => 'notion_boxed_bg_video_type',
      'type'      => 'radio',
      'title'     => esc_html__( 'Background Video Type', 'notion' ),
      'desc'      => esc_html__( 'Select a background video type', 'notion' ),
      'options'   => array(
        'youtube' => esc_html__( 'Youtube', 'notion' ),
        'vimeo'   => esc_html__( 'Vimeo', 'notion' ),
      ),
      'default'    => 'youtube',
      'dependency' => array( 'notion_site_layout|notion_site_background_type', 'any', 'site_boxed|site_background_video,' ),
      // 'attributes' => array(
      //   'data-depend-id' => 'notion_boxed_bg_video_type',
      // ),
    ),
    array(
      'id'         => 'notion_boxed_bg_video_id',
      'type'       => 'text',
      'title'      => esc_html__( 'Background Video ID', 'notion' ),
      'desc'       => esc_html__( 'Provide video ID', 'notion' ),
      'required'   => array('site-background-type','equals','5'),
      'dependency' => array( 'notion_site_layout|notion_site_background_type', 'any', 'site_boxed|site_background_video,' ),
    ),
    array(
      'id'       => 'notion_boxed_bg_gallery',
      'type'     => 'gallery',
      'title'    => esc_html__('Background Image Gallery', 'notion'),
      'desc' => esc_html__('Upload or choose multiple images for background image gallery', 'notion'),
      'dependency' => array( 'notion_site_layout|notion_site_background_type', 'any', 'site_boxed|site_background_gallery' ),
    ),
    array(
      'id'       => 'notion_outline_width',
      'type'     => 'slider',
      'title'    => esc_html__( 'Outline Width', 'notion' ),
      'desc'     => esc_html__( 'Add/Select desired outline width in pixel(Max: 80px)', 'notion' ),
      'options'  => array(
        "min"       => 5,
        "step"      => 5,
        "max"       => 80,
        "default"   => 20,
        'unit'    => 'px'
      ),
      'dependency' => array( 'notion_site_layout', 'any', 'site_outlined' ),
    ),
    array(
      'id'       => 'notion_outline_color',
      'type'     => 'color_picker',
      'title'    => esc_html__( 'Outline Color', 'notion' ),
      'desc' => esc_html__( 'Pick a color for outline (Default: #FFFFFF)', 'notion' ),
      'default'  => '#FFFFFF',
      'rgba'     => false,
      'dependency' => array( 'notion_site_layout', 'any', 'site_outlined' ),
    ),
    array(
      'id'         => 'notion_inner_shadow',
      'type'       => 'switcher',
      'title'      => esc_html__('Shadow', 'notion'),
      'default'    => true,
      'desc'       => esc_html__('Activate to add shadow to site content area (Default: ON)', 'notion'),
      'dependency' => array( 'notion_site_layout', 'any', 'site_boxed,site_outlined' ),
      'attributes'   => array(
        'data-depend-id' => 'notion_inner_shadow',
      ),
    ),
    array(
      'id'        => 'notion_inner_shadow_type',
      'type'      => 'radio',
      'title'     => esc_html__( 'Shadow Type', 'notion' ),
      'desc'      => esc_html__( 'Choose a shadow type (Default: Dark)', 'notion' ),
      'options'   => array(
        'shadow_dark'  => esc_html__( 'Dark', 'notion' ),
        'shadow_light' => esc_html__( 'Light', 'notion '),
      ),
      'default'    => 'shadow_dark',
      'dependency' => array( 'notion_site_layout|notion_inner_shadow', 'any|==', 'site_boxed,site_outlined|true' ),
    ),


  ),
);

$options[]   = array(
  'name'     => 'header_nav_styles',
  'title'    => 'Header/Nav Styles',
  'icon'     => 'grey ion ion-ios-book',
  'fields' => array(

    array(
      'id'           => 'notion_header_style',
      'type'         => 'image_select',
      'title'        => esc_html__('Header Style', 'notion'),
      'desc'         => esc_html__('Select a header style', 'notion'),
      'options'      => array(
        'header_standard'     => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/1.jpg'),
        'header_center'    => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/2.jpg'),
        'header_split' => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/3.jpg'),
        'header_hamburger' => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/4.jpg'),
        'header_vertical' => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/5.jpg'),
        'header_vertical_hamburger' => esc_url(get_template_directory_uri() .'/admin/icons/cs-header/6.jpg'),
      ),
      'default' => 'header_standard',
      'attributes'   => array(
        'data-depend-id' => 'notion_header_style',
      ),
    ),

    array(
      'id'       => 'notion_full_width_header',
      'type'     => 'switcher',
      'title'    => esc_html__( 'Full Width Header', 'notion' ),
      'desc'     => esc_html__( 'Activate to set header width 100% irrespective of site width (Default: OFF)' ),
      'default'  => false,
      'dependency' => array( 'notion_site_layout|notion_header_style', 'any|any', 'site_boxed,site_outlined|header_standard,header_center,header_split,header_hamburger' ),
    ),

    array(
      'id'       => 'notion_header_inner_width',
      'type'     => 'radio',
      'class'   => 'horizontal',
      'title'    => esc_html__( 'Header Content Area Layout', 'notion' ),
      'desc'     => esc_html__( 'Select header content area width type', 'notion' ),
      'options'  => array(
        'header_content_width_container' => esc_html__('Container', 'notion'),
        'header_content_width_fluid' => esc_html__('Fluid', 'notion'),
      ),
      'default' => 'header_content_width_fluid',
      'dependency' => array( 'notion_site_layout|notion_header_style', 'any|any', 'site_fluid|header_standard,header_center,header_split,header_hamburger' ),
    ),

    array(
      'id'        => 'notion_horizontal_header_position',
      'type'      => 'slider',
      'title'     => esc_html__( 'Header Spacing From Top', 'notion'),
      'options'   => array(
        'step'    => 1,
        'min'     => 0,
        'max'     => 80,
        'unit'    => 'px',
        'default' => '10',
      ),

      'dependency' => array( 'notion_header_style', 'any', 'header_standard,header_center,header_split,header_hamburger' ),
    ),

    array(
      'id'        => 'notion_vertical_header_position',
      'type'      => 'radio',
      'title'     => esc_html__( 'Vertical Header Position', 'ample' ),
      'subtitle'  => esc_html__( 'Select vertical header position(Default: Left)', 'ample'),
      'options'  => array(
          'vertical-header-left' => esc_html__('Left', 'notion'),
          'vertical-header-right' => esc_html__('Right', 'notion'),
      ),
      'default'   =>  'vertical-header-left',
      'dependency' => array( 'notion_header_style', 'any', 'header_vertical,header_vertical_hamburger' ),
    ),

    // array(
    //   'id'        => 'notion_header_background_color',
    //   'type'      => 'color_picker',
    //   'title'     => esc_html__( 'Header Background Color', 'notion' ),
    //   'desc'  => esc_html__( 'Pick a background color for the header(Default: Transparent)', 'notion' )
    // ),
    // array(
    //   'id'       => 'notion_header_content_color',
    //   'type'     => 'color_picker',
    //   'title'     => esc_html__( 'Header Content Color', 'notion' ),
    //   'desc'  => esc_html__( 'Pick a color for header contents[main menu items and social/search/cart icons](Default: #000000)', 'notion' ),
    //   'default'   =>  '#000000',
    //   'rgba'    => false
    // ),
    array(
      'id'        => 'notion_header_color_skin',
      'type'      => 'radio',
      'title'     => esc_html__( 'Header Color Skin', 'notion' ),
      'desc'  => esc_html__( 'Select a color skin for the header', 'notion' ),
      'options'  => array(
          'dark_style_header' => esc_html__( 'Dark Style Skin', 'notion' ),
          'light_style_header' => esc_html__('Light Style Skin', 'notion' ),
      ),
      'default'   =>  'dark_style_header'
    ),
    array(
      'id'       => 'notion_menu_align',
      'type'     => 'select',
      'title'    => esc_html__( 'Menu Align', 'notion' ),
      'desc' => esc_html__( 'Select menu alignment within the header', 'notion' ),
      'options'   => array(
        'menu_align_left' => esc_html__( 'Left Align', 'notion' ),
        'menu_align_center'   => esc_html__( 'Center Align', 'notion' ),
        'menu_align_right'   => esc_html__( 'Right Align', 'notion' ),
      ),
      'default' => 'menu_align_center',
      'dependency' => array( 'notion_header_style', 'any', 'header_standard' ),
    ),
    array(
      'id'       => 'notion_menu_direction_icon',
      'type'     => 'switcher',
      'title'    => esc_html__( 'Menu Direction Icon', 'notion' ),
      'desc' => esc_html__( 'Activate to show menu direction icons', 'notion' ),
      'default' => true,
    ),
    // array(
    //   'id'       => 'notion_menu_background_color',
    //   'type'     => 'color_picker',
    //   'title'    => esc_html__( 'Menu Background Color', 'notion' ),
    //   'desc' => esc_html__( 'Pick a color for menu background area. Only for Megamenu and Dropdown menu background will change in favored-menu.', 'notion' ),
    //   'default' => '#3B3B3B'
    // ),
    // array(
    //   'id'       => 'notion_menu_text_color',
    //   'type'     => 'color_picker',
    //   'title'    => esc_html__( 'Menu Text Color', 'notion' ),
    //   'desc' => esc_html__( 'Pick a color for menu text.', 'notion' ),
    //   'default' => '#FFFFFF',
    //   'rgba' => false
    // ),
    array(
      'id'       => 'notion_nav_bg_img',
      'type'     => 'image',
      'title'    => esc_html__( 'Navigation Background Image', 'notion' ),
      'desc' => esc_html__( 'Upload or Select the image. ', 'notion' ),
    ),
    array(
      'id' => 'notion_header_animation',
      'type'     => 'select',
      'title'    => esc_html__( 'Header Animation', 'notion' ),
      'desc' => esc_html__( 'Select a header animation style', 'notion' ),
      'options'   => array(
        '' => esc_html__( 'None', 'notion' ),
        'sticky_header'   => esc_html__( 'Always Sticky On Top', 'notion' ),
        'slide_down_header'   => esc_html__( 'Sticky On Scroll Down', 'notion' ),
        'slide_up_down_header'   => esc_html__( 'Hide On Scroll Down / Show On Scroll Up', 'notion' ),
      ),
      'default' => 'slide_up_down_header',
      // 'dependency' => array( 'notion_header_style', 'any', 'header_standard' ),
    ),
  ),
);


// ------------------------------
// HEADER COLOR SKINS   -
// ------------------------------
$options[]   = array(
  'name'     => 'header_color_skins',
  'title'    => 'Header Color Skins',
  'icon'     => 'violet ion ion-android-color-palette',
  'sections' => array(
    array(
      'name'      => 'notion_dark_skin',
      'title'     => esc_html__('Dark Skin', 'notion'),
      'icon'      => 'ion ion-ios-color-filter',
      'fields' => array(
        array(
          'id'    => 'notion_dark_skin_header_bg',
          'type'  => 'color_select',
          'title' => esc_html__('Header Background Color', 'notion'),
          'options' => notion_get_color_palette(),
          'class' => 'color-palette',
        ),
        array(
          'id'      => 'notion_dark_skin_header_bg_trans',
          'type'    => 'checkbox',
          'title'   => esc_html__('Transparent Baground', 'notion'),
          'label'   => esc_html__('Check to use transparent background', 'notion'),
          'default' => true,
        ),
        array(
          'id'    => 'notion_dark_skin_primary_menu_color',
          'type'  => 'color_select',
          'title' => esc_html__('Primary Menu Color', 'notion'),
          'options' => notion_get_color_palette(),
          'class' => 'color-palette',
        ),
      ),
    ),
    array(
      'name'      => 'notion_light_skin',
      'title'     => esc_html__('Light Skin', 'notion'),
      'icon'      => 'ion ion-ios-color-filter-outline',
      'fields' => array(
        array(
          'id'    => 'notion_light_skin_header_bg',
          'type'  => 'color_select',
          'title' => 'Header Background Color',
          'options' => notion_get_color_palette(),
          'class' => 'color-palette',
        ),
        array(
          'id'      => 'notion_light_skin_header_bg_trans',
          'type'    => 'checkbox',
          'title'   => esc_html__('Transparent Baground', 'notion'),
          'label'   => esc_html__('Check to use transparent background', 'notion'),
          'default' => true,
        ),
        array(
          'id'    => 'notion_light_skin_primary_menu_color',
          'type'  => 'color_select',
          'title' => esc_html__('Primary Menu Color', 'notion'),
          'options' => notion_get_color_palette(),
          'class' => 'color-palette',
        ),
      ),
    ),
  ),
);

// ------------------------------
// ADDITIONAL CSS & JS   -
// ------------------------------
$options[]   = array(
  'name'     => 'additional_css_js',
  'title'    => 'Additional CSS &amp JS',
  'icon'     => 'fa fa-code darkseagreen',
  // begin: fields
  'fields'    => array(
    array(
      'id'       => 'notion_ace_css_editor',
      'type'     => 'editor',
      'title'    => esc_html__( 'Additional CSS Codes', 'notion' ),
      'desc' => esc_html__( 'Add your CSS codes here', 'notion' ),
    ),

    array(
      'id'       => 'notion_ace_javascript_editor',
      'type'     => 'editor',
      'title'    => esc_html__( 'Additional JS Codes', 'notion' ),
      'desc' => esc_html__( 'Add your Javascript codes here', 'notion' ),
    ),
  )
);

// ------------------------------
// a option section with tabs   -
// ------------------------------
$options[]   = array(
  'name'     => 'options',
  'title'    => 'Options',
  'icon'     => 'fa fa-plus-circle',
  'sections' => array(

    // -----------------------------
    // begin: text options         -
    // -----------------------------
    array(
      'name'      => 'text_options',
      'title'     => 'Text',
      'icon'      => 'fa fa-check',

      // begin: fields
      'fields'    => array(

        // begin: a field
        array(
          'id'    => 'unique_text_1',
          'type'  => 'text',
          'title' => 'Text Field',
        ),
        // end: a field

        array(
          'id'    => 'unique_text_2',
          'type'  => 'text',
          'title' => 'Text Field with Description',
          'desc'  => 'Lets write some description for this text field.',
        ),

        array(
          'id'    => 'unique_text_3',
          'type'  => 'text',
          'title' => 'Text Field with Help',
          'help'  => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_text_4',
          'type'    => 'text',
          'title'   => 'Text Field with Default',
          'default' => 'some default value bla bla bla',
        ),

        array(
          'id'            => 'unique_text_5',
          'type'          => 'text',
          'title'         => 'Text Field with Placeholder',
          'attributes'    => array(
            'placeholder' => 'do stuff...'
          )
        ),

        array(
          'id'    => 'unique_text_6',
          'type'  => 'text',
          'title' => 'Text Field with After-text',
          'after' => ' <i class="cs-text-muted">( this option is optional )</i>',
        ),

        array(
          'id'     => 'unique_text_7',
          'type'   => 'text',
          'title'  => 'Text Field with Before-text',
          'before' => '<i class="cs-text-muted">( important )</i> ',
        ),

        array(
          'id'    => 'unique_text_8',
          'type'  => 'text',
          'title' => 'Text Field with After-block-text',
          'after' => '<p class="cs-text-info">Information: There is some description for option.</p> ',
        ),

        array(
          'id'         => 'unique_text_9',
          'type'       => 'text',
          'title'      => 'Text Field with Ready-Only',
          'attributes' => array(
            'readonly' => 'only-key'
          ),
          'default'    => 'info@domain.com'
        ),

        array(
          'id'          => 'unique_text_10',
          'type'        => 'text',
          'title'       => 'Text Field with Maxlength (5)',
          'attributes'  => array(
            'maxlength' => '5'
          ),
          'default'     => 'Hello',
        ),

        array(
          'id'         => 'unique_text_11',
          'type'       => 'text',
          'title'      => 'Text Field with Custom Style',
          'attributes' => array(
            'style'    => 'width: 175px; height: 40px; border-color: #93C054;'
          ),
          'after'      => '<p class="cs-text-muted">There is custom css <strong>style="width: 175px; height: 40px; border-color: #93C054;"</strong></p>',
        ),

        array(
          'id'         => 'unique_text_12',
          'type'       => 'text',
          'title'      => 'Text Field with Custom Style',
          'attributes' => array(
            'style'    => 'width: 100%;'
          ),
          'after'      => '<p class="cs-text-muted">There is custom css <strong>style="width: 100%;"</strong></p>'
        ),

        array(
          'id'     => 'unique_text_13',
          'type'   => 'text',
          'before' => '<h4>Text Field without left title</h4>',
          'after'  => '<p class="cs-text-muted">This Text Field do not using left title, just using before text here. also you can remove it.</h4>',
        ),

      ), // end: fields

    ), // end: text options

    // -----------------------------
    // begin: textarea options     -
    // -----------------------------
    array(
      'name'      => 'textarea_options',
      'title'     => 'Textarea',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'    => 'unique_textarea_1',
          'type'  => 'textarea',
          'title' => 'Simple Textarea',
        ),

        array(
          'id'        => 'unique_textarea_1_1',
          'type'      => 'textarea',
          'title'     => 'Textarea with Shortcoder',
          'shortcode' => true,
        ),

        array(
          'id'    => 'unique_textarea_2',
          'type'  => 'textarea',
          'title' => 'Textarea Field with Description',
          'desc'  => 'Lets write some description for this textarea field.',
        ),

        array(
          'id'    => 'unique_textarea_3',
          'type'  => 'textarea',
          'title' => 'Textarea Field with Help',
          'help'  => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_textarea_4',
          'type'    => 'textarea',
          'title'   => 'Textarea Field with Default',
          'default' => 'some default value bla bla bla',
        ),

        array(
          'id'            => 'unique_textarea_5',
          'type'          => 'textarea',
          'title'         => 'Textarea Field with Placeholder',
          'attributes'    => array(
            'placeholder' => 'do stuff...'
          )
        ),

        array(
          'id'    => 'unique_textarea_6',
          'type'  => 'textarea',
          'title' => 'Textarea Field with After-text',
          'after' => '<p class="cs-text-muted">Information: There is some description for option.</p> ',
        ),

        array(
          'id'     => 'unique_textarea_7',
          'type'   => 'textarea',
          'title'  => 'Textarea Field with Before-text',
          'before' => '<p class="cs-text-muted">Information: There is some description for option.</p> ',
        ),

        array(
          'id'         => 'unique_textarea_8',
          'type'       => 'textarea',
          'title'      => 'Textarea Field with Before-text',
          'attributes' => array(
            'rows'     => 10,
          ),
          'after'      => '<p class="cs-text-muted">custom textarea attribute rows=10</p> ',
        ),

        array(
          'id'     => 'unique_textarea_13',
          'type'   => 'textarea',
          'before' => '<h4>Textarea Field without left title</h4>',
          'after'  => '<p class="cs-text-muted">This Textarea Field do not using left title, just using before text here. also you can remove it.</h4>',
        ),

      ),

    ), // end: textarea options

    // -----------------------------
    // begin: checkbox options     -
    // -----------------------------
    array(
      'name'      => 'checkbox_options',
      'title'     => 'Checkbox',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'    => 'unique_checkbox_1',
          'type'  => 'checkbox',
          'title' => 'Checkbox',
          'label' => 'Yes, Please.',
        ),

        array(
          'id'      => 'unique_checkbox_2',
          'type'    => 'checkbox',
          'title'   => 'Checkbox with Default Value',
          'label'   => 'Would you like something ?',
          'default' => true,
        ),

        array(
          'id'    => 'unique_checkbox_3',
          'type'  => 'checkbox',
          'title' => 'Checkbox Field with Help',
          'label' => 'I am an checkbox',
          'help'  => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'       => 'unique_checkbox_4',
          'type'     => 'checkbox',
          'title'    => 'Checkbox Field with Options',
          'options'  => array(
            'blue'   => 'Blue',
            'green'  => 'Green',
            'yellow' => 'Yellow',
          ),
        ),

        array(
          'id'         => 'unique_checkbox_5',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Options and Default',
          'options'    => array(
            'bmw'      => 'BMW',
            'mercedes' => 'Mercedes',
            'jaguar'   => 'Jaguar',
          ),
          'default'    => 'bmw'
        ),

        array(
          'id'         => 'unique_checkbox_6',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Options Horizontal',
          'class'      => 'horizontal',
          'options'    => array(
            'blue'     => 'Blue',
            'green'    => 'Green',
            'yellow'   => 'Yellow',
            'red'      => 'Red',
            'black'    => 'Black',
          ),
          'default'    => array( 'green', 'yellow', 'red' )
        ),

        array(
          'id'         => 'unique_checkbox_7',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Pages',
          'options'    => 'pages',
        ),

        array(
          'id'         => 'unique_checkbox_8',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Posts',
          'options'    => 'posts',
        ),

        array(
          'id'         => 'unique_checkbox_9',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Categories',
          'options'    => 'categories',
        ),

        array(
          'id'         => 'unique_checkbox_10',
          'type'       => 'checkbox',
          'title'      => 'Checkbox Field with Tags',
          'options'    => 'tags',
        ),

        array(
          'id'            => 'unique_checkbox_11',
          'type'          => 'checkbox',
          'title'         => 'Checkbox Field with Pages',
          'options'       => 'pages',
          'query_args'    => array(
            'sort_order'  => 'desc',
            'sort_column' => 'post_title',
          ),
          'after'         => '<p class="cs-text-muted"><strong>query_args:</strong> sort_order=desc, sort_column=post_title</p>',
        ),

        array(
          'id'          => 'unique_checkbox_12',
          'type'        => 'checkbox',
          'title'       => 'Checkbox Field with CPT Posts',
          'options'     => 'posts',
          'query_args'  => array(
            'post_type' => 'your_post_type_name',
          ),
          'after'       => '<div class="cs-text-muted"><strong>query_args:</strong> post_type=your_post_type_name</div>',
        ),

        array(
          'id'          => 'unique_checkbox_13',
          'type'        => 'checkbox',
          'title'       => 'Checkbox Field with CPT Categories',
          'options'     => 'categories',
          'query_args'  => array(
            'type'      => 'your_post_type_name',
            'taxonomy'  => 'your_taxonomy_name',
          ),
          'after'       => '<div class="cs-text-muted"><strong>query_args:</strong> post_type=your_post_type_name, taxonomy=your_taxonomy_name</div>',
        ),

        array(
          'id'           => 'unique_checkbox_14',
          'type'         => 'checkbox',
          'title'        => 'Checkbox Field with CPT Tags',
          'options'      => 'tags',
          'query_args'   => array(
            'taxonomies' => 'your_taxonomy_name',
            'order'      => 'asc',
            'orderby'    => 'name',
          ),
          'after'        => '<div class="cs-text-muted"><strong>query_args:</strong> taxonomies=your_taxonomy_name, order=asc, orderby=name</div>',
        ),

      ),
    ), // end: checkbox options


    // -----------------------------
    // begin. radio options        -
    // -----------------------------
    array(
      'name'      => 'radio_options',
      'title'     => 'Radio',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'      => 'unique_radio_1',
          'type'    => 'radio',
          'title'   => 'Radio Field',
          'options' => array(
            'yes'   => 'Yes, Please.',
            'no'    => 'No, Thank you.',
          ),
        ),

        array(
          'id'        => 'unique_radio_2',
          'type'      => 'radio',
          'title'     => 'Radio with Default Value',
          'options'   => array(
            'yes'     => 'Yes, Please.',
            'no'      => 'No, Thank you.',
            'nothing' => 'I am not sure, yet!',
          ),
          'default'   => 'nothing',
          'help'      => 'Reference site about Lorem Ipsum, a random Lipsum generator.',
        ),

        array(
          'id'      => 'unique_radio_3',
          'type'    => 'radio',
          'title'   => 'Radio Field',
          'class'   => 'horizontal',
          'options' => array(
            'yes'   => 'Yes, Please.',
            'no'    => 'No, Thank you.',
          ),
          'after'   => '<div class="cs-text-muted">Reference site about Lorem Ipsum, a random Lipsum generator.</div>',
        ),

        array(
          'id'         => 'unique_radio_4',
          'type'       => 'radio',
          'title'      => 'Radio Field with Pages',
          'options'    => 'pages',
        ),

        array(
          'id'         => 'unique_radio_5',
          'type'       => 'radio',
          'title'      => 'Radio Field with Posts',
          'options'    => 'posts',
        ),

        array(
          'id'         => 'unique_radio_6',
          'type'       => 'radio',
          'title'      => 'Radio Field with Categories',
          'options'    => 'categories',
        ),

        array(
          'id'         => 'unique_radio_7',
          'type'       => 'radio',
          'title'      => 'Radio Field with Tags',
          'options'    => 'tags',
        ),

        array(
          'id'            => 'unique_radio_8',
          'type'          => 'radio',
          'title'         => 'Radio Field with Pages',
          'options'       => 'pages',
          'query_args'    => array(
            'sort_order'  => 'desc',
            'sort_column' => 'post_title',
          ),
          'after'         => '<p class="cs-text-muted"><strong>query_args:</strong> sort_order=desc, sort_column=post_title</p>',
        ),

        array(
          'id'          => 'unique_radio_9',
          'type'        => 'radio',
          'title'       => 'Radio Field with CPT Posts',
          'options'     => 'posts',
          'query_args'  => array(
            'post_type' => 'your_post_type_name',
          ),
          'after'       => '<div class="cs-text-muted"><strong>query_args:</strong> post_type=your_post_type_name</div>',
        ),

        array(
          'id'          => 'unique_radio_10',
          'type'        => 'radio',
          'title'       => 'Radio Field with CPT Categories',
          'options'     => 'categories',
          'query_args'  => array(
            'type'      => 'your_post_type_name',
            'taxonomy'  => 'your_taxonomy_name',
          ),
          'after'       => '<div class="cs-text-muted"><strong>query_args:</strong> post_type=your_post_type_name, taxonomy=your_taxonomy_name</div>',
        ),

        array(
          'id'         => 'unique_radio_11',
          'type'       => 'radio',
          'title'      => 'Radio Field',
          'options'    => array(
            'yes'      => 'Yes, Please.',
            'no'       => 'No, Thank you.',
            'nothing'  => 'Nothing.',
          ),
        ),

      ),
    ), // end: radio options


    // -----------------------------
    // begin: select options       -
    // -----------------------------
    array(
      'name'      => 'select_options',
      'title'     => 'Select',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'      => 'unique_select_1',
          'type'    => 'select',
          'title'   => 'Select',
          'options' => array(
            'yes'   => 'Yes, Please.',
            'no'    => 'No, Thank you.'
          )
        ),

        array(
          'id'             => 'unique_select_2',
          'type'           => 'select',
          'title'          => 'Select with First Empty Value',
          'options'        => array(
            'yes'          => 'Yes, Please.',
            'no'           => 'No, Thank you.'
          ),
          'default_option' => 'Select an option',
          'help'           => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'             => 'unique_select_3',
          'type'           => 'select',
          'title'          => 'Select with Help',
          'options'        => array(
            'green'        => 'Green',
            'red'          => 'Red',
            'blue'         => 'Blue',
            'yellow'       => 'Yellow',
            'black'        => 'Black',
          ),
          'default_option' => 'Select a color',
          'info'           => 'Choose your favorite skin.',
        ),

        array(
          'id'             => 'unique_select_4',
          'type'           => 'select',
          'title'          => 'Select with Default Value',
          'options'        => array(
            'primary'      => 'Primary Option',
            'secondary'    => 'Secondry Option',
            'tertiary'     => 'Tertiary Option',
          ),
          'default'        => 'tertiary',
          'default_option' => 'Select an option',
        ),

        array(
          'id'         => 'unique_select_6',
          'type'       => 'select',
          'title'      => 'Select Field with Multi-select',
          'options'    => array(
            'bmw'      => 'BMW',
            'mercedes' => 'Mercedes',
            'jaguar'   => 'Jaguar',
            'opel'     => 'Opel',
            'golf'     => 'Golf',
            'ferrari'  => 'Ferrari',
            'subaru'   => 'Subaru',
            'seat'     => 'Seat',
          ),
          'attributes' => array(
            'multiple' => 'only-key',
            'style'    => 'width: 150px; height: 125px;'
          )
        ),

        array(
          'id'         => 'unique_select_7',
          'type'       => 'select',
          'title'      => 'Select Field with Multi-default',
          'options'    => array(
            'bmw'      => 'BMW',
            'mercedes' => 'Mercedes',
            'jaguar'   => 'Jaguar',
            'opel'     => 'Opel',
            'golf'     => 'Golf',
            'ferrari'  => 'Ferrari',
            'subaru'   => 'Subaru',
            'seat'     => 'Seat',
          ),
          'attributes' => array(
            'multiple' => 'only-key',
            'style'    => 'width: 150px; height: 125px;'
          ),
          'default'    => array( 'bmw', 'mercedes', 'opel' ),
          'info'       => 'Choose your favorite cars.',
        ),

        array(
          'id'             => 'unique_select_8',
          'type'           => 'select',
          'title'          => 'Select with Pages',
          'options'        => 'pages',
          'default_option' => 'Select a page'
        ),

        array(
          'id'             => 'unique_select_9',
          'type'           => 'select',
          'title'          => 'Select with Posts',
          'options'        => 'posts',
          'default_option' => 'Select a post'
        ),

        array(
          'id'             => 'unique_select_10',
          'type'           => 'select',
          'title'          => 'Select with Categories',
          'options'        => 'categories',
          'default_option' => 'Select a tag'
        ),

        array(
          'id'             => 'unique_select_10_1',
          'type'           => 'select',
          'title'          => 'Select with Menus',
          'options'        => 'menus',
          'default_option' => 'Select a menu'
        ),

        array(
          'id'         => 'unique_select_11',
          'type'       => 'select',
          'title'      => 'Select with Pages with Multi-Select',
          'options'    => 'pages',
          'attributes' => array(
            'multiple' => 'only-key',
            'style'    => 'width: 150px; height: 125px;'
          )
        ),

        array(
          'id'                 => 'unique_select_12',
          'type'               => 'select',
          'title'              => 'Select with Chosen',
          'options'            => array(
            'bmw'              => 'BMW',
            'mercedes'         => 'Mercedes',
            'jaguar'           => 'Jaguar',
            'opel'             => 'Opel',
            'golf'             => 'Golf',
            'ferrari'          => 'Ferrari',
            'subaru'           => 'Subaru',
            'seat'             => 'Seat',
          ),
          'class'              => 'chosen',
          'default_option'     => 'Select your car',
        ),

        array(
          'id'                 => 'unique_select_13',
          'type'               => 'select',
          'title'              => 'Select with Chosen Multi-Select',
          'options'            => array(
            'bmw'              => 'BMW',
            'mercedes'         => 'Mercedes',
            'jaguar'           => 'Jaguar',
            'opel'             => 'Opel',
            'golf'             => 'Golf',
            'ferrari'          => 'Ferrari',
            'subaru'           => 'Subaru',
            'seat'             => 'Seat',
          ),
          'class'              => 'chosen',
          'attributes'         => array(
            'data-placeholder' => 'Select your favrorite cars',
            'multiple'         => 'only-key',
            'style'            => 'width: 200px;'
          ),
        ),

        array(
          'id'             => 'unique_select_14',
          'type'           => 'select',
          'title'          => 'Select with Chosen with Pages',
          'options'        => 'pages',
          'class'          => 'chosen',
          'default_option' => 'Select a page'
        ),

        array(
          'id'                 => 'unique_select_15',
          'type'               => 'select',
          'title'              => 'Select with Chosen with Posts Multi-Select',
          'options'            => 'posts',
          'class'              => 'chosen',
          'attributes'         => array(
            'data-placeholder' => 'Select your favrorite posts',
            'multiple'         => 'only-key',
            'style'            => 'width: 200px;'
          ),
          'info'               => 'and much more select options for you!',
        ),

      ),
    ), // end: select options


    // -----------------------------
    // begin: switcher options     -
    // -----------------------------
    array(
      'name'      => 'switcher_options',
      'title'     => 'Switcher',
      'icon'      => 'fa fa-toggle-on',
      'fields'    => array(

        array(
          'id'    => 'unique_switcher_1',
          'type'  => 'switcher',
          'title' => 'Simple Switcher',
        ),

        array(
          'id'    => 'unique_switcher_2',
          'type'  => 'switcher',
          'title' => 'Switcher Field with Label',
          'label' => 'Yes, Please do it.',
        ),

        array(
          'id'    => 'unique_switcher_3',
          'type'  => 'switcher',
          'title' => 'Switcher Field with Help',
          'help'  => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_switcher_4',
          'type'    => 'switcher',
          'title'   => 'Switcher Field with Default',
          'default' => true,
        ),

      ),
    ), // end: switcher options


    // -----------------------------
    // begin: number options       -
    // -----------------------------
    array(
      'name'        => 'number_options',
      'title'       => 'Number',
      'icon'        => 'fa fa-check',
      'fields'      => array(

        array(
          'id'      => 'unique_number_1',
          'type'    => 'number',
          'title'   => 'Simple Number',
        ),

        array(
          'id'      => 'unique_number_2',
          'type'    => 'number',
          'title'   => 'Number Field with Description',
          'desc'    => 'Lets write some description for this number field.',
        ),

        array(
          'id'      => 'unique_number_3',
          'type'    => 'number',
          'title'   => 'Number Field with Help',
          'help'    => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_number_4',
          'type'    => 'number',
          'title'   => 'Number Field with Default',
          'default' => '10',
        ),

        array(
          'id'            => 'unique_number_5',
          'type'          => 'number',
          'title'         => 'Number Field with Placeholder',
          'attributes'    => array(
            'placeholder' => '25'
          )
        ),

        array(
          'id'      => 'unique_number_6',
          'type'    => 'number',
          'title'   => 'Number Field with After-text',
          'after'   => ' <i class="cs-text-muted">(px)</i>',
        ),

      ),
    ), // end: number options

    // -----------------------------
    // begin: icon options       -
    // -----------------------------
    array(
      'name'        => 'icon_options',
      'title'       => 'Icons',
      'icon'        => 'fa fa-check',
      'fields'      => array(

        array(
          'id'      => 'unique_icon_1',
          'type'    => 'icon',
          'title'   => 'Simple Icon',
        ),

        array(
          'id'      => 'unique_icon_2',
          'type'    => 'icon',
          'title'   => 'Icon Field with Description',
          'desc'    => 'Lets write some description for this icon field.',
        ),

        array(
          'id'      => 'unique_icon_3',
          'type'    => 'icon',
          'title'   => 'Icon Field with Help',
          'help'    => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_icon_4',
          'type'    => 'icon',
          'title'   => 'Icon Field with Default',
          'default' => 'fa fa-check',
        ),

        array(
          'id'      => 'unique_icon_5',
          'type'    => 'icon',
          'title'   => 'Icon Field with After-text',
          'after'   => '<p class="cs-text-muted">Lets write some description for this icon field.</i>',
        ),

      ),
    ), // end: icon options


    // -----------------------------
    // begin: group options        -
    // -----------------------------
    array(
      'name'      => 'group_options',
      'title'     => 'Group',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'              => 'font_group',
          'type'            => 'group',
          'title'           => 'Font Group ',
          'button_title'    => 'Add New',
          'accordion_title' => 'Add New Font',
          'fields'          => array(

            array(
              'id'          => 'font_title',
              'type'        => 'text',
              'title'       => 'Font Title',
            ),

            array(
              'id'        => 'font_group_fonts',
              'type'      => 'typography',
              'title'     => 'Select Font',
              'default'   => array(
                'family'  => 'Open Sans',
                'font'    => 'google', // this is helper for output ( google, websafe, custom )
                // 'variant' => '800',
              ),
              'font' => 'custom',
              'variant'   => false,
            ),

            array(
              'id'                 => 'font_group_fontweight',
              'type'               => 'select',
              'title'              => 'Select with Chosen Multi-Select',
              'options'            => array(
                '100'              => '100',
                '200'         => '200',
                '300'           => '300',
                '400'             => '400',
                '500'             => '500',
                '600'          => '600',
                '700'           => '700',
                '800'             => '800',
              ),
              'class'              => 'chosen',
              'attributes'         => array(
                'data-placeholder' => 'Select font weights',
                'multiple'         => 'only-key',
                'style'            => 'width: 200px;'
              ),
            ),
          ),
        ),

        array(
          'id'              => 'unique_group_1',
          'type'            => 'group',
          'title'           => 'Group Field',
          'button_title'    => 'Add New',
          'accordion_title' => 'Add New Field',
          'fields'          => array(

            array(
              'id'          => 'unique_group_1_text',
              'type'        => 'text',
              'title'       => 'Text Field',
            ),

            array(
              'id'      => 'unique_group_1_color_picker',
              'type'    => 'color_picker',
              'title'   => 'Color Picker',
              'default' => '#dd3333',
            ),

            array(
              'id'        => 'unique_group_1_typography',
              'type'      => 'typography',
              'title'     => 'Typography with Default',
              'default'   => array(
                'family'  => 'Open Sans',
                'font'    => 'google', // this is helper for output ( google, websafe, custom )
                'variant' => '800',
              ),
            ),

            array(
              'id'          => 'unique_group_1_switcher',
              'type'        => 'switcher',
              'title'       => 'Switcher Field',
            ),

            array(
              'id'          => 'unique_group_1_textarea',
              'type'        => 'textarea',
              'title'       => 'Upload Field',
            ),

          )
        ),

        array(
          'id'              => 'unique_group_2',
          'type'            => 'group',
          'title'           => 'Group Field with Default',
          'button_title'    => 'Add New',
          'accordion_title' => 'Add New Field',
          'fields'          => array(

            array(
              'id'          => 'unique_group_2_text',
              'type'        => 'text',
              'title'       => 'Text Field',
            ),

            array(
              'id'          => 'unique_group_2_switcher',
              'type'        => 'switcher',
              'title'       => 'Switcher Field',
            ),

            array(
              'id'          => 'unique_group_2_textarea',
              'type'        => 'textarea',
              'title'       => 'Upload Field',
            ),

          ),
          'default'                     => array(
            array(
              'unique_group_2_text'     => 'Some text',
              'unique_group_2_switcher' => true,
              'unique_group_2_textarea' => 'Some content',
            ),
            array(
              'unique_group_2_text'     => 'Some text 2',
              'unique_group_2_switcher' => true,
              'unique_group_2_textarea' => 'Some content 2',
            ),
          )
        ),

        array(
          'id'              => 'unique_group_3',
          'type'            => 'group',
          'title'           => 'Group Field',
          'info'            => 'You can use any option field on group',
          'button_title'    => 'Add New Something',
          'accordion_title' => 'Adding New Thing',
          'fields'          => array(

            array(
              'id'          => 'unique_group_3_text',
              'type'        => 'upload',
              'title'       => 'Text Field',
            ),

          )
        ),

        array(
          'id'              => 'unique_group_4',
          'type'            => 'group',
          'title'           => 'Group Field',
          'desc'            => 'Accordion title using the ID of the field, for eg. "Text Field 2" using as accordion title here.',
          'button_title'    => 'Add New',
          'accordion_title' => 'unique_group_4_text_2',
          'fields'          => array(

            array(
              'id'          => 'unique_group_4_text_1',
              'type'        => 'text',
              'title'       => 'Text Field 1',
            ),

            array(
              'id'          => 'unique_group_4_text_2',
              'type'        => 'text',
              'title'       => 'Text Field 2',
            ),

            array(
              'id'          => 'unique_group_4_text_3',
              'type'        => 'text',
              'title'       => 'Text Field 3',
            ),

          )
        ),

      ),
    ), // end: group options


    // -----------------------------
    // begin: upload options       -
    // -----------------------------
    array(
      'name'      => 'upload_options',
      'title'     => 'Upload',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'      => 'unique_upload_1',
          'type'    => 'upload',
          'title'   => 'Simple Upload',
        ),

        array(
          'id'      => 'unique_upload_2',
          'type'    => 'upload',
          'title'   => 'Upload Field with Description',
          'desc'    => 'Lets write some description for this upload field.',
        ),

        array(
          'id'      => 'unique_upload_3',
          'type'    => 'upload',
          'title'   => 'Upload Field with Help',
          'help'    => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_upload_4',
          'type'    => 'upload',
          'title'   => 'Upload Field with Default',
          'default' => 'screenshot-1.png',
        ),

        array(
          'id'      => 'unique_upload_5',
          'type'    => 'upload',
          'title'   => 'Upload Field with After-text',
          'after'   => '<p class="cs-text-muted">You can use default value <strong>get_template_directory_uri()</strong>."/images/screenshot-1.png"</p>',
        ),

        array(
          'id'            => 'unique_upload_6',
          'type'          => 'upload',
          'title'         => 'Upload Field with Placeholder',
          'attributes'    => array(
            'placeholder' => 'http://'
          ),
        ),

        array(
          'id'             => 'unique_upload_7',
          'type'           => 'upload',
          'title'          => 'Upload Field with Custom Title',
          'settings'       => array(
            'button_title' => 'Upload Logo',
            'frame_title'  => 'Choose a image',
            'insert_title' => 'Use this image',
          ),
        ),

        array(
          'id'             => 'unique_upload_8',
          'type'           => 'upload',
          'title'          => 'Upload Field with Video',
          'settings'       => array(
            'upload_type'  => 'video',
            'button_title' => 'Upload Video',
            'frame_title'  => 'Choose a Video',
            'insert_title' => 'Use This Video',
          ),
        ),

      ),
    ), // end: upload options


    // -----------------------------
    // begin: background options   -
    // -----------------------------
    array(
      'name'      => 'background_options',
      'title'     => 'Background',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'    => 'unique_background_1',
          'type'  => 'background',
          'title' => 'Background',
        ),

        array(
          'id'    => 'unique_background_2',
          'type'  => 'background',
          'title' => 'Background Field with Description',
          'desc'  => 'Lets write some description for this background field.',
          'help'  => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'           => 'unique_background_3',
          'type'         => 'background',
          'title'        => 'Background Field with Default',
          'default'      => array(
            'image'      => 'something.png',
            'repeat'     => 'repeat-x',
            'position'   => 'center center',
            'attachment' => 'fixed',
            'color'      => '#ffbc00',
          ),
        ),

        array(
          'id'      => 'unique_background_4',
          'type'    => 'background',
          'title'   => 'Background Field with Description',
          'after'   => '<p class="cs-text-muted">Information: There is some description for option.</p> ',
          'default' => array(
            'color' => '#222',
          ),
        ),

      ),
    ), // end: background options


    // -----------------------------
    // begin: color picker options -
    // -----------------------------
    array(
      'name'      => 'color_picker_options',
      'title'     => 'Color Picker',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'      => 'unique_color_picker_1',
          'type'    => 'color_picker',
          'title'   => 'Color Picker',
          'default' => '#dd3333',
        ),

        array(
          'id'      => 'unique_color_picker_2',
          'type'    => 'color_picker',
          'title'   => 'Color Picker RGBA disabled',
          'rgba'    => false,
        ),

        array(
          'id'      => 'unique_color_picker_3',
          'type'    => 'color_picker',
          'title'   => 'Color Picker Field with Description',
          'desc'    => 'Lets write some description for this color picker field.',
        ),

        array(
          'id'      => 'unique_color_picker_4',
          'type'    => 'color_picker',
          'title'   => 'Color Picker Field with Help',
          'help'    => 'I am a Tooltip helper. This field important for something.',
        ),

        array(
          'id'      => 'unique_color_picker_5',
          'type'    => 'color_picker',
          'title'   => 'Color Picker Field with Default',
          'default' => 'rgba(0, 0, 255, 0.25)',
        ),

        array(
          'id'      => 'unique_color_picker_6',
          'type'    => 'color_picker',
          'title'   => 'Color Picker Field with Default',
          'after'   => '<p class="cs-text-muted">Information: There is some description for option.</p> ',
          'default' => 'rgba(0, 255, 0, 0.75)',
        ),

      ),
    ), // end: color picker options


    // -----------------------------
    // begin: image select options -
    // -----------------------------
    array(
      'name'      => 'image_select_options',
      'title'     => 'Image Select',
      'icon'      => 'fa fa-check',
      'fields'    => array(

        array(
          'id'           => 'unique_image_select_1',
          'type'         => 'image_select',
          'title'        => 'Image Select (Checkbox)',
          'options'      => array(
            'value-1'    => 'http://codestarframework.com/assets/images/placeholder/150x125-2ecc71.gif',
            'value-2'    => 'http://codestarframework.com/assets/images/placeholder/150x125-e74c3c.gif',
            'value-3'    => 'http://codestarframework.com/assets/images/placeholder/150x125-ffbc00.gif',
            'value-4'    => 'http://codestarframework.com/assets/images/placeholder/150x125-3498db.gif',
          ),
        ),

        array(
          'id'           => 'unique_image_select_2',
          'type'         => 'image_select',
          'title'        => 'Image Select (Checkbox) with Default',
          'options'      => array(
            'value-1'    => 'http://codestarframework.com/assets/images/placeholder/150x125-ffbc00.gif',
            'value-2'    => 'http://codestarframework.com/assets/images/placeholder/150x125-3498db.gif',
            'value-3'    => 'http://codestarframework.com/assets/images/placeholder/150x125-e74c3c.gif',
            'value-4'    => 'http://codestarframework.com/assets/images/placeholder/150x125-2ecc71.gif',
            'value-5'    => 'http://codestarframework.com/assets/images/placeholder/150x125-555555.gif',
          ),
          'default'      => 'value-2'
        ),

        array(
          'id'           => 'unique_image_select_3',
          'type'         => 'image_select',
          'title'        => 'Image Select (Radio) with Default',
          'options'      => array(
            'value-1'    => 'http://codestarframework.com/assets/images/placeholder/150x125-2ecc71.gif',
            'value-2'    => 'http://codestarframework.com/assets/images/placeholder/150x125-e74c3c.gif',
            'value-3'    => 'http://codestarframework.com/assets/images/placeholder/150x125-ffbc00.gif',
            'value-4'    => 'http://codestarframework.com/assets/images/placeholder/150x125-3498db.gif',
          ),
          'radio'        => true,
          'default'      => 'value-3'
        ),

        array(
          'id'           => 'unique_image_select_4',
          'type'         => 'image_select',
          'title'        => 'Image Select (Radio) with Default',
          'options'      => array(
            'value-1'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-2'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-3'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-4'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-5'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-6'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-7'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-8'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
          ),
          'radio'        => true,
          'default'      => 'value-2'
        ),

        array(
          'id'           => 'unique_image_select_5',
          'type'         => 'image_select',
          'title'        => 'Image Select with Multi Select',
          'options'      => array(
            'value-1'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-2'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-3'    => 'http://codestarframework.com/assets/images/placeholder/80x80-e74c3c.gif',
            'value-4'    => 'http://codestarframework.com/assets/images/placeholder/80x80-ffbc00.gif',
            'value-5'    => 'http://codestarframework.com/assets/images/placeholder/80x80-3498db.gif',
            'value-6'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2ecc71.gif',
            'value-7'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
            'value-8'    => 'http://codestarframework.com/assets/images/placeholder/80x80-2c3e50.gif',
          ),
          'multi_select' => true,
          'default'      => array( 'value-3', 'value-4', 'value-5', 'value-6' )
        ),

      ),
    ), // end: image select options


    // -----------------------------
    // begin: typography options   -
    // -----------------------------
    array(
      'name'          => 'typography_options',
      'title'         => 'Typography',
      'icon'          => 'fa fa-check',
      'fields'        => array(

        array(
          'id'        => 'unique_typography_1',
          'type'      => 'typography',
          'title'     => 'Typography with Default',
          'default'   => array(
            'family'  => 'Open Sans',
            'font'    => 'google', // this is helper for output ( google, websafe, custom )
            'variant' => '800',
          ),
        ),

        array(
          'id'        => 'unique_typography_2',
          'type'      => 'typography',
          'title'     => 'Typography without Chosen',
          'default'   => array(
            'family'  => 'Ubuntu',
            'font'    => 'google',
          ),
          'chosen'    => false,
        ),

        array(
          'id'        => 'unique_typography_3',
          'type'      => 'typography',
          'title'     => 'Typography without Chosen/Variant',
          'default'   => array(
            'family'  => 'Arial',
            'font'    => 'websafe',
          ),
          'variant'   => false,
          'chosen'    => false,
        ),

      ),
    ), // end: typography options


    // -----------------------------
    // begin: new fields options   -
    // -----------------------------
    array(
      'name'         => 'wysiwyg_options',
      'title'        => 'Wysiwyg',
      'icon'         => 'fa fa-check',
      'fields'       => array(

        array(
          'id'       => 'wysiwyg_1',
          'type'     => 'wysiwyg',
          'title'    => 'Wysiwyg',
        ),

        array(
          'id'       => 'wysiwyg_2',
          'type'     => 'wysiwyg',
          'title'    => 'Wysiwyg with Custom Settings',
          'settings' => array(
            'textarea_rows' => 5,
            'tinymce'       => false,
            'media_buttons' => false,
          )
        ),


      ),
    ), // end: new fields options


    // -----------------------------
    // begin: image options        -
    // -----------------------------
    array(
      'name'          => 'image_options',
      'title'         => 'Image',
      'icon'          => 'fa fa-check',
      'fields'        => array(

        array(
          'id'        => 'image_1',
          'type'      => 'image',
          'title'     => 'Image',
        ),

        array(
          'id'        => 'image_2',
          'type'      => 'image',
          'title'     => 'Image with After Text',
          'desc'      => 'Lets write some description for this image field.',
          'help'      => 'This option field is useful. You will love it!',
        ),

        array(
          'id'        => 'image_3',
          'type'      => 'image',
          'title'     => 'Image with Custom Title',
          'add_title' => 'Add Logo',
        ),

      ),
    ), // end: image options


    // -----------------------------
    // begin: gallery options      -
    // -----------------------------
    array(
      'name'            => 'gallery_options',
      'title'           => 'Gallery',
      'icon'            => 'fa fa-check',
      'fields'          => array(

        array(
          'id'          => 'gallery_1',
          'type'        => 'gallery',
          'title'       => 'Gallery',
        ),

        array(
          'id'          => 'gallery_2',
          'type'        => 'gallery',
          'title'       => 'Gallery with Custom Title',
          'add_title'   => 'Add Images',
          'edit_title'  => 'Edit Images',
          'clear_title' => 'Remove Images',
        ),

        array(
          'id'          => 'gallery_3',
          'type'        => 'gallery',
          'title'       => 'Gallery with Custom Title',
          'desc'        => 'Lets write some description for this image field.',
          'help'        => 'This option field is useful. You will love it!',
          'add_title'   => 'Add Image(s)',
          'edit_title'  => 'Edit Image(s)',
          'clear_title' => 'Clear Image(s)',
        ),

      ),
    ), // end: gallery options


    // -----------------------------
    // begin: sorter options       -
    // -----------------------------
    array(
      'name'     => 'sorter_options',
      'title'    => 'Sorter',
      'icon'     => 'fa fa-check',
      'fields'   => array(

        array(
          'id'             => 'sorter_1',
          'type'           => 'sorter',
          'title'          => 'Sorter',
          'default'        => array(
            'enabled'      => array(
              'bmw'        => 'BMW',
              'mercedes'   => 'Mercedes',
              'volkswagen' => 'Volkswagen',
            ),
            'disabled'     => array(
              'ferrari'    => 'Ferrari',
              'mustang'    => 'Mustang',
            ),
          ),
        ),

        array(
          'id'             => 'sorter_2',
          'type'           => 'sorter',
          'title'          => 'Sorter',
          'default'        => array(
            'enabled'      => array(
              'blue'       => 'Blue',
              'green'      => 'Green',
              'red'        => 'Red',
              'yellow'     => 'Yellow',
              'orange'     => 'Orange',
              'ocean'      => 'Ocean',
            ),
            'disabled'     => array(
              'black'      => 'Black',
              'white'      => 'White',
            ),
          ),
          'enabled_title'  => 'Active Colors',
          'disabled_title' => 'Deactive Colors',
        ),
      ),

    ), // end: sorter options


    // -----------------------------
    // begin: sorter options       -
    // -----------------------------
    array(
      'name'     => 'fieldset_options',
      'title'    => 'Fieldset',
      'icon'     => 'fa fa-check',
      'fields'   => array(

        array(
          'id'        => 'fieldset_1',
          'type'      => 'fieldset',
          'title'     => 'Fieldset Field',
          'fields'    => array(

            array(
              'id'    => 'fieldset_1_text',
              'type'  => 'text',
              'title' => 'Text Field',
            ),

            array(
              'id'    => 'fieldset_1_upload',
              'type'  => 'upload',
              'title' => 'Upload Field',
            ),

            array(
              'id'    => 'fieldset_1_textarea',
              'type'  => 'textarea',
              'title' => 'Textarea Field',
            ),

          ),
        ),

        array(
          'id'        => 'fieldset_2',
          'type'      => 'fieldset',
          'title'     => 'Fieldset Field with Default',
          'fields'    => array(

            array(
              'type'    => 'subheading',
              'content' => 'Title of Fieldset',
            ),

            array(
              'id'      => 'fieldset_2_text',
              'type'    => 'text',
              'title'   => 'Text Field',
            ),

            array(
              'id'      => 'fieldset_2_checkbox',
              'type'    => 'checkbox',
              'title'   => 'Checkbox Field',
              'label'   => 'Are you sure?',
            ),

            array(
              'id'      => 'fieldset_2_textarea',
              'type'    => 'textarea',
              'title'   => 'Upload Field',
            ),

          ),
          'default'   => array(
            'fieldset_2_text'     => 'Hello',
            'fieldset_2_checkbox' => true,
            'fieldset_2_textarea' => 'Do stuff',
          )
        ),

      ),
    ), // end: sorter options


    // -----------------------------
    // begin: others options       -
    // -----------------------------
    array(
      'name'        => 'others_options',
      'title'       => 'Others',
      'icon'        => 'fa fa-check',
      'fields'      => array(

        array(
          'type'    => 'heading',
          'content' => 'Heading',
        ),

        array(
          'id'      => 'unique_others_text_1',
          'type'    => 'text',
          'title'   => 'Others Text Field 1',
        ),

        array(
          'id'      => 'unique_others_text_2',
          'type'    => 'text',
          'title'   => 'Others Text Field 2',
        ),

        array(
          'type'    => 'subheading',
          'content' => 'Sub Heading',
        ),

        array(
          'id'      => 'unique_others_text_3',
          'type'    => 'text',
          'title'   => 'Others Text Field 3',
        ),

        array(
          'type'    => 'notice',
          'class'   => 'success',
          'content' => 'Notice Success: Lorem Ipsum, a random Lipsum generator.',
        ),

        array(
          'id'      => 'unique_others_text_4',
          'type'    => 'text',
          'title'   => 'Others Text Field 4',
        ),

        array(
          'type'    => 'notice',
          'class'   => 'info',
          'content' => 'Notice Info: Lorem Ipsum, a random Lipsum generator.',
        ),

        array(
          'id'      => 'unique_others_text_5',
          'type'    => 'text',
          'title'   => 'Others Text Field 5',
        ),

        array(
          'type'    => 'notice',
          'class'   => 'warning',
          'content' => 'Notice Warning: Lorem Ipsum, a random Lipsum generator.',
        ),

        array(
          'id'      => 'unique_others_text_6',
          'type'    => 'text',
          'title'   => 'Others Text Field 6',
        ),

        array(
          'type'    => 'notice',
          'class'   => 'danger',
          'content' => 'Notice Danger: Lorem Ipsum, a random Lipsum generator.',
        ),

        array(
          'id'      => 'unique_others_text_7',
          'type'    => 'text',
          'title'   => 'Others Text Field 7',
        ),

        array(
          'id'      => 'unique_others_text_8',
          'type'    => 'text',
          'title'   => 'Others Text Field 8',
        ),

        array(
          'type'    => 'content',
          'content' => 'Content Field: It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        ),

        array(
          'id'      => 'unique_others_text_9',
          'type'    => 'text',
          'title'   => 'Others Text Field 9',
          'after'   => '<p class="cs-text-warning">This field using debug=true</p>',
          'debug'   => true,
        ),


      ),
    ), // end: other options

  )
);

// ------------------------------
// a seperator                  -
// ------------------------------
$options[] = array(
  'name'   => 'seperator_1',
  'title'  => 'A Seperator',
  'icon'   => 'fa fa-bookmark'
);

// ------------------------------
// backup                       -
// ------------------------------
$options[]   = array(
  'name'     => 'backup_section',
  'title'    => 'Backup',
  'icon'     => 'fa fa-shield',
  'fields'   => array(

    array(
      'type'    => 'notice',
      'class'   => 'warning',
      'content' => 'You can save your current options. Download a Backup and Import.',
    ),

    array(
      'type'    => 'backup',
    ),

  )
);

// ------------------------------
// validate                     -
// ------------------------------
$options[]   = array(
  'name'     => 'validate_section',
  'title'    => 'Validate',
  'icon'     => 'fa fa-check-circle',
  'fields'   => array(

    array(
      'id'       => 'validate_text_1',
      'type'     => 'text',
      'title'    => 'Email Text',
      'desc'     => 'This text field only accepted email address.',
      'default'  => 'info@domain.com',
      'validate' => 'email',
    ),

    array(
      'id'       => 'numeric_text_1',
      'type'     => 'text',
      'title'    => 'Numeric Text',
      'desc'     => 'This text field only accepted numbers',
      'default'  => '123456',
      'validate' => 'numeric',
    ),

    array(
      'id'       => 'required_text_1',
      'type'     => 'text',
      'title'    => 'Requried Text',
      'after'    => ' <small class="cs-text-warning">( * required )</small>',
      'default'  => 'lorem ipsum',
      'validate' => 'required',
    ),

    array(
      'type'    => 'notice',
      'class'   => 'info',
      'content' => 'Also you can add your own validate from <strong>themename/cs-framework/functions/validate.php</strong>',
    ),

  )
);

// ------------------------------
// sanitize                     -
// ------------------------------
// $options[]   = array(
//   'name'     => 'sanitize_section',
//   'title'    => 'Sanitize',
//   'icon'     => 'fa fa-repeat',
//   'fields'   => array(
//
//     array(
//       'id'       => 'sanitie_text_1',
//       'type'     => 'text',
//       'title'    => 'Sanitized Text',
//       'after'    => '<p class="cs-text-muted">This text field sanitized already, without any settings. we are using wordpress core.<br /> for eg. try too add <strong>&lt;p></strong> html tag</p>',
//     ),
//
//     array(
//       'id'       => 'sanitie_text_2',
//       'type'     => 'text',
//       'title'    => 'Disable Sanitized Text',
//       'after'    => '<p class="cs-text-muted">Disabled sanitize for this field (sanitize=false). try too add <strong>&lt;p></strong> html tag so, you can write anything</p>',
//       'sanitize' => false,
//     ),
//
//     array(
//       'id'       => 'sanitie_textarea_1',
//       'type'     => 'textarea',
//       'title'    => 'Sanitized Textarea',
//       'after'    => '<p class="cs-text-muted">This textarea field sanitized already, without any settings. we are using wordpress core.<br /> just allowing this tags wp core $allowedposttags</p>',
//     ),
//
//     array(
//       'id'       => 'sanitie_textarea_2',
//       'type'     => 'textarea',
//       'title'    => 'Disabled Sanitized Textarea',
//       'after'    => '<p class="cs-text-muted">Disabled sanitize for this field (sanitize=false). you can write anything</p>',
//       'sanitize' => false,
//     ),
//
//     array(
//       'type'    => 'notice',
//       'class'   => 'info',
//       'content' => 'Custom Sanitize, Also you can add your own validate from <strong>themename/cs-framework/functions/sanitize.php</strong>',
//     ),
//
//     array(
//       'id'       => 'sanitie_text_1',
//       'type'     => 'text',
//       'title'    => 'Custom Sanitize Text',
//       'after'    => '<p class="cs-text-muted">This text field sanitized as slug title (sanitize="title")</p>',
//       'sanitize' => 'title',
//     ),
//
//   )
// );

// ----------------------------------------
// dependencies                           -
// ----------------------------------------
$options[]           = array(
  'name'             => 'dependencies',
  'title'            => 'Dependencies',
  'icon'             => 'fa fa-code-fork',
  'fields'           => array(

    // ------------------------------------
    // Basic Dependencies
    // ------------------------------------
    array(
      'type'         => 'subheading',
      'content'      => 'Basic Dependencies',
    ),

    // ------------------------------------
    array(
      'id'           => 'dep_1',
      'type'         => 'text',
      'title'        => 'If text <u>not be empty</u>',
    ),

    array(
      'id'           => 'dummy_1',
      'type'         => 'notice',
      'class'        => 'info',
      'content'      => 'Done, this text option have something.',
      'dependency'   => array( 'dep_1', '!=', '' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_2',
      'type'         => 'switcher',
      'title'        => 'If switcher mode <u>ON</u>',
    ),

    array(
      'id'           => 'dummy_2',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Woow! Switcher is ON',
      'dependency'   => array( 'dep_2', '==', 'true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_3',
      'type'         => 'select',
      'title'        => 'Select color <u>black or white</u>',
      'options'      => array(
        'blue'       => 'Blue',
        'yellow'     => 'Yellow',
        'green'      => 'Green',
        'black'      => 'Black',
        'white'      => 'White',
      ),
    ),

    array(
      'id'           => 'dummy_3',
      'type'         => 'notice',
      'class'        => 'danger',
      'content'      => 'Well done!',
      'dependency'   => array( 'dep_3', 'any', 'black,white' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_4',
      'type'         => 'radio',
      'title'        => 'If set <u>No, Thanks</u>',
      'options'      => array(
        'yes'        => 'Yes, Please',
        'no'         => 'No, Thanks',
        'not-sure'   => 'I am not sure!',
      ),
      'default'      => 'yes'
    ),

    array(
      'id'           => 'dummy_4',
      'type'         => 'notice',
      'class'        => 'info',
      'content'      => 'Uh why?!!!',
      'dependency'   => array( 'dep_4_no', '==', 'true' ),
      //'dependency' => array( '{ID}_{VALUE}', '==', 'true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_5',
      'type'         => 'checkbox',
      'title'        => 'If checked <u>danger</u>',
      'options'      => array(
        'success'    => 'Success',
        'danger'     => 'Danger',
        'info'       => 'Info',
        'warning'    => 'Warning',
      ),
    ),

    array(
      'id'           => 'dummy_5',
      'type'         => 'notice',
      'class'        => 'danger',
      'content'      => 'Danger!',
      'dependency'   => array( 'dep_5_danger', '==', 'true' ),
      //'dependency' => array( '{ID}_{VALUE}', '==', 'true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_6',
      'type'         => 'image_select',
      'title'        => 'If check <u>Blue box</u> (checkbox)',
      'options'      => array(
        'green'      => 'http://codestarframework.com/assets/images/placeholder/100x80-2ecc71.gif',
        'red'        => 'http://codestarframework.com/assets/images/placeholder/100x80-e74c3c.gif',
        'yellow'     => 'http://codestarframework.com/assets/images/placeholder/100x80-ffbc00.gif',
        'blue'       => 'http://codestarframework.com/assets/images/placeholder/100x80-3498db.gif',
        'gray'       => 'http://codestarframework.com/assets/images/placeholder/100x80-555555.gif',
      ),
      'info'         => 'Image select field input="checkbox" model. in checkbox model unselected available.',
    ),

    array(
      'id'           => 'dummy_6',
      'type'         => 'notice',
      'class'        => 'info',
      'content'      => 'Blue box selected!',
      'dependency'   => array( 'dep_6_blue', '==', 'true' ),
      //'dependency' => array( '{ID}_{VALUE}', '==', 'true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_6_alt',
      'type'         => 'image_select',
      'title'        => 'If check <u>Green box or Blue box</u> (checkbox)',
      'options'      => array(
        'green'      => 'http://codestarframework.com/assets/images/placeholder/100x80-2ecc71.gif',
        'red'        => 'http://codestarframework.com/assets/images/placeholder/100x80-e74c3c.gif',
        'yellow'     => 'http://codestarframework.com/assets/images/placeholder/100x80-ffbc00.gif',
        'blue'       => 'http://codestarframework.com/assets/images/placeholder/100x80-3498db.gif',
        'gray'       => 'http://codestarframework.com/assets/images/placeholder/100x80-555555.gif',
      ),
      'info'         => 'Multipel Image select field input="checkbox" model. in checkbox model unselected available.',
      'default'      => 'gray',
      'attributes'   => array(
        'data-depend-id' => 'dep_6_alt',
      ),
    ),

    array(
      'id'           => 'dummy_6_alt',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Green or Blue box selected!',
      'dependency'   => array( 'dep_6_alt', 'any', 'green,blue' ),
      //'dependency' => array( 'data-depend-id', 'any', 'value,value' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_7',
      'type'         => 'image_select',
      'title'        => 'If check <u>Green box</u> (radio)',
      'options'      => array(
        'green'      => 'http://codestarframework.com/assets/images/placeholder/100x80-2ecc71.gif',
        'red'        => 'http://codestarframework.com/assets/images/placeholder/100x80-e74c3c.gif',
        'yellow'     => 'http://codestarframework.com/assets/images/placeholder/100x80-ffbc00.gif',
        'blue'       => 'http://codestarframework.com/assets/images/placeholder/100x80-3498db.gif',
        'gray'       => 'http://codestarframework.com/assets/images/placeholder/100x80-555555.gif',
      ),
      'info'         => 'Image select field input="radio" model. in radio model unselected unavailable.',
      'radio'        => true,
      'default'      => 'gray',
    ),

    array(
      'id'           => 'dummy_7',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Green box selected!',
      'dependency'   => array( 'dep_7_green', '==', 'true' ),
      //'dependency' => array( '{ID}_{VALUE}', '==', 'true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_7_alt',
      'type'         => 'image_select',
      'title'        => 'If check <u>Green box or Blue box</u> (radio)',
      'options'      => array(
        'green'      => 'http://codestarframework.com/assets/images/placeholder/100x80-2ecc71.gif',
        'red'        => 'http://codestarframework.com/assets/images/placeholder/100x80-e74c3c.gif',
        'yellow'     => 'http://codestarframework.com/assets/images/placeholder/100x80-ffbc00.gif',
        'blue'       => 'http://codestarframework.com/assets/images/placeholder/100x80-3498db.gif',
        'gray'       => 'http://codestarframework.com/assets/images/placeholder/100x80-555555.gif',
      ),
      'info'         => 'Multipel Image select field input="radio" model. in radio model unselected unavailable.',
      'radio'        => true,
      'default'      => 'gray',
      'attributes'   => array(
        'data-depend-id' => 'dep_7_alt',
      ),
    ),

    array(
      'id'           => 'dummy_7_alt',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Green or Blue box selected!',
      'dependency'   => array( 'dep_7_alt', 'any', 'green,blue' ),
      //'dependency' => array( 'data-depend-id', 'any', 'value,value' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_8',
      'type'         => 'image',
      'title'        => 'Add a image',
    ),

    array(
      'id'           => 'dummy_8',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Added a image!',
      'dependency'   => array( 'dep_8', '!=', '' ),
    ),
    // ------------------------------------

    // ------------------------------------
    array(
      'id'           => 'dep_9',
      'type'         => 'icon',
      'title'        => 'Add a icon',
    ),

    array(
      'id'           => 'dummy_9',
      'type'         => 'notice',
      'class'        => 'success',
      'content'      => 'Added a icon!',
      'dependency'   => array( 'dep_9', '!=', '' ),
    ),
    // ------------------------------------

    // ------------------------------------
    // Advanced Dependencies
    // ------------------------------------
    array(
      'type'         => 'subheading',
      'content'      => 'Advanced Dependencies',
    ),

    // ------------------------------------
    array(
      'id'           => 'dep_10',
      'type'         => 'text',
      'title'        => 'If text string <u>hello</u>',
    ),

    array(
      'id'           => 'dep_11',
      'type'         => 'text',
      'title'        => 'and this text string <u>world</u>',
    ),

    array(
      'id'           => 'dep_12',
      'type'         => 'checkbox',
      'title'        => 'and checkbox mode <u>checked</u>',
      'label'        => 'Check me!'
    ),

    array(
      'id'           => 'dummy_10',
      'type'         => 'notice',
      'class'        => 'info',
      'content'      => 'Done, Multiple Dependencies worked.',
      'dependency'   => array( 'dep_10|dep_11|dep_12', '==|==|==', 'hello|world|true' ),
    ),
    // ------------------------------------

    // ------------------------------------
    // Another Dependencies
    // ------------------------------------
    array(
      'type'         => 'subheading',
      'content'      => 'Another Dependencies',
    ),

    // ------------------------------------
    array(
      'id'           => 'dep_13',
      'type'         => 'select',
      'title'        => 'If color <u>black or white</u>',
      'options'      => array(
        'blue'       => 'Blue',
        'black'      => 'Black',
        'white'      => 'White',
      ),
    ),

    array(
      'id'           => 'dep_14',
      'type'         => 'select',
      'title'        => 'If size <u>middle</u>',
      'options'      => array(
        'small'      => 'Small',
        'middle'     => 'Middle',
        'large'      => 'Large',
        'xlage'      => 'XLarge',
      ),
    ),

    array(
      'id'           => 'dep_15',
      'type'         => 'select',
      'title'        => 'If text is <u>world</u>',
      'options'      => array(
        'hello'      => 'Hello',
        'world'      => 'World',
      ),
      'dependency'   => array( 'dep_13|dep_14', 'any|==', 'black,white|middle' ),
    ),

    array(
      'id'           => 'dummy_11',
      'type'         => 'notice',
      'class'        => 'info',
      'content'      => 'Well done, Correctly!',
      'dependency'   => array( 'dep_15', '==', 'world' ),
    ),
    // ------------------------------------

  ),
);

// ------------------------------
// a seperator                  -
// ------------------------------
// $options[] = array(
//   'name'   => 'seperator_2',
//   'title'  => 'Section Exnotions',
//   'icon'   => 'fa fa-cog'
// );

// ------------------------------
// normal section               -
// ------------------------------
// $options[]   = array(
//   'name'     => 'normal_section',
//   'title'    => 'Normal Section',
//   'icon'     => 'fa fa-minus',
//   'fields'   => array(
//
//     array(
//       'type'    => 'content',
//       'content' => 'This section is empty, add some options...',
//     ),
//
//   )
// );

// ------------------------------
// accordion sections           -
// ------------------------------
// $options[]   = array(
//   'name'     => 'accordion_section',
//   'title'    => 'Accordion Sections',
//   'icon'     => 'fa fa-bars',
//   'sections' => array(
//
//     // sub section 1
//     array(
//       'name'     => 'sub_section_1',
//       'title'    => 'Sub Sections 1',
//       'icon'     => 'fa fa-minus',
//       'fields'   => array(
//
//         array(
//           'type'    => 'content',
//           'content' => 'This section is empty, add some options...',
//         ),
//
//       )
//     ),
//
//     // sub section 2
//     array(
//       'name'     => 'sub_section_2',
//       'title'    => 'Sub Sections 2',
//       'icon'     => 'fa fa-minus',
//       'fields'   => array(
//
//         array(
//           'type'    => 'content',
//           'content' => 'This section is empty, add some options...',
//         ),
//
//       )
//     ),
//
//     // sub section 3
//     array(
//       'name'     => 'sub_section_3',
//       'title'    => 'Sub Sections 3',
//       'icon'     => 'fa fa-minus',
//       'fields'   => array(
//
//         array(
//           'type'    => 'content',
//           'content' => 'This section is empty, add some options...',
//         ),
//
//       )
//     ),
//
//   ),
// );

// ------------------------------
// a seperator                  -
// ------------------------------
// $options[] = array(
//   'name'   => 'seperator_3',
//   'title'  => 'Others',
//   'icon'   => 'fa fa-gift'
// );

// ------------------------------
// license                      -
// ------------------------------
$options[]   = array(
  'name'     => 'license_section',
  'title'    => 'License',
  'icon'     => 'fa fa-info-circle',
  'fields'   => array(

    array(
      'type'    => 'heading',
      'content' => '100% GPL License, Yes it is free!'
    ),
    array(
      'type'    => 'content',
      'content' => 'Codestar Framework is <strong>free</strong> to use both personal and commercial. If you used commercial, <strong>please credit</strong>. Read more about <a href="http://www.gnu.org/licenses/gpl-2.0.txt" target="_blank">GNU License</a>',
    ),

  )
);

CSFramework::instance( $settings, $options );
