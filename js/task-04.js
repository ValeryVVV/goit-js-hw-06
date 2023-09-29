let counterValue = 0;

const refs = {
  decrement: document.querySelector("button[data-action='decrement']"),
  increment: document.querySelector("button[data-action='increment']"),
  valueEl: document.querySelector("#value"),
};

const counterDec = () => {
  const count = (counterValue -= 1);
  refs.valueEl.textContent = count;
};

const counterInc = () => {
  const count = (counterValue += 1);
  refs.valueEl.textContent = count;
};

refs.decrement.addEventListener("click", counterDec);
refs.increment.addEventListener("click", counterInc);

// let counterValue = 0;

// const refs = {
//     decrement: document.querySelector("button[data-action='decrement']"),
//     increment: document.querySelector("button[data-action='increment']"),
//     valueRef: document.querySelector('#value'),
// }

// const countDecrement = function() {
//     counterValue -= 1;
//     refs.valueRef.textContent = counterValue;
// };

// const countIncrement = function() {
//     counterValue += 1;
//     refs.valueRef.textContent = counterValue;
// }

// refs.decrement.addEventListener('click', countDecrement);
// refs.increment.addEventListener('click', countIncrement);

// console.log(countDecrement);
// console.log(countIncrement);

// console.log(counterValue)
