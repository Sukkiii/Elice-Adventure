const Counter = () => {
  let count = 0;
  // Counter 클로저를 작성하세요.
  function getCount() {
    return count;
  }
  function increase() {
    count++;
  }
  function decrease() {
    count--;
  }
  return {getCount, increase, decrease};
};

const counter = Counter();

const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const currentCount = document.getElementById("current-count");

increaseButton.addEventListener("click", () => {
  counter.increase();
  currentCount.innerHTML = counter.getCount();
});

decreaseButton.addEventListener("click", () => {
  counter.decrease();
  currentCount.innerHTML = counter.getCount();
});