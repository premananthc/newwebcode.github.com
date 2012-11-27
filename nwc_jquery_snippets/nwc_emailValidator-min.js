// JavaScript Document
// This snippet contribution is from http://www.newwebcode.com
// author:Prem Ananth. C;
// licence:OpenSource
var nwc_emailValidator=function(e,t){emailPattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/;$('input[name="'+e+'"]').blur(function(){$('input[name="'+e+'"]').next(".invalidEmailErrMsg").hide();if(!emailPattern.test($('input[name="'+e+'"]').val()))$('input[name="'+e+'"]').after('<span class="invalidEmailErrMsg">'+t+"</span>")})}