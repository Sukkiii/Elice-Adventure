//숫자로 된 배열을 받을 때, 이 숫자들로 이뤄진 숫자값을 구하는 함수
//1.숫자로 된 배열을 문자열로 전환
//2.문자열 덧셈을 통해 하나의 문자열로 바꾸기
//3.문자열을 숫자로 전환하여 호출

function makeNumberFromDigits(inputA) {
  var sumArray = "";
  for(i=0; i<inputA.length; i++){
    sumArray += inputA[i].toString();
  }
  return parseInt(sumArray);
}
// 배열의 순서대로 더하는 변수를 만들고 그 변수를 마지막에 숫자로 출력

var inputA = [1, 1, 0, 0]

module.exports = { inputs: [inputA], func: makeNumberFromDigits }
