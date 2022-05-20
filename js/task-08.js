const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onWriteForm)

function onWriteForm(event) {

    event.preventDefault();
    
    if (event.currentTarget.elements.email.value === "") {
        alert("Error. Field Email must be filled")
    } else if (event.currentTarget.elements.password.value === "") {
        alert("Error. Field Password must be filled")
    } else {

        const email = event.currentTarget.elements.email.value;
            const password = event.currentTarget.elements.password.value;
            const formData = {
            email,
            password,
        }

        console.log(formData)
        formEl.reset()
    }
}