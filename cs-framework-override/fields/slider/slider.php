<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Slider
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
class CSFramework_Option_slider extends CSFramework_Options {

  public function __construct( $field, $value = '', $unique = '' ) {
    parent::__construct( $field, $value, $unique );
  }

  public function output() {

    $options = array(
        'step'  => ( empty( $this->field['options']['step'] ) ) ? 1 : $this->field['options']['step'],
        'unit'  => ( empty( $this->field['options']['unit'] ) ) ? '' : $this->field['options']['unit'],
        'min'   => ( empty( $this->field['options']['min'] ) ) ? 0 : $this->field['options']['min'],
        'max'   => ( empty( $this->field['options']['max'] ) ) ? 200 : $this->field['options']['max'],
        'default'   => ( empty( $this->field['options']['default'] ) ) ? 50 : $this->field['options']['default']
    );

    $link_to = ( empty( $this->field['link-to'] ) ) ? '' : $this->field['link-to'];
    $element_value = ( empty( $this->element_value() ) ) ? $options['default'] : $this->element_value();

    $check_px = strpos($element_value, 'px');
    if($check_px === false)
      $element_value = $element_value.$options['unit'];

    echo $this->element_before();
    echo '<div class="cs-slider"><div></div></div>';
    echo '<input data-link-to="'.$link_to.'" data-slider=\'' . json_encode( $options ) . '\' type="'. $this->element_type() .'" name="'. $this->element_name() .'" value="'. $element_value .'"'. $this->element_class() . $this->element_attributes() .'/>';
    echo $this->element_after();

  }

}
