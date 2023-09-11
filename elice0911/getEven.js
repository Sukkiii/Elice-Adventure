// 문자열을 받았을 때, 숫자들 중 짝수만 반환하는 함수를 만들어보자
function getOnlyEvenNumber(inputA) {
  var resultA = [];
  for ( i=0; i < inputA.length; i++) {
    if ( inputA[i]%2 === 0 ) {
      resultA.push(inputA[i]);
    }
  }
  return resultA;
}

var inputA = [1, 2, 3, 4, 5, 6, 7]

module.exports = { inputs: [inputA], func: getOnlyEvenNumber }
