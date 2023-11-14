// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(data) {
  const nameArray = data.split(' ');
  
  const result = nameArray.filter(name => {
    const firstName = name[0];
    return firstName === '김' ? true : false;
  });
  return result.join(' ');
}

module.exports = solution;
