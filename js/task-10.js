function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
  let widthBox = 20
  let heightBox = 20
  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement("div")
    widthBox = widthBox + 10;
    heightBox = heightBox + 10;

    item.classList = 'box'
    item.style.backgroundColor = getRandomHexColor()
    item.style.width = widthBox + "px"
    item.style.height = heightBox + "px"

    refs.boxesEl.append(item)
  }
} 

refs.btnDestroyEl.addEventListener('click', onClickDestroyBtn)
 
function onClickDestroyBtn() {
  refs.inpytEl.value = ""
  const boxesEl = document.querySelectorAll(".box");
  for (const box of boxesEl) {
    box.remove();
  }
} 