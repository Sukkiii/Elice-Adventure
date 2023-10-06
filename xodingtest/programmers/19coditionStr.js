function solution(ineq, eq, n, m) {
  let result;
  if (eq === "!") {
    result = `${n}${ineq}${m}`;
  } else {
    result = `${n}${ineq}${eq}${m}`;
  }

  if (eval(result)) {
    return 1;
  } else {
    return 0;
  }
}
