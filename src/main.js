

import "./../sass/index.scss"
import "./../sass/portfolio.scss"
import "./../sass/styles.scss"
import "./../sass/main.scss"

import "./../node_modules/@fortawesome/fontawesome-free/js/fontawesome";
import "./../node_modules/@fortawesome/fontawesome-free/js/regular";
import "./../node_modules/@fortawesome/fontawesome-free/js/brands";
import "./../node_modules/@fortawesome/fontawesome-free/js/solid";

// // import scripts
import validateFormInput from "./scripts/formValidation"
import contactFormCharacterCounter from "./scripts/contactFormCharacterCounter";

// querysets
let contactFormName = document.querySelector("#contact-form #name");
let contactFormEmail = document.querySelector("#contact-form #email");
let contactFormMessage = document.querySelector("#contact-form #form-lower-input-container textarea");
let contactFormSubmitBtn = document.querySelector("#contact-form #submit-btn");


function main() {
    // on submit, handle form input validation
    contactFormSubmitBtn.addEventListener("click", (e) => {
        let validationResult = validateFormInput(contactFormName.value, contactFormEmail.value, contactFormMessage.value);
        if (validationResult == false) {
            e.preventDefault();
        }
    })

    // add a pretty character counter to the message text area
    contactFormMessage.addEventListener("keyup", contactFormCharacterCounter);
}

main()