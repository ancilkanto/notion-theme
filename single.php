<?php
get_header();
// $mach_options = mach_get_options('mach_wp');

if ( have_posts() ) :
  // Start the Loop.
  while ( have_posts() ) : the_post();





  $mach_new_title = 'post-id-'.get_the_ID();

  $left_sidebar_bg_img = get_post_meta(get_the_ID(),'_mach_post_lft_sidebar_bg_image',true);


  if($left_sidebar_bg_img == '')
    $left_sidebar_bg_img = get_template_directory_uri().'/images/default-page-tilte-bg.jpg';

  $post_icon = '';

  if(is_sticky())
    $post_icon = '<i class="post-icon ion-pin"></i>'.esc_html__('Sticky Post', 'mach');



  $header_bg_img = get_post_meta(get_the_ID(),'_mach_post_header_bg_image',true);


  if($header_bg_img == '')
    $header_bg_img = get_template_directory_uri().'/images/default-post-tilte-bg.jpg';
?>

<div class="extra-page-header fullwidth fullheight section-bgimg parallax-layer" data-sectionBgImg="<?php echo esc_url($header_bg_img); ?>">
  <div class="vertical-align">
    <div class="container">
      <div class="row">
        <article class="col-md-12">
          <div class="extra-main-heading text-center mach-single-post">
            <h1 class="white font2 uppercase bold-font"><?php echo get_the_title(); ?></h1>
            <h5 class="post-icon-wrap"><?php echo wp_kses($post_icon, array( 'i' => array( 'class' => array() )));  ?></h5>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>

<section id="<?php echo esc_attr($mach_new_title); ?>" <?php post_class('page section-fixed-header-wrap mach-page-section second-page white-bg'); ?> >
  <div class="fixed-header fullheight">

      <!-- SVG Section Starts -->
      <svg class="parent" xmlns="http://www.w3.org/2000/svg" version="1.1"  xmlns:xlink="http://www.w3.org/1999/xlink">

        <!-- Definition Section Of the SVG -->
        <defs>
          <clippath id="title-<?php echo esc_attr($mach_new_title); ?>">
            <text class="letter-text font1" y="57%"><?php echo get_the_time('d'); ?></text>
            <text class="letter-text-ie font1 hidden" x="50%" y="57%"><?php echo get_the_time('d'); ?></text>
          </clippath>
        </defs>
        <!-- The background Image for the svg font -->
        <image xlink:href="<?php echo esc_url($left_sidebar_bg_img); ?>" clip-path="url(#title-<?php echo esc_attr($mach_new_title); ?>)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
      </svg>
      <!-- SVG Section Ends -->

      <p class="header-text light-more-black font2"><?php echo get_the_time('M Y'); ?></p>

  </div>
  <!-- Fixed Header Section Ends -->
  <div class="fixed-aside-section white-bg">

    <div class="vertical-align main-aligner">
        <div class="content-section">
          <div class="container pad-top-half pad-bottom-half">
              <div class="row">
                  <article class="col-md-12 post-content-wrap">
                    <?php the_content();?>
                  </article>
              </div>
              <div class="row add-min-top-half">
                <article class="col-md-12">
                  <div class="name-desc-block">
                    <span class="name main font2 uppercase bold-font"><?php echo get_the_author(); ?></span>
                    <span class="desc grey font2 uppercase normal-font"><?php echo the_category(' , ');?></span>
                  </div>
                </article>
              </div>
              <div class="row add-min-top-half">
                <article class="col-md-12">
                  <div class="mach-post-tags">
                    <?php the_tags(' ', ' ', ''); ?>
                  </div>
                </article>
              </div>
          </div>
          <?php
          if(comments_open() || get_comments_number())
          {
          ?>
          <!-- inner-section : starts -->
          <section class="inner-section pad-top pad-bottom light-white-bg comments-wrap">
            <section class="container">
                <div class="row">
                    <div class="col-md-12">
                      <?php comments_template( '', true ); ?>
                    </div>
                </div>
            </section>
          </section>
          <?php
          }
          ?>
          <div class="page-nav pad-top-half pad-bottom-half dark-bg">
            <div class="mach-single-post-pagination text-center">
              <?php previous_post_link('%link',esc_html__('Previous Post', 'mach')); ?>
              <?php next_post_link('%link',esc_html__('Next Post', 'mach')); ?>
              <div class="float-clear"></div>
            </div>
          </div>
          <div class="hidden"><?php the_post_thumbnail(); ?></div>
        </div>
    </div>
  </div>
</section>

<?php
  endwhile;
endif;
get_footer();

?>
