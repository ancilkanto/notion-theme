<?php

function notion_raw_color_style()
{
    $notion_raw_color_style = '
        .dark-style-header{
            background-color: '.notion_get_option('notion_dark_skin_header_bg').';
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

    $color_list = notion_get_color_palette();

    foreach ($color_list as $key => $value) {
        $absolute_color_styles = str_replace($key, $value, $absolute_color_styles);
    }

    return $absolute_color_styles;
}
