const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormChange);

function onFormChange(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
