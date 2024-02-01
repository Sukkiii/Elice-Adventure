// 공배수

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}
