function alertAfter2Seconds(e) {
  e.preventDefault();

  const Name = inputName.value;
  setTimeout(() => alert(`입력된 이름 : ${Name}`), 2000);
}

const inputName = document.getElementById('inputName');
const buttonClick = document.getElementById('buttonSubmit');

buttonClick.addEventListener('click', alertAfter2Seconds);
