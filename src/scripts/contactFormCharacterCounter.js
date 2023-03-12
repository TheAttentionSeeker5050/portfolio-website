// query selector
let wordCounterElement = document.querySelector("#form-message-char-counter");
let contactFormMessage = document.querySelector("#contact-form #form-lower-input-container textarea");
let messageCharCount = 0;

export default function contactFormCharacterCounter(e) {
    messageCharCount = contactFormMessage.value.length;
    wordCounterElement.innerHTML = `Number of Characters: ${messageCharCount}/800`;
}