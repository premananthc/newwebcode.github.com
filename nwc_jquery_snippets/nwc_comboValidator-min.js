// JavaScript Document
// This snippet contribution is from http://www.newwebcode.com
// author:Prem Ananth. C;
// licence:OpenSource
var nwc_comboValidator=function(a,b,c,d){var e=false;$("#"+a).val(c).css("color","#999");$("#"+a).parents("form").submit(function(){if(!e&&b){$(".errMsg").append(d+" is a required field.<br />");return false}});$("#"+a).bind("click focus",function(){if(!e)$(this).val("")});$("#"+a).blur(function(){if($(this).val()==""){$(this).val(c).css("color","#999");e=false}else{$(this).css("color","#000");e=true}})}