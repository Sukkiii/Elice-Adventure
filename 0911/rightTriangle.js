// 숫자 3개를 입력받았을 때, 첫번째 숫자가 무조건 빗변이라고 하자.
// 이때, 숫자 3개는 삼각형의 각 변의 길이를 의미한다.
// 이 삼각형이 직각삼각형이면 true, 아니라면 false를 반환하는 함수를 만들어보자.

// 지시사항에 따라 코드를 작성합니다.
function isRightTriangle (a, b, c) {

  if (Math.pow(a,2) === Math.pow(b,2) + Math.pow(c,2)) {
    return true;
  } else {
    return false;
  }
}

let inputA = 5
let inputB = 3
let inputC = 4

module.exports = { inputs: [inputA, inputB, inputC], func: isRightTriangle }
