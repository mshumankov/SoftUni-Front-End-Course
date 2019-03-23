function validate() {
	let companyCheck = $('#company');
	let companyInfo = $('#companyNumber');
	let userName = $('#username');
	let email = $('#email');
	let password = $('#password');
	let confirmPassword = $('#confirm-password');
	let valid = $('#valid');



	let checkUsername = /^[a-zA-Z0-9]{3,20}$/;
	let checkEmail = /.+@.+\..+/;
	let checkPassword = /^[a-zA-Z0-9~!@#$%^&*()_+| \=-{}":?><';,./]{5,15}$/;
	let checkConfirmPassword = /^[a-zA-Z0-9~!@#$%^&*()_+| \=-{}":?><';,./]{5,15}$/;
	let checkCompanyInfo = /^[a-zA-Z0-9~!@#$%^&*()_+|\=-{}":?><' ;,./]{2,15}$/;




	$('#submit').on('click', function (e) {
		e.preventDefault();
		userName.css('border', '');
		email.css('border', '');
		password.css('border', '');
		confirmPassword.css('border', '');
		companyInfo.css('border', '');
		if (!checkUsername.test(userName.val())) {
			userName.css('border', '2px solid red');
		}
		if (!checkEmail.test(email.val())) {
			email.css('border', '2px solid red');
		}
		if (!checkPassword.test(password.val())) {
			password.css('border', '2px solid red');
		}
		if (!checkConfirmPassword.test(confirmPassword.val())) {
			confirmPassword.css('border', '2px solid red');
		}
		if (password.val() !== confirmPassword.val()) {
			confirmPassword.css('border', '2px solid red');
		}
		if ($(companyCheck).is(':checked')) {
			if (!checkCompanyInfo.test(companyInfo.val())) {
				companyInfo.css('border', '2px solid red');
			}
			if (checkUsername.test(userName.val()) &
				checkEmail.test(email.val()) &
				checkPassword.test(password.val()) &
				checkConfirmPassword.test(confirmPassword.val()) &
				checkCompanyInfo.test(companyInfo.val())) {
				valid.css('display', 'block');
			} else {
				valid.css('display', 'none');
			}
		} else {
			if (checkUsername.test(userName.val()) &
				checkEmail.test(email.val()) &
				checkPassword.test(password.val()) &
				checkConfirmPassword.test(confirmPassword.val())) {
				valid.css('display', 'block');
			} else {
				valid.css('display', 'none');
			}
		}
	})


	$("#company").change(function () {
		if ($(companyCheck).is(':checked')) {
			$('#companyInfo').css('display', 'block');
		} else {
			$('#companyInfo').css('display', 'none');
		}
	});
}
