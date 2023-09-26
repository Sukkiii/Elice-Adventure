function calculate(e) {
  e.preventDefault();

  const mmSize = document.getElementById('mm').value;

  const inches = mmSize / 25.4;
  const usSize= (3 * inches) - 22
  const ukSize = (3 * inches) - 23
  const euSize = 1.27 * (ukSize + 23) + 2

  document.getElementById('us_size').value = usSize.toFixed(2);
  document.getElementById('uk_size').value = ukSize.toFixed(2);
  document.getElementById('eu_size').value = euSize.toFixed(2);
}

const button = document.getElementById("calc")
button.addEventListener("click", calculate)