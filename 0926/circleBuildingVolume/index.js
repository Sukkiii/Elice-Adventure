function calculateVolume(e) {
  e.preventDefault();

  const H = document.getElementById('height').value;
  const R = document.getElementById('radius').value;

  const V = Math.PI * Math.pow(R, 2) * H;
 
  document.getElementById('volume').innerHTML = V.toFixed(2);
}

const button = document.getElementById("calc")
button.addEventListener("click", calculateVolume)