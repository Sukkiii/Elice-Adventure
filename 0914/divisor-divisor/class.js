function solution(targetNumber){
  //targetNumber 약수를 구하고 또 그 약수의 약수를 구한다.
  // console.log(targetNumber, typeof targetNumber);

  // 약수: targetNumber보다 작거나 같으면서, 그 수로 나눴을 때 나머지가 0인 값
  
  // Step 1) targetNumber의 약수 구하기
  const divisors = getDivisiors(targetNumber);
  // console.log('divisors', divisors);
  // 1~targetNumber까지의 수를 반복문으로 하나씩 확인
  // 확인? -> 나머지가 0인지 (A % B === 0)
  // for(let i = 1; i <= targetNumber; i++) {
  //   // console.log('i', i);
  //   const isDivisor = targetNumber % i === 0;
  //   if (isDivisor) {
  //     divisors.push(i);
  //   }
  //   // console.log(divisors);
  // }
  const rtn = [];
  for (let i =0; i < divisorts.length; i++) {
    console.log(divisors[i]);
    // i의 약수 구하기
    const _targetNumber = divisors[i];
    
    // [그 약수배열].join(" ")
    rtn.push(getDivisiors(_targetNumber).join(' '));
  }
  return rtn.join('\n');
}
// Step 2) 이 로직을 참고해서 약수를 구하는 함수를 만들기
//         함수명 : getDivisiors, 입력 : inputNumber, 출력 : 약수배열
function getDivisiors(inputNumber) {
  const rtn = [];
  for(let i = 1; i <= inputNumber; i++) {
    const isDivisor = inputNumber % i === 0;
    if (isDivisor) {
      rtn.push(i);
    }
  }

  return rtn;
}         

module.exports = solution;