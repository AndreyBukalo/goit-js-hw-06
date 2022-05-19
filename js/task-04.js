let counterValue = 0;

const btnCounter = {
  counterIncrement: document.querySelector("[data-action='increment']"),
  counterDecrement: document.querySelector("[data-action='decrement']"),
  counterValueEl: document.querySelector("#value"),
}; 

 btnCounter.counterIncrement.addEventListener("click", onClickIncrement);
 btnCounter.counterDecrement.addEventListener("click", onClickDecrement);

function onClickIncrement() {
  counterValue += 1;
 btnCounter.counterValueEl.textContent = counterValue;
}

function onClickDecrement() {
  counterValue -= 1;
 btnCounter.counterValueEl.textContent = counterValue;
};


