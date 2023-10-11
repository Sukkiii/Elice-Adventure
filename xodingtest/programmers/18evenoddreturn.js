// 홀짝에 따라 다른 값 반환하기

function solution(n) {
  let result = 0;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i += 2) {
      result += Math.pow(i, 2);
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      result += i;
    }
  }
  return result;
}

// function solution(n) {
//   return Array.from({ length: n }, (_, i) =>
//     n % 2 === 0 ? Math.pow(2 * (i + 1), 2) : 2 * (i + 1)
//   ).reduce((acc, val) => acc + val, 0);
// }

// function solution(n) {
//   if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
//   else return (n * (n + 1) * (n + 2)) / 6;
// }