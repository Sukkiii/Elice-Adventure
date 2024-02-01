// 내 풀이
function solution(a, b, c, d) {
  // a b c d를 배열로 재배열 해야하지 않을까?
  let start = [a, b, c, d];
  let arr = start.sort();
  const first = arr[0];
  const sec = arr[1];
  const third = arr[2];
  const last = arr[3];

  if (first === last) {
    return first * 1111;
  } else if (first === third && first !== last) {
    return Math.pow(10 * first + last, 2);
  } else if (first !== sec && sec === last) {
    return Math.pow(10 * last + first, 2);
  } else if (first === sec && sec !== third && third === last) {
    return (first + last) * (last - first);
  } else if (first !== sec && sec !== third && third !== last) {
    return first;
  } else if (first === sec && sec !== third && third !== last) {
    return third * last;
  } else if (first !== sec && sec === third && third !== last) {
    return first * last;
  } else if (first !== sec && sec !== third && third === last) {
    return first * sec;
  }
}

// 가독성 좋은 코드 정렬 풀이
function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}
