// Selector 
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd1 = document.getElementById("pwd1");
const pwd2 = document.getElementById("pwd2");
const small = document.getElementById("small");


// Event handler
form.addEventListener('submit', function(e) {
    e.preventDefault();  // stop default data submission to server 
    checkInput();
});

// Functions
function checkInput() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwd1Value = pwd1.value.trim();
    const pwd2Value = pwd2.value.trim();

    if (usernameValue === "") {
        showError(username, "Username cannot be blank");
    }
    else if (!isValid(usernameValue)) {
        showError(username, "Username is not valid");
    }
    else{
        showSuccess(username);
    }

    if (emailValue === "") {
        showError(email, "Email ID cannot be blank");
    }
    else if (!isEmailValid(emailValue)) {
        showError(email, "Email ID is not valid")
    }
    else{
        showSuccess(email);
    }

    if (pwd1Value === "") {
        showError(pwd1, "Password cannot be blank");
    }
    else{
        showSuccess(pwd1);
    }

    if (pwd2Value === "") {
        showError(pwd2, "Password cannot be blank");
    }
    else if (pwd1Value != pwd2Value) {
        showError(pwd2, "Password not matched");
    }
    else{
        showSuccess(pwd2);
    }
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isValid(username) {
    return /^[a-z0-9]{4,24}$/.test(username);
}
