const buttonColor = document.querySelector('.change-color');
const colorText = document.querySelector ('.color')
const bodyEl = document.querySelector('body');


buttonColor.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = getRandomHexColor();
}

