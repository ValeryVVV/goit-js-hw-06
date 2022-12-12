function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const refs = {
    bodyEl: document.querySelector("body"),
    btnEl: document.querySelector('.change-color'),
    spanEl: document.querySelector('.color'),
}

refs.btnEl.addEventListener('click', onColorChange);

console.log(refs.btnEl)


function onColorChange() {
    const colorsHex = getRandomHexColor();
    refs.bodyEl.style.backgroundColor =  colorsHex;
    refs.spanEl.textContent = colorsHex;
}
