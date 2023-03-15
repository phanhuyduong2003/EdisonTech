const NAME_REQUIRED = 'Enter name'
const EMAIL_REQUIRED = 'Enter email'
const EMAIL_INVALID = 'Enter correct format'

const form = document.querySelector('#signup')
form.addEventListener('submit', function (event) {
    event.preventDefault()

    // validation information
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    // let emailValid = hasValue(form.elements["email"], EMAIL_REQUIRED)
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    if (nameValid && emailValid) {
        alert("Subscribe Successfully!");
    }
})
function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message)
    }
    return showSuccess(input)
}
function showError(input, message) {
    return showMessage(input, message, false);
}
function showSuccess(input) {
    return showMessage(input, "", true);
}
function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector('small')
    msg.innerText = message
    if (type) {
        input.className = 'success'
    } else {
        input.className = 'error'
    }
    return type
}
function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}
