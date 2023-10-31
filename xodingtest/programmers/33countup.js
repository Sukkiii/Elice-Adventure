function solution(start_num, end_num) {
  let arr = [];

  for (let i = start_num; i <= end_num; i++) {
    arr.push(i);
  }
  return arr;
}
// 가장 기본

function solution(start_num, end_num) {
  return Array.from(
    { length: end_num - start_num + 1 },
    (_, index) => start_num + index
  );
}
// 간결 코드
