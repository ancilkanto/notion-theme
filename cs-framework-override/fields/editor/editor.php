<?php if ( ! defined( 'ABSPATH' ) ) { die; } // Cannot access pages directly.
/**
 *
 * Field: Slider
 *
 * @since 1.0.0
 * @version 1.0.0
 *
 */
class CSFramework_Option_editor extends CSFramework_Options {

  public function __construct( $field, $value = '', $unique = '' ) {
    parent::__construct( $field, $value, $unique );
  }

  public function output() {



    echo $this->element_before();
    echo '<div class="notion-ace-editor" data-editor="'. $this->field['id'] .'-editor" data-textarea="'. $this->field['id'] .'-textarea">
        <textarea id="'. $this->field['id'] .'-textarea" name="'.$this->element_name().'" rows="8" cols="80" class="hidden-textarea"  >'.$this->element_value().'</textarea>
        <div id="'. $this->field['id'] .'-editor" class="notion-ace-editor-block"></div>
      </div>';

    echo $this->element_after();

  }

}
