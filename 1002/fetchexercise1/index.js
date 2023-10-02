function showHexaCode(e) {
  e.preventDefault();

  const inputColorValue = inputColor.value;

  fetch('data.json')
    .then(response => response.json())
    .then(datas => {
      const findData = datas.find(data => data.color === inputColorValue);
      hexaCode.innerHTML = findData.value;
      hexaCode.style.color = findData.value

    });
}
const inputColor = document.querySelector('#inputColor');
const buttonSubmit = document.querySelector('#buttonSubmit');
const hexaCode = document.querySelector('#hexaCode');

buttonSubmit.addEventListener('click', showHexaCode);
