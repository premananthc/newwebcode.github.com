// JavaScript Document
// This snippet contribution is from http://www.newwebcode.com
// author:Prem Ananth. C; prem@newwebcode.com / prem.uideveloper@gmail.com
// licence:OpenSource

//elementId: Pass the ID of the input element
//mandatory: boolean value true/false to test if it is a mandatory field
//placeHolderValue: This gives the placeholder value for version lower than html5. This attribute is available in HTML5
//labelValue: Error message to be shown
var nwc_comboValidator = function (elementId, mandatory, placeHolderValue, labelValue) {
        var active = false;
        $('#' + elementId).val(placeHolderValue).css('color', '#999');
        $('#' + elementId).parents('form').submit(function () {
            if (!active && mandatory) {
                $('.errMsg').append(labelValue + ' is a required field.<br />');
                return false;
            }
        });

        $('#' + elementId).bind('click focus', function () {
            if (!active) $(this).val("");
        });
        $('#' + elementId).blur(function () {
            if ($(this).val() == "") {
                $(this).val(placeHolderValue).css('color', '#999');
                active = false;
            } else {
                $(this).css('color', '#000');
                active = true;
            }
        });
    }