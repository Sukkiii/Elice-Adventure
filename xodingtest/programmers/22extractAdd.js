// 등차수열의 특정한 항만 더하기

function solution(a, d, included) {
  let result = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      result += a + d * i;
    } 
  }
  return result;
}

function solution(a, d, included) {
  let result = 0;
  for (let i in included) {
    if (included[i]) {
      result += a + d * i;
    }
  }
  return result;
}

function solution(a, d, included) {
  let result = 0;
  included.forEach((isTrue, i) => {
    if(isTrue) {
      result += a + d * i;
    }
  });
  return result;
}
////////////

function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}

function solution(a, d, included) {
  var answer = 0;
  included.map((x, i) => {
    if (x) answer += a + d * i;
  });
  return answer;
}
