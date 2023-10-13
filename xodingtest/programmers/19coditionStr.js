// 조건 문자열

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


const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};
function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

// 좋은 아이디어 인 것 같다.
function solution(ineq, eq, n, m) {
  var str = (n + ineq + eq + m).replace("!", "");
  var answer = eval(str) ? 1 : 0;
  return answer;
}
