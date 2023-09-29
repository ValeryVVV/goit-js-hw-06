const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputCgange);

function onInputCgange(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
