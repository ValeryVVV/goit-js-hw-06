const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector('#text'),
}

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.spanEl.style.fontSize = `${event.target.value}px`;
}

console.log(refs.spanEl)