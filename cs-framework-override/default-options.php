<?php

    global $mach_default_options;
    $mach_default_options['unique_text_1'] = 'default options';
    $mach_default_options['subtle-highlight-color'] = '#F44336';
    $mach_default_options['loading-animation-opt'] = '1';
    $mach_default_options['load-animation']['url'] = '';
    $mach_default_options['load-animation']['width'] = '';
    $mach_default_options['load-animation']['height'] = '';
    $mach_default_options['load-animation2x']['url'] = '';
    $mach_default_options['mach-nav-bg-color'] = '#0D0D0D';
    $mach_default_options['mach-nav-bg-img']['url'] = '';
    $mach_default_options['mach-nav-logo']['url'] = '';
    $mach_default_options['mach-nav-logo2x']['url'] = '';
    $mach_default_options['navigation_opt'] = '0';
    $mach_default_options['scroll-mouse-opt'] = '1';
    $mach_default_options['disable-sidebar'] = '0';
    $mach_default_options['google-map-api-key'] = '';

    $mach_default_options['default-font-size'] = '14';
    $mach_default_options['default-line-height'] = '21';
    $mach_default_options['default-letter-spacing'] = '0';
    $mach_default_options['body-font']['font-family'] = 'Roboto';
    $mach_default_options['heading-font']['font-family'] = 'PT Sans';

    $mach_default_options['name_placeholder'] = esc_html__('Your Name', 'mach');
    $mach_default_options['name_err_msg'] = esc_html__('Name must not be empty', 'mach');
    $mach_default_options['email_placeholder'] = esc_html__('Your Email ID', 'mach');
    $mach_default_options['email_err_msg'] = esc_html__('Please provide a valid email', 'mach');

    $mach_default_options['website_placeholder'] = esc_html__('Your Website URL', 'mach');
    $mach_default_options['website_err_msg'] = esc_html__('Please provide a valid URL', 'mach');

    $mach_default_options['message_placeholder'] = esc_html__('Your Message', 'mach');
    $mach_default_options['message_err_msg'] = esc_html__('Message should not be empty', 'mach');
    $mach_default_options['submit_btn_txt'] = esc_html__('Send Message', 'mach');
    $mach_default_options['thanks_msg_header'] = esc_html__('Thanks For Your Comment', 'mach');
    $mach_default_options['thanks_msg'] = esc_html__('Lorem ipsum dolor siter amet mundium corpes illon tolves lorem ipsum dolor. Quisque nec est id ante consectetur tristique. Suspendisse potenti.', 'mach');
    $mach_default_options['contact_email'] = 'mail@domain.tld';
    $mach_default_options['contact_email_sub'] = esc_html__('Contact form submission from Mach', 'mach');

    $mach_default_options['foot_bg_color'] = '#FFFFFF';
    $mach_default_options['mach-social-media-icons'] = array();
    $mach_default_options['mach-footer-copy'] = 'Copyright &copy; 2015 <a href="'.esc_url('http://unbranded.co').'">Unbranded</a>';
    $mach_default_options['additional_css'] = '';

    function notion_get_default_option_value($opt_id){
        global $mach_default_options;
        return $mach_default_options[$opt_id];
    }
?>
