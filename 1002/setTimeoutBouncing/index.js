let alertTimer;
function inputDebouncing() {
    if(alertTimer) {
        clearTimeout(alertTimer);
    }

    const name = inputName.value;
    alertTimer = setTimeout(() => alert(`입력된 이름 : ${name}`), 1000)
}
console.log(alertTimer);

const inputName = document.getElementById('inputName');

inputName.addEventListener('input', inputDebouncing)
