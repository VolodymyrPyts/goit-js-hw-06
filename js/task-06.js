const inputEl = document.querySelector("#validation-input")

inputEl.addEventListener("blur", onInputBtn);

const lengthInputEl = inputEl.getAttribute("data-length");

function onInputBtn(event) {
    event.preventDefault();
        if (event.currentTarget.value.length == lengthInputEl) {
        inputEl.classList = "valid"
    } else {
        inputEl.classList = "invalid"
    }
}
