// 입력된 문자열에서 공백 " "를 지운 문자열을 반환하는 함수를 작성

// function removeBlank(str) {
// let result = "";
// for (let i = 0; i < str.length; i++) {
// if (str[i] !== " ") {
// result += str[i];
// }
// }
// return result;
// }

function removeBlank2 (str) {
  let result = str.split(" ").join("");
  return result;
}
let inputA = "hello world";

module.exports = { inputs: [inputA], func: removeBlank }
