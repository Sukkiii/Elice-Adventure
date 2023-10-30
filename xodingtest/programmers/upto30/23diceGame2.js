function solution(a, b, c) {
  let multi1 = a + b + c;
  let multi2 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
  let multi3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);

  if (a === b && b === c) {
    return multi1 * multi2 * multi3;
  } else if (a !== b && b !== c && a !== c) {
    return multi1;
  } else if (a === b || b === c || a === c) {
    return multi1 * multi2;
  }
}

const solution = (a, b, c) => {
  const set = new Set([a, b, c]);
  switch ([...set].length) {
    case 1:
      return calculate([a, b, c], 3);
    case 2:
      return calculate([a, b, c], 2);
    case 3:
      return calculate([a, b, c]);
  }
};

const calculate = (inc, n = 1) => {
  const [a, b, c] = inc;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }

  return result;
};
