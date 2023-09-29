function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  blockEl: document.querySelector("div#boxes"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
  inputEl: document.querySelector("input"),
};

let amount = 0;

refs.btnCreateEl.addEventListener("click", createInputValue);
refs.btnDestroyEl.addEventListener("click", destriyInputValue);

function createBoxes(amount) {
  let x = 20;
  for (let i = 0; i < amount; i++) {
    x += 10;

    const markup = `<div style="background-color:${getRandomHexColor()}; width:${x}px; height:${x}px; border:1px solid black"></div>`;
    refs.blockEl.insertAdjacentHTML("beforeend", markup);
  }
}

function createInputValue() {
  amount = refs.inputEl.value;
  createBoxes(amount);
}

function destriyInputValue() {
  refs.inputEl.value = "";
  refs.blockEl.innerHTML = "";
}
