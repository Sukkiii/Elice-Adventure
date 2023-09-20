function mul(num) {
  let a = 10;
  let b = 20;
  function mul30(n) {
    return n * a * b;
  }
  return mul30(num);
}

function add30(num) {
  let a = 10;
  return (function () {
    let b = 20;
    function add() {
      return a + b + num;
    }

    return add();
  })();
}

const input = document.getElementById("number");
const mulButton = document.getElementById("mul-button");
const addButton = document.getElementById("add-button");
const result = document.getElementById("result");

mulButton.addEventListener("click", () => {
  result.innerHTML = this.mul(Number(input.value));
});

addButton.addEventListener("click", () => {
  result.innerHTML = this.add30(Number(input.value));
});