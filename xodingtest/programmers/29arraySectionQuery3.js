function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let rule = queries[i];
    let first = rule[0];
    let second = rule[1];
    [arr[first], arr[second]] = [arr[second], arr[first]];
  }
  return arr;
}

function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

function solution(arr, queries) {
  for (let [i, j] of queries) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function solution(arr, queries) {
  const swap = ([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  queries.forEach(swap);
  return arr;
}

function solution(arr, q) {
  q.map((a) => {
    let z = arr[a[0]];
    let b = arr[a[1]];
    arr[a[0]] = b;
    arr[a[1]] = z;
  });

  return arr;
}
