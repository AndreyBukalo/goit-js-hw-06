const input = document.querySelector('#validation-input');


input.addEventListener("blur", hasBlur)
    
    
    
function hasBlur(event) {
    const inputCurrent = event.currentTarget;
    const inputLength = Number(inputCurrent.dataset.length);
    if (inputCurrent.value.length === inputLength) {
        inputCurrent.classList.remove('invalid')
        inputCurrent.classList.add('valid');
    }
    else {
        inputCurrent.classList.remove("valid");
        inputCurrent.classList.add('invalid');
    }
}

