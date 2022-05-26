function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {

  inpytEl: document.querySelector("input"),
  btnCreateEl: document.querySelector("[data-create]"),
  btnDestroyEl: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
  controlsEl: document.querySelector(".controls")
}

refs.btnCreateEl.addEventListener('click', onClickCreateBtn)


function onClickCreateBtn() {
  const amount = refs.inpytEl.value;
 
    for (let i = 1; i <= amount; i += 1) {
      const item = document.createElement("div")

      item.classList = 'box'
      item.style.backgroundColor = getRandomHexColor()
      item.style.width = (i * 10 + 30) + "px"
      item.style.height = (i * 10 + 30) + "px"
      refs.boxesEl.append(item)
    }
} 

refs.btnDestroyEl.addEventListener('click', onClickDestroyBtn)
 
function onClickDestroyBtn() {
  refs.inpytEl.value = ""
  const boxesEl = document.querySelectorAll(".box");
    boxesEl.forEach(function (number, index) {
    number.remove();
  })
} 