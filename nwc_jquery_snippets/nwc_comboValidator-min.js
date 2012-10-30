// JavaScript Document
// This snippet contribution is from http://www.newwebcode.com
// author:Prem Ananth. C; prem@newwebcode.com / prem.uideveloper@gmail.com
// licence:OpenSource

//elementId: Pass the ID of the input element
//mandatory: boolean value true/false to test if it is a mandatory field
//placeHolderValue: This gives the placeholder value for version lower than html5. This attribute is available in HTML5
//labelValue: Error message to be shown
var nwc_comboValidator=function(a,b,c,d){var e=false;$("#"+a).val(c).css("color","#999");$("#"+a).parents("form").submit(function(){if(!e&&b){$(".errMsg").append(d+" is a required field.<br />");return false}});$("#"+a).bind("click focus",function(){if(!e)$(this).val("")});$("#"+a).blur(function(){if($(this).val()==""){$(this).val(c).css("color","#999");e=false}else{$(this).css("color","#000");e=true}})}