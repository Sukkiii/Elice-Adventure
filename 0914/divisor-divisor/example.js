// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(data) {
  const num = Number(data);
  const divisors = [];
  for(let i=1; i<=num; i++) {
    if(data % i === 0) {
      divisors.push(i);
    }
  }

  let result = '';
  
  for(let i=0; i < divisors.length; i++) {
    const divisor = divisors[i];
    let str = "";
    
    for(let j=1; j<=divisor; j++) {
      if(divisor % j === 0) {
          str += `${j} `;
      }
    }
    result += str.trim() + '\n';
  }
  return result.trim();
  
}
module.exports = solution;