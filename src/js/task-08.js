const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onFormChange);

function onFormChange(event) {
    event.preventDefault();

    console.log(event.currentTarget);

    // const formData = new FormData(event.currentTarget);
    // console.log(formData);

    // const { email, password } = event.currentTarget.elements;
    const { elements: { email, password } } = event.currentTarget;
    if(email.value === "" && password.value === "") {
        alert('All fields must be filled!'); 
    }

    const userInfo = { email: email.value, password: password.value };
    console.log(userInfo);

    event.currentTarget.reset();

}


