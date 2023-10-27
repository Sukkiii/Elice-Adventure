function solution(arr, queries) {
  queries.map(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i]++;
      }
    }
  });
  return arr;
}

function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;
}
