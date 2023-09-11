//문자열을 입력한 숫자만큼 반복해서 입력하는 함수를 만들기

function repeatString (str1, num1) {
  return str1.repeat(num1);
}

// 아래 함수도 틀리진 않았지만, 위의 함수가 더 효율적
// function repeatString( str1, num1) {
//   let result = "";
//   for(let i=0; i < num1; i++){
//     result += str1;
//   }
//   return result;
// }

let inputA = "hello";
let inputB = 3;

module.exports = { inputs: [inputA, inputB], func: repeatString }
