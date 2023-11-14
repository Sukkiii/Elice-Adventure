// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution() {
  let origin = [];

  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      origin += i + '*' + j + '=' + i * j + '\n';
    }
  }

  let array = origin.split('\n');
  array.pop();

  array.sort((a,b) => {
    let numA = parseInt(a.split('=')[1]);
    let numB = parseInt(b.split('=')[1]);
    if(numA !== numB) {
      return numA - numB;
    } else {
      let danA = parseInt(a.split('*')[0]);
      let danB = parseInt(b.split('*')[0]);
      return danA - danB;
    }
  });

  let result = array.join('\n');
  return result;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
