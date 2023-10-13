// 두 수의 연산값 비교하기

function solution(a, b) {
  const ab1 = a.toString() + b.toString();
  const ab2 = 2 * a * b;
  if (+ab1 >= ab2) return +ab1;
  else return ab2;
}

const solution = (a, b) => {
  return Math.max(Number(`${a}${b}`), a * b * 2);
};
