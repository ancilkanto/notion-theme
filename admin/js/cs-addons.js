jQuery(document).ready(function($){

    //CS SELECT FIELD STYLES
    $( '.cs-framework.cs-option-framework form select.notion-select' ).selectmenu();


    // CS SLIDER FIELD
    $( '.cs-field-slider' ).each(function() {
        var dis     = $( this ),
            input   = $( 'input', dis ),
            slider  = $( '.cs-slider > div', dis ),
            data    = input.data( 'slider' ),
            val     = input.val() || 0,
            step    = data.step || 1,
            min     = data.min || 0,
            max     = data.max || 200;

        slider.slider({
            range: "min",
            value: parseInt( val ),
            step: step,
            min: parseInt( min ),
            max: parseInt( max ),
            slide: function( e, o ) {
                input.val( o.value + data.unit ).trigger( 'change' );
            }
        });

        input.keyup( function() {
            slider.slider( "value" , parseInt( input.val() ) );
        });
    });


    // UNIQUE NUMBER GENERATOR
    function IDGenerator() {
        this.length = 12;
        this.timestamp = +new Date();
        var _getRandomInt = function( min, max ) {
           return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
       };

        this.generate = function() {
            var ts = this.timestamp.toString();
            var parts = ts.split( "" ).reverse();
            var id = "";
            for( var i = 0; i < this.length; ++i ) {
               var index = _getRandomInt( 0, parts.length - 1 );
               id += parts[index];
            }
            return id;
        };
    }

    // ADD UNIQUE ID TO HIGHLIGHT COLOR
    var highlightColorIdField = $('.cs-element-highlight-color').find('.notion-color-id');
    if(highlightColorIdField.val() !== ''){
        // Do Nothing
    }
    else {
        var generator = new IDGenerator();
        highlightColorIdField.val('notion-color-'+generator.generate());
    }


    // ADD UNIQUE ID TO FONT GROUP
    $(document).on('click', '.cs-element-font-family .cs-add-group', function () {
        setTimeout(function () {
            var fontIdField = $('.cs-element-font-family .cs-groups .cs-group:last-child').find('.notion-font-id');
            var generator = new IDGenerator();
            fontIdField.val('notion-font-'+generator.generate());
        }, 200);
    });

    // ADD UNIQUE ID TO COLOR PALETTE GROUP
    $(document).on('click', '.cs-element-font-sizes .cs-add-group', function () {
        setTimeout(function () {
            var fontIdField = $('.cs-element-font-sizes .cs-groups .cs-group:last-child').find('.notion-font-size-id');
            var generator = new IDGenerator();
            fontIdField.val('notion-font-size'+generator.generate());
        }, 200);
    });

    // ADD UNIQUE ID TO COLOR PALETTE GROUP
    $(document).on('click', '.cs-element-colors .cs-add-group', function () {
        setTimeout(function () {
            var colorIdField = $('.cs-element-colors .cs-groups .cs-group:last-child').find('.notion-color-id');
            var generator = new IDGenerator();
            colorIdField.val('notion-color-'+generator.generate());
        }, 200);
    });


    // ONLY ONE CS MAIN NAV OPEN AT A TIME
    $('.cs-nav > ul >li').on('click', function () {
        $('.cs-nav > ul > li').not(this).each(function(){
             $(this).find('ul').slideUp();
         });
    });


    // CS HEADER STICKY ON SCROLL
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if(scroll > 20){

            $('.cs-framework .cs-header').addClass('cs-header-fixed');
            $('.cs-framework .cs-content, .cs-framework .cs-nav ').addClass('cs-pos-adjustment');
        }
        else{
            $('.cs-framework .cs-content, .cs-framework .cs-nav ').removeClass('cs-pos-adjustment');
            $('.cs-framework .cs-header').removeClass('cs-header-fixed');
        }
    });
    // CS HEADER WIDTH ADJUSTMENT
    $('.cs-framework .cs-header').width($('.cs-framework .cs-body').width()-50);
    $(window).on('resize', function () {
        $('.cs-framework .cs-header').width($('.cs-framework .cs-body').width()-50);
    });


    // ADD TITLE TO NEWLY ADDED GROUP
    var addDynamicTitle = function (e) {
        var target = $(e.target).find('input[type="text"]');
        $(target).keyup(function () {
            var titleBlock =  $(this).closest('.cs-group').find('.cs-group-title'),
                titleIcon = titleBlock.find('span');

            titleIcon.addClass('class_name');
            titleBlock.text('Title:'+ ' ' +$(this).val());
            titleBlock.append(titleIcon);
        });
    };
    $(document).ready(function() {
        $('body').on("DOMNodeInserted", addDynamicTitle);
    });


    // EDIT TITLE OF EXISTING GROUPS
    $('.cs-group').each(function () {
        var titleBlock = $(this).find('.cs-group-title'),
            titleIcon = titleBlock.find('span');
        $(this).find('.cs-group-content .cs-fieldset input').keyup(function(){
           titleBlock.text('Title:'+ ' ' +$(this).val());
           titleBlock.append(titleIcon);
       });
    });


    // CAPTURE THEME OPTION SETTINGS CHANGE
    var formModified = false;
    $(document).on('change keypress', '#csframework_form :input', function () {
        formModified = true;
        $('.cs-save-warning').css({
            'display': 'inline'
        });
    });
    // SHOWS A MESSAGE WHILE LEAVING THEME OPTION PAGE WITHOUT SAVING
    window.onload = function() {
        window.addEventListener("beforeunload", function(e) {
            if (!formModified) {
                return undefined;
            }
            var confirmationMessage = 'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.';
            (e || window.event).returnValue = confirmationMessage; //Gecko + IE

            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        });
    };
    // CLEAR THEME OPTION SETTINGS CHANGE FLAG
    $(document).ajaxComplete(function(event, jqxhr, settings) {
        if(settings.data.indexOf('option_page=_cs_options') != -1){
            formModified = false;
        }
    });



    $('.cs-option-framework input[id="save"]').on('click', function () {
        $('.cs-save-warning').css({
            'display': 'none'
        });
    });


    // SET LOGO HEIGHT USING SLIDER
    $('.cs-field-slider input.set-logo-height').change(function () {
        var targetImageWrap = $(this).attr('data-link-to');
        var targetImage = $('.'+targetImageWrap).closest('.cs-fieldset').find('img');
        targetImage.css('height', $(this).val());
    });
    // SHOULD BE AT BOTTOM
    try{
        $('.cs-field-slider input.set-logo-height').each(function () {
            var targetImageWrap = $(this).attr('data-link-to');
            var targetImage = $('.'+targetImageWrap).closest('.cs-fieldset').find('img');
            targetImage.css('height', $(this).val());
        });
    }
    catch(err){
        return false;
    }
});
