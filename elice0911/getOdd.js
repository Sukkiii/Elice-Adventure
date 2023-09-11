// 문자열에서 홀수만 반환하는 함수를 만들어보자
function getOnlyOddNumber(inputA) {
  var resultA = [];
  for ( i=0; i < inputA.length; i++) {
    if ( inputA[i]%2 !== 0) {
      resultA.push(inputA[i]);
    }
  }
  return resultA;
}

var inputA = [1, 2, 3, 4, 5, 6, 7]

module.exports = { inputs: [inputA], func: getOnlyOddNumber }
