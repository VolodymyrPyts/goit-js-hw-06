function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  buttonEl: document.querySelector(".change-color"),
  spanColorEl: document.querySelector(".color"),
}

refs.buttonEl.addEventListener("click", onBthClick)

function onBthClick(event) {
  const color = getRandomHexColor()
  refs.bodyEl.style.backgroundColor = color;
  refs.spanColorEl.textContent = color;
  }