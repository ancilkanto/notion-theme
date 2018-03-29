<?php

function notion_raw_color_style()
{
    $notion_raw_color_style = '
        .dark-style-header{
            background-color: '.notion_get_option('notion_dark_skin_header_bg').' !important;
        }
        .light-style-header{
            background-color: '.notion_get_option('notion_light_skin_header_bg').';
        }
        header{
            background: rgba('.notion_get_option('notion_light_skin_header_bg').'-rgb, 0.2);
        }
    ';



    



    return $notion_raw_color_style;
}

function notion_generate_absolute_color_style()
{
    $absolute_color_styles = notion_raw_color_style();

    $colors = notion_get_option( 'notion_color_palette' );

    if($colors)
    foreach ($colors as $color) {
        
        $absolute_color_styles = str_replace($color['notion_color_id'], $color['notion_color_picker'], $absolute_color_styles);
    }


    $colors = notion_get_option( 'notion_color_palette' );
    if($colors)
    foreach ($colors as $color) {
        $color_hex = $color['notion_color_picker'];
        $color_id = $color['notion_color_id'];
        $absolute_color_styles .= '.'.$color_id.'{ color: '.$color_hex.'; }';
        $absolute_color_styles .= '.'.$color_id.' a{ color: '.$color_hex.'; }';
        $absolute_color_styles .= '.'.$color_id.'-bg{ background-color: '.$color_hex.'; }';
        $absolute_color_styles .= '.'.$color_id.'-on-hover:hover{ color: '.$color_hex.' !important; }';
        $absolute_color_styles .= '.'.$color_id.'-bg-on-hover:hover{ background-color: '.$color_hex.' !important; }';

        $absolute_color_styles .= '.'.$color_id.'-border{ border-color: '.$color_hex.'; }';
        $absolute_color_styles .= '.'.$color_id.'-border-on-hover:hover{ border-color: '.$color_hex.' !important; }';
    }

    return $absolute_color_styles;
}


function notion_generate_font_style(){
    $font_style = '';

    $fonts = notion_get_fonts_group();
    if($fonts)
    foreach ($fonts as $key => $value) {
        $font_style .= ".".$key." { font-family: '".$value."'}";
    }

    return $font_style;
}


function notion_generate_font_size_style(){
    $font_size_style = '';

    $font_sizes = notion_get_option( 'notion_font_size_group' );
    if($font_sizes)
    foreach ($font_sizes as $font_size ) {
        $font_size_style .='.'.$font_size['notion_font_size_id'].'{ font-size: '.$font_size['notion_font_size'].'}';
    }

    return $font_size_style;
}
