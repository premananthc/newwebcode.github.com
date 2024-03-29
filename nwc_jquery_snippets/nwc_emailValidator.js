// JavaScript Document
// This snippet contribution is from http://www.newwebcode.com
// author:Prem Ananth. C; prem@newwebcode.com / prem.uideveloper@gmail.com
// licence:OpenSource
// example: var userEmail = nwc_emailValidator('userEmail','Please enter valid Email. This is mandatory.');
var nwc_emailValidator = function(inputName, errMessage)
{
	emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/;
	$('input[name="'+inputName+'"]').blur(function(){
		$('input[name="'+inputName+'"]').next('.invalidEmailErrMsg').hide();
		if(!emailPattern.test($('input[name="'+inputName+'"]').val()))
			$('input[name="'+inputName+'"]').after('<span class="invalidEmailErrMsg">'+errMessage+'</span>');
	});
}