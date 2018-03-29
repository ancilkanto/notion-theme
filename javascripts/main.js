// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: NOTION
// Author: QUADNOTION.
// Version 1.0 - Initial Release
// Website: http://quadnotion.com
// Copyright: (C) 2018
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

jQuery(document).ready(function ($) {

    (function () {
        "use strict";

        var boxW = '';

        function buildOutline() {
            if ($('.page-outline').length && $('.page-outline').attr('data-width') !== '0') {
                var outline = $('.page-outline').attr('data-width');
                    outline = outline.substr(0, outline.length-2);
                boxW = ($(window).width()) - (outline * 2);

                $('.master-wrap, .sticky-header').css({
                    'max-width': boxW + 'px',
                    'margin-left': outline + 'px',
                    'margin-right': outline + 'px'
                });

                if($('.h-header').hasClass('sticky-header')){
                    $('.h-header').find('.h-header-container-inner').css({'padding-left': 0 + 'px', 'padding-right': 0 + 'px'});
                    $('.h-header').css('z-index', '1000');
                    $('.master-wrap').css('z-index', 'unset');
                }

                var outline_color = $('.page-outline').attr('data-color');
                $('.page-outline-top, .page-outline-bottom, .page-outline-right, .page-outline-left').css('background-color', outline_color);
                $('.page-outline-top, .page-outline-bottom, .page-outline-top1, .page-outline-bottom1').css('height', outline + 'px');
                $('.page-outline-right, .page-outline-left, .page-outline-right1, .page-outline-left1').css('width', outline + 'px');
                $('.master-wrap').css('padding-bottom', outline + 'px');
                $('html').css('margin-top', outline + 'px');
            }
        }

        $(window).on('load', function () {

            //-----------------------------------------------------------------

            // OUTLINE BUILDER

            //-----------------------------------------------------------------
            
            setTimeout(function () {
                buildOutline(); //CALL OUTLINE BUILDER
            }, 500);
        });

        $(document).on('ready', function () {
            $(".scroll-link").on('click', function() {
                var ScrollOffset = 0;
                //alert(ScrollOffset);
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
                }, {
                    duration: 1500,
                    easing: "easeInOutExpo"
                });
                return false;
            });


            window.lightboxInit = function () {

                // Image LightBox Init
                $('.image-lightbox').each(function () {
                    var img_lightbox = $(this);
                    img_lightbox.find('.image-selector').each(function () {
                        var img_link = $(this).attr('href');
                        $(this).find('.thumb-image').prepend('<img src="' + img_link + '" class="img-responsive hide" alt="thumb-image" data-no-retina />');
                    });

                    img_lightbox.find('.image-selector.notion-button').each(function () {
                        var img_link = $(this).attr('href');
                        $(this).append('<span class="thumb-image d-none"><img src="' + img_link + '" class="img-responsive hide" alt="thumb-image" data-no-retina /></span>');
                    });

                    img_lightbox.lightGallery({
                        selector: ".image-selector",
                        download: false,
                        hideBarsDelay: 3000,
                    });
                });

                // Audio LightBox Init
                $('.audio-lightbox').lightGallery({
                    selector: ".audio-selector",
                    videoMaxWidth: "700px",
                    download: false
                });


                // Video LightBox Init
                $('.video-lightbox').each(function () {
                    $(this).lightGallery({
                        selector: ".video-selector",
                        thumbnail: true,
                        download: false,
                        videojs: true,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            // controls: 0
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: 'A90707'
                        }
                    });
                });

                // $('.video-lightbox a').each(function(){
                //     $(this).lightGallery();
                // });


                // HTML5 Video Lightbox Init
                $('.html5-videos').each(function () {
                    $(this).lightGallery({
                        download: false,
                    });
                });
            };

            lightboxInit();
        });
        $(window).resize(function () {
            buildOutline(); //CALL OUTLINE BUILDER ON RESIZE
        });

    })();
});
