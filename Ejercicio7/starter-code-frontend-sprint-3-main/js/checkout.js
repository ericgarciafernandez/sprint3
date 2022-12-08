
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	var valueName = fName.value;
	var valueLastN = fLastN.value;
	var valueEmail = fEmail.value;
	var valueAddress = fAddress.value;
	var valuePassword = fPassword.value;
	var valuePhone = fPhone.value;

	// Validate fields entered by the user: name, phone, password, and email

	// Aplicamos regex para saber si solo contiene letras
	var letras = /^[A-Za-z]+$/;
	if (valueName == "" || valueName.length < 3 || !valueName.match(letras)) {
		error++;
		errorName.style.display = 'block';
	} else {
		errorName.style.display = 'none';
	}

	if (valueLastN == "" || valueLastN.length < 3 || !valueLastN.match(letras)) {
		error++;
		errorLastN.style.display = 'block';
	} else {
		errorLastN.style.display = 'none';
	}

	// Aplicamos regex para validar email
	var correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (valueEmail == "" || valueEmail.length < 3 || !valueEmail.match(correo)) {
		error++;
		errorEmail.style.display = 'block';
	} else {
		errorEmail.style.display = 'none';
	}

	if (valueAddress == "" || valueAddress.length < 3) {
		error++;
		errorAddress.style.display = 'block';
	} else {
		errorAddress.style.display = 'none';
	}

	var letrasNumeros = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
	if (valuePassword == "" || valuePassword.length < 3 || !valuePassword.match(letrasNumeros)) {
		error++;
		errorPassword.style.display = 'block';
	} else {
		errorPassword.style.display = 'none';
	}

	var numeros = /^[0-9]+$/;
	if (valuePhone == "" || valuePhone.length < 3 || !valuePhone.match(numeros)) {
		error++;
		errorPhone.style.display = 'block';
	} else {
		errorPhone.style.display = 'none';
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
