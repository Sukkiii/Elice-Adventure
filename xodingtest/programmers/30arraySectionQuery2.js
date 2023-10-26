function solution(arr, q) {
  let result = [];

  q.map((range) => {
    let newArr = arr.slice(range[0], range[1] + 1);
    let a = range[2];

    let plus = -1;

    newArr.map((num) => {
      if (num > a) {
        if (plus === -1 || num < plus) {
          plus = num;
        }
      }
    });

    result.push(plus);
  });

  return result;
}

function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
