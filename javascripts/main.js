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

        $(window).on('load', function () {

            //-----------------------------------------------------------------

            // OUTLINE BUILDER

            //-----------------------------------------------------------------
            function buildOutline() {
                if ($('.page-outline').attr('data-width') !== '0') {
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
            setTimeout(function () {
                buildOutline(); //CALL OUTLINE BUILDER
            }, 500);
        });

        $(document).on('ready', function () {


        });
        $(window).resize(function () {
            buildOutline(); //CALL OUTLINE BUILDER ON RESIZE
        });

    })();
});
