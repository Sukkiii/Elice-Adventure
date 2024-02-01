// 더 크게 합치기

function solution(a, b) {
  const abSum = a.toString() + b.toString();
  const baSum = b.toString() + a.toString();
  if (+abSum >= +baSum) return +abSum;
  else return +baSum;
}

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

function solution(a, b) {
  var answer = 0;
  let ab = "" + a + b;
  let ba = "" + b + a;
  answer = Math.max(ab, ba);
  return answer;
}
