function checkUsername(username) {
	if (username.length < 10) {
		return {
			error: 'Username should be atleast 10 characters.',
			isValid: 'is-invalid',
			isSuccess: 'has-danger'
		}
	}

	return {
		error: null,
		isValid: 'is-valid',
		isSuccess: 'has-success'
	}
}

function checkEmail(email){
	if(!email.includes('@') || email.length < 0) {
		return {
			error: 'Email should include the @ symbol.',
			isValid: 'is-invalid',
			isSuccess: 'has-danger'
		}
	}

	return {
		error: null,
		isValid: 'is-valid',
		isSuccess: 'has-success'
	}
}

function checkPassLength(password) {
	if (password.length < 8) {
		return {
			error: 'Password should be atleast 8 characters.',
			isValid: 'is-invalid',
			isSuccess: 'has-danger'
		}
	}

	return {
		error: null,
		isValid: 'is-valid',
		isSuccess: 'has-success'
	}
}

function checkPass2(password, password2) {
	if (password !== password2 || password2.length < 8) {
		return {
			error: 'Password and Confirm Password should match.',
			isValid: 'is-invalid',
			isSuccess: 'has-danger'
		}
	}

	return {
		error: null,
		isValid: 'is-valid',
		isSuccess: 'has-success'
	}
}

function clearAlerts(){
	document.querySelector('#username').classList.remove('is-valid', 'is-invalid')
	document.querySelector('#username').parentElement.classList.remove('has-success', 'has-danger')
	document.querySelector('#email').classList.remove('is-valid', 'is-invalid')
	document.querySelector('#email').parentElement.classList.remove('has-success', 'has-danger')
	document.querySelector('#password').classList.remove('is-valid', 'is-invalid')
	document.querySelector('#password').parentElement.classList.remove('has-success', 'has-danger')
	document.querySelector('#password2').classList.remove('is-valid', 'is-invalid')
	document.querySelector('#password2').parentElement.classList.remove('has-success', 'has-danger')
}

// upon clicking the register button, it should execute the following validations:
document.querySelector('#registerButton').addEventListener('click', function(){
	let username = document.querySelector('#username').value
	let email = document.querySelector('#email').value
	let password = document.querySelector('#password').value
	let password2 = document.querySelector('#password2').value

	clearAlerts()

	//username should be greater than or equal to 10 chars
	let usernameValidation = checkUsername(username)
	document.querySelector('#username').classList.add(usernameValidation.isValid)
	document.querySelector('#username').parentElement.classList.add(usernameValidation.isSuccess)
	document.querySelector('#userErr').innerHTML = usernameValidation.error

	//email should include the @ symbol

	let emailValidation = checkEmail(email)
	document.querySelector('#email').classList.add(emailValidation.isValid)
	document.querySelector('#email').parentElement.classList.add(emailValidation.isSuccess)
	document.querySelector('#emailErr').innerHTML = emailValidation.error

	//password should be atleast 8 characters
	let passwordLengthValidation = checkPassLength(password)
	document.querySelector('#password').classList.add(passwordLengthValidation.isValid)
	document.querySelector('#password').parentElement.classList.add(passwordLengthValidation.isSuccess)
	document.querySelector('#passErr').innerHTML = passwordLengthValidation.error

	//use the Javascript inludes() method to check if the email has an @ symbol
	//password and pass2 should match
	//all input boxes should not be empty
	//create an errors variable that will check if there are any errors
	//increment the errors variable every time we encounter an error in our input validations

	let pass2Validation = checkPass2(password, password2)
	document.querySelector('#password2').classList.add(pass2Validation.isValid)
	document.querySelector('#password2').parentElement.classList.add(pass2Validation.isSuccess)
	document.querySelector('#pass2Err').innerHTML = pass2Validation.error

	const Toast = Swal.mixin({
	  toast: true,
	  position: 'top-end',
	  showConfirmButton: false,
	  timer: 3000
	})

	let errors = 0; //try to change to 1 or any positive value
	// declare an username variable to store the value of the username input
	// declare a password variable to store the value of the password input
	// declare an email variable to store the value of the email input
	// declare an pass2 variable to store the value of the confirm password input
 	if(usernameValidation.error !== null 
		|| emailValidation.error !== null 
		|| passwordLengthValidation.error !== null 
		|| pass2Validation.error!==null) {
		errors = 1
	}
	// username should have atleast 10 characters
	//email should include the @ symbol
	//password should be atleast 8 characters
	// confirm if the value of password is equal to pass2
	//if the value of errors is greater than 0, return false else 
	// create an alert message that says successfully registered! then
	//return true

 	if(errors > 0) {
		Toast.fire({
		  type: 'error',
		  title: 'Something went wrong'
		})
 	} else {
		Toast.fire({
		  type: 'success',
		  title: 'Registered successfully'
		})
 	}
})