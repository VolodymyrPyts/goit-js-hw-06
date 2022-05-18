// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const onClickDecrementBtn = document.querySelector('[data-action="decrement"]')
console.dir(onClickDecrementBtn)
const onClickIncermentBtn = document.querySelector('[data-action="increment"]')
console.log(onClickIncermentBtn)
onClickDecrementBtn.style.borderRadius = "50%"
onClickDecrementBtn.style.borderColor = "#0000ff"
onClickDecrementBtn.style.backgroundColor = "#00feffe6"
onClickIncermentBtn.style.borderRadius = "50%"
onClickIncermentBtn.style.borderColor = "#ff5c00"
onClickIncermentBtn.style.backgroundColor = "#ff9c00ed"
    
const counterValue = document.querySelector("#counter")
console.log(counterValue)

onClickDecrementBtn.addEventListener("click", () => {
    counterValue.children[1] +=1 ;
})
onClickIncermentBtn.addEventListener("click", () => {
    counterValue.textContent++;
})

