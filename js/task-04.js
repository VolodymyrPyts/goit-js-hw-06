// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const onClickDecrementBtn = document.querySelector('[data-action="decrement"]')
const onClickIncermentBtn = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector("#value")
const counterEl = document.querySelector("#counter")

onClickDecrementBtn.style.borderRadius = "50%"
onClickDecrementBtn.style.borderColor = "#0000ff"
onClickDecrementBtn.style.backgroundColor = "#00feffe6"
onClickDecrementBtn.style.fontSize = "30px"
onClickDecrementBtn.style.color = "#ff9c00ed"

onClickIncermentBtn.style.borderRadius = "50%"
onClickIncermentBtn.style.borderColor = "#ff5c00"
onClickIncermentBtn.style.backgroundColor = "#ff9c00ed"
onClickIncermentBtn.style.fontSize = "30px"
onClickIncermentBtn.style.color = "#00feffe6"

valueEl.style.fontSize = "50px"
valueEl.style.marginLeft = "50px"
valueEl.style.marginRight = "50px"

let counterValue = 0

onClickDecrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
})

onClickIncermentBtn.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue
})

