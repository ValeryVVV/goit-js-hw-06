const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

console.log(inputEl, "=>", textEl);

inputEl.addEventListener("input", changedText);

function changedText(event) {
  textEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textEl.textContent = "Anonymous";
  }
}
