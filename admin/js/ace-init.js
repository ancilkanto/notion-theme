/*global $:false */
/*global window: false */
jQuery(document).ready(function($) {

    (function() {
        "use strict";
        $('.notion-ace-editor').each(function() {
            var area = $(this);
            var editor = area.attr('data-editor');
            var aceeditor = ace.edit(editor);
            aceeditor.setTheme("ace/theme/monokai");
            aceeditor.getSession().setMode("ace/mode/haxe");
            var textarea = area.attr('data-textarea');
            var textareaContent = $('#' + textarea).val();
            aceeditor.getSession().setValue(textareaContent);
            aceeditor.on('change', function(e) {
                $('#' + textarea).val(aceeditor.getSession().getValue());
                aceeditor.resize();
            });
        });
    })();
});
