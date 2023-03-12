

// regular expressions to validate against
let emailREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let fullNameREGEX = /^[\s\S]{0,48}$/;
let messageRegex = /^[\w\W]{0,800}$/;

// query selector for displaying the message
let formErrorElement = document.querySelector("#form-error-display");

export default function validateFormInput(fullName, email, message) {
    // this code validates the input in the form according to params

    let errorMsgToDisplay = "";

    // validate full name
    if (fullNameREGEX.test(fullName) == false) {
        errorMsgToDisplay = "Please enter a valid full name";
        formErrorElement.innerHTML = "* " + errorMsgToDisplay;
        return false;
    }

    // validate email address
    if (emailREGEX.test(email) == false) {
        errorMsgToDisplay = "Please enter a valid emal address";
        formErrorElement.innerHTML = "* " + errorMsgToDisplay;
        return false;
    }

    // validate message
    if (messageRegex.test(message) == false) {
        errorMsgToDisplay = "Either the number of characters is too long (Maximum 800) or wrong input. Please check that your message is valid.";
        formErrorElement.innerHTML = "* " + errorMsgToDisplay;
        return false;
    }

    return true;

}