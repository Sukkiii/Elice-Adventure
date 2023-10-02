function randomPassword(e) {
    e.preventDefault();

    fetch('https://randomuser.me/api/?password=upper,lower,number')
        .then(response => response.json())
        .then(data => {
            const passwordData = data.results[0].login.password;
            password.innerHTML = passwordData;
        })
        .catch(error => {
            console.error('API 호출 중 에러 발생:', error);
        });
}

const buttonSubmit = document.querySelector('#buttonSubmit')
const password = document.querySelector('#password')

buttonSubmit.addEventListener('click', randomPassword)
