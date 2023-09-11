// 입력받은 숫자를 한 자릿수씩 분리하여 숫자 배열로 바꾸는 함수를 반환
// 1. 입력받은 숫자를 문자열로 바꾼다.
// 2. 이 문자열을 한 자릿수씩 분리한다.
// 3. 배열에 숫자로 바꿔서 넣는다.

function getDigits (inputA) {
  let result = inputA.toString().split("");
  for (let i=0; i < result.length; i++) {
    result[i] = parseInt(result[i]);
  } return result;
}

let inputA = 1100;

module.exports = { inputs: [inputA], func: getDigits }
