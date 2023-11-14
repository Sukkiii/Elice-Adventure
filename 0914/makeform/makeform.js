// //지시사항을 참고하여 코드를 작성하세요.
// const form = document.querySelector('#form');
// const input = document.querySelector('#input');
// const answer = document.querySelector('#answer');

// function newputer(e) {
//     e.preventDefault(); // 폼 제출 기본 동작 방지

//     const value = input.value;
//     answer.innerHTML = value;
//     input.value = ""; // 텍스트 박스 초기화
// }

// form.addEventListener('submit', newputer);


// form안에 있는 button은 좀 주의를 해줘야하는데,
// 안해줄 애들은 id="btn"을 해주거나,
// 해줄 애에 type="submit"을 써줘야 함

const formElement = document.querySelector('#form');
const inputElemnent = document.querySelector('#input');
const answerElement = document.querySelector('#answer');

formElement.addEventListner('submit', event => {
  event.preventDefault();
  
  const value = inputElemnent.value;
  // alert('value', value);
  // alert('value' = value);
  answerElement.innerHTML = value;
  formElement.reset();
  // inputElemnent.value = "";
});

