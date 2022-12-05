const refs = {
    inputEl: document.querySelector("#validation-input"),
}

refs.inputEl.addEventListener('blur', onInputChange);

console.log(refs.inputEl)

function onInputChange(event) {
    if(event.currentTarget.value.length === Number(refs.inputEl.getAttribute('data-length'))) {
        refs.inputEl.classList.add('valid');
        refs.inputEl.classList.remove('invalid');
    } else {
        refs.inputEl.classList.remove('valid');
        refs.inputEl.classList.add('invalid');
    }
}
