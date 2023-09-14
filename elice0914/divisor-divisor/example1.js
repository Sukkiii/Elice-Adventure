function solution(data) {
  const num = Number(data);
  const divisors = [];
  for(let i=1; i<=num; i++) {
    if(data % i === 0) {
      divisors.push(i);
    }
  }
  let result = '';
  
  divisors.forEach(divisor => {
    let str = '';
    for(let j=1; j<=divisor; j++) {
      if(divisor % j === 0) {
          str += `${j} `;
      }
    }
    result += str.trim() + '\n';
  });
  return result.trim();
}

module.exports = solution;

// 위 코드는 주어진 숫자의 약수를 구하고,
// 각 약수의 약수를 구하는 문제를 해결하는 함수입니다.
// 함수는 주어진 숫자를 받아서 처리하고,
// 각 약수와 약수의 약수를 문자열 형태로 반환합니다.
// 이를 위해 주어진 숫자를 약수로 나누어 나머지가 0인 경우를 찾아
//  약수로 추가하고, 이를 순회하여 각 약수의 약수를 찾습니다. 
// 마지막으로 결과를 반환하기 전에 문자열의 끝에 추가된 공백을 제거하여 정리합니다.
