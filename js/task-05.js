const refs = {
    inputNameEl: document.querySelector("#name-input"),
    outputNameEl: document.querySelector('#name-output'),
}

refs.inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.outputNameEl.textContent = event.currentTarget.value;

    if(refs.inputNameEl === '') {
        refs.outputNameEl.textContent = 'Anonymous';
    }

}
