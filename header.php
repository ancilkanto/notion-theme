<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="<?php bloginfo('name'); ?> <?php wp_title("|",true); ?>">
<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php endif; ?>

<?php
    wp_head();
?>

</head>

<body <?php body_class();?> >

    <?php
    $home_page = esc_url(home_url( '/' ));
    $inline_styles = $preloader_img = $loader_effect = $preloader = $preloader_overlay = $preloader_opening = $preloader_svg = $menu_align = $disable_icons = $header_bg_color = '';
    if(notion_get_option('notion_preloader_active')){

        if( notion_get_option('notion_preloader_style') === 'preloader_style_1' || notion_get_option('notion_preloader_style') === 'preloader_style_2' ){
            $inline_styles .= '#preloader{background-color: '.esc_html(notion_get_option('notion_preloader_bg')).'}';
            $inline_styles .= '#status{background-color: '.esc_html(notion_get_option('notion_preloader_bg')).'}';
        }
        else{
            $inline_styles .= '#preloader svg path{fill: '.esc_html(notion_get_option('notion_preloader_bg')).'}';
        }

        if(notion_get_option('notion_preloader_image') !== null && notion_get_option('notion_preloader_image') !== ''){
            $preloader_img = '<div id="status" style="background-image: url('.esc_url(wp_get_attachment_url( notion_get_option('notion_preloader_image') )).')"></div>';
        }

        switch(notion_get_option('notion_preloader_style')){
            case 'preloader_style_1':
                $loader_effect = '1';
                break;
            case 'preloader_style_2':
                $loader_effect = '2';
                break;
            case 'preloader_style_3':
                $loader_effect = '3';
                $preloader_overlay = 'preload-overlay';
                $preloader_opening = 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z';
                $preloader_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="xMidYMid slice">
                    <path d="M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z"/>
                </svg>';
                break;
            case 'preloader_style_4':
                $loader_effect = '4';
                $preloader_overlay = 'preload-overlay';
                $preloader_opening = 'M 0,0 0,60 80,60 80,0 Z M 40,30 40,30 40,30 40,30 Z';
                $preloader_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
                    <path d="M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z"/>
                </svg>';
                break;
            case 'preloader_style_5':
                $loader_effect = '5';
                $preloader_overlay = 'preload-overlay';
                $preloader_opening = "M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 29.96875 C 40.01804 29.96875 40.03125 29.98196 40.03125 30 C 40.03125 30.01804 40.01804 30.03125 40 30.03125 C 39.98196 30.03125 39.96875 30.01804 39.96875 30 C 39.96875 29.98196 39.98196 29.96875 40 29.96875 Z";
                $preloader_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="xMidYMid slice">
                    <path d="M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 -25.6875 C 70.750092 -25.6875 95.6875 -0.7500919 95.6875 30 C 95.6875 60.750092 70.750092 85.6875 40 85.6875 C 9.2499078 85.6875 -15.6875 60.750092 -15.6875 30 C -15.6875 -0.7500919 9.2499078 -25.6875 40 -25.6875 Z"/>
                </svg>';
                break;
            case 'preloader_style_6':
                $loader_effect = '6';
                $preloader_overlay = 'preload-overlay';
                $preloader_opening = 'M 0,0 80,-10 80,60 0,70 0,0" data-closing="M 0,-10 80,-20 80,-10 0,0 0,-10';
                $preloader_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
                    <path d="M 0,70 80,60 80,80 0,80 0,70"/>
                </svg>';
                break;
            case 'preloader_style_7':
                $loader_effect = '7';
                $preloader_overlay = 'preload-overlay';
                $preloader_opening = 'm 40,-80 190,0 -305,290 C -100,140 0,0 40,-80 z';
                $preloader_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
                    <path d="m 75,-80 155,0 0,225 C 90,85 100,30 75,-80 z"/>
                </svg>';
                break;

        }

        $preloader = '<div id="preloader" class="'.esc_attr($preloader_overlay).'" data-opening="'.esc_attr($preloader_opening).'" data-loader-effect="'.esc_attr($loader_effect).'" style="">'.$preloader_img.$preloader_svg.'</div>';

        echo $preloader;

    }

    if(notion_get_option('notion_inner_shadow') === true){
        if(notion_get_option('notion_inner_shadow_type') == 'shadow_dark'){
            $inner_shadow = 'outline-inner-shadow-dark';
        }
        else{
            $inner_shadow = 'outline-inner-shadow-light';
        }
    }

    if(notion_get_option('notion_site_layout') === 'site_outlined'){
        ?>
        <div class="page-outline" data-width="<?php echo esc_html__(notion_get_option('notion_outline_width')) ?>" data-color="<?php echo esc_html__(notion_get_option('notion_outline_color')) ?>">
            <div class="page-outline-top"></div>
            <div class="page-outline-right"></div>
            <div class="page-outline-bottom"></div>
            <div class="page-outline-left"></div>
            <div class="page-outline-top1 <?php echo esc_html__($inner_shadow); ?>"></div>
            <div class="page-outline-right1 <?php echo esc_html__($inner_shadow); ?>"></div>
            <div class="page-outline-bottom1 <?php echo esc_html__($inner_shadow); ?>"></div>
            <div class="page-outline-left1 <?php echo esc_html__($inner_shadow); ?>"></div>
        </div>
        <?php
    }


    if(notion_get_option('notion_logo_height') !== null && notion_get_option('notion_logo_height') !== ''){
        $logo_height = esc_attr(notion_get_option('notion_logo_height'));
    }
    else{
        $logo_height = '20px';
    }

    if(notion_get_option('notion_logo_light') !== null && notion_get_option('notion_logo_light') !== ''){
        $notion_logo_light = '<img class="svg-convert header-logo-light" src="'. esc_url(wp_get_attachment_url(notion_get_option('notion_logo_light'))) .'" style="height: '.$logo_height.';" alt=" '.esc_attr(get_bloginfo('name')).'">';
    } else{
        $notion_logo_light = '<h3 class="header-logo-light white font-size-05 font-uppercase font-weight-700 text-left">'.get_bloginfo('name').'</h3>';
    }

    if(notion_get_option('notion_logo_dark') !== null && notion_get_option('notion_logo_dark') !== ''){
        $notion_logo_dark = '<img class="svg-convert header-logo-dark" src="'. esc_url(wp_get_attachment_url(notion_get_option('notion_logo_dark'))) .'" style="height: '.$logo_height.';" alt=" '.esc_attr(get_bloginfo('name')).'">';
    } else{
        $notion_logo_dark = '<h3 class="header-logo-dark black font-size-05 font-uppercase font-weight-700 text-left">'.get_bloginfo('name').'</h3>';
    }


    $logo_block = '<div class="header-logo-wrap"><div class="logo-dark"><a class="svg-logo" href="'.$home_page.'">'.$notion_logo_dark.'</a></div><div class="logo-light"><a class="svg-logo" style="height: '.$logo_height.';" href="'.$home_page.'">'.$notion_logo_light.'</a></div></div>';

    $site_layout = notion_get_option('notion_site_layout');
    if($site_layout === 'site_fluid'){

    }
    elseif ($site_layout === 'site_boxed') {

    }
    else{

    }

    if(notion_get_option('notion_full_width_header')){

    }


    if(notion_get_option('notion_header_color_skin') === 'dark_style_header'){
        $header_bg_color = notion_get_option('notion_dark_skin_header_bg');
    }
    else{
        $header_bg_color = notion_get_option('notion_light_skin_header_bg');
    }



    // if($header_type === 'header_horizontal'){
    //
    // }

    $header_content_area_width = notion_get_option('notion_header_inner_width');
    if($header_content_area_width === 'header_content_width_container')
        $header_content_area_width = 'container';
    else
        $header_content_area_width = 'h-header-container-inner-spacer';

    $header_horizontal = notion_get_option('notion_header_style');
    $header_animation = notion_get_option('notion_header_animation');

    if($header_horizontal === 'header_standard'){
        switch(notion_get_option('notion_menu_align')){
            case 'menu_align_left':
                $menu_align = 'text-left';
                break;
            case 'menu_align_center':
                $menu_align = 'text-center';
                break;
            case 'menu_align_right':
                $menu_align = 'text-right';
                break;
        }
    }
    $disable_icons ;

        // notion_horizontal_header_position

    wp_enqueue_style('notion-style', get_template_directory_uri() . '/stylesheets/main.css', array() , 'all');
    if ($inline_styles !== '') wp_add_inline_style('notion-style', $inline_styles);
    ?>

    <div class="mobile-header" style="">

		<!-- Mobile Header Inner : starts -->
		<div class="mobile-header-inner" style="transform: translate(0px, 0px);">

			<!-- Mobile Header Container : starts -->
			<div class="mobile-header-container">
                <!-- Mobile Nav Button : starts -->
				<div class="header-content-block text-right">
                    <div class="header-logo-wrap">
    					<div class="logo-light">
    						<a href="#">
    							<img class="logo text-left img-responsive" src="images/logo-light.png" alt="logo" data-rjs="2">
    						</a>
    					</div>
    				</div>
                    <div class="mobile-menu-Container">

                    </div>
					<div class="mobile-nav-button-container text-right">
						<div class="mobile-nav-button"><span></span>
						</div>
					</div>
				</div>
				<!-- Mobile Nav Button : ends -->

			</div>
			<!-- Mobile Header Container : ends -->

		</div>
		<!-- Mobile Header Inner : ends -->

	</div>

    <section class="master-wrap-container">
        <section class="master-wrap" id="master-wrap">

            <?php
                if($header_horizontal === 'header_standard' || $header_horizontal === 'header_center' || $header_horizontal === 'header_split' || $header_horizontal === 'header_hamburger'){

                    if($header_animation === 'sticky_header')
                        $header_animation = 'sticky-header';
                    elseif($header_animation === 'slide_down_header')
                        $header_animation = 'slide-down-header';
                    elseif ($header_animation === 'slide_up_down_header')
                        $header_animation = 'slide-up-down-header';
                    else
                        $header_animation = '';
            ?>

            <!-- Header : starts -->
        	<header class="h-header h-header-spacer h-split-header dark-style-header trans-bg animate-header change-style sticky-header <?php echo esc_attr($header_bg_color .' '. $header_animation) ?>" style="top:<?php echo esc_attr(notion_get_option('notion_horizontal_header_position')) ?>">

        		<!-- Header Inner : starts -->
        		<div class="h-header-container h-header-container-spacer">

        			<!-- Header Container : starts -->
        			<div class="h-header-container-inner <?php esc_html_e($header_content_area_width) ?> ">

        				<!-- Logo : starts -->
                        <?php echo $logo_block?>
        				<!-- Logo : ends -->
                    <?php } ?>

                    <?php
                        if($header_horizontal === 'header_standard' || $header_horizontal === 'header_center'){
                    ?>
                        <div class="favored-menu <?php echo $menu_align . $disable_icons ?>">
                            <nav class="menu-container">
                                <?php
                                    wp_nav_menu( array(
                                        'menu'              => 'primary',
                                        'theme_location'    => 'primary',
                                        'container'         => '',
                                        'menu_class'        => 'menu',
                                        // 'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                                        // 'walker'            => new WP_Bootstrap_Navwalker())
                                        )
                                    );
                                ?>
                            </nav>
                        </div>
                    <?php } ?>
                        <?php if($header_horizontal === 'header_hamburger') { ?>
                            <div class="header-content-block text-right">
                                <div class="hamburger-nav-trigger">
                                    <div class="hamburger-bar"></div>
                                    <div class="hamburger-bar"></div>
                                    <div class="hamburger-bar"> </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </header>
                        <section class="full-height" style="background-color:#c3c3c3"></section>
        <section class="full-height" style="background-color:#c3c3c3"></section>
