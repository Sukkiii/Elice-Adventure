function solution(numLog) {
  let answer = [];
  for (let i = 0; i < numLog.length - 1; i++) {
    const sol = numLog[i + 1] - numLog[i];
    switch (sol) {
      case 1:
        answer.push("w");
        break;
      case -1:
        answer.push("s");
        break;
      case 10:
        answer.push("d");
        break;
      case -10:
        answer.push("a");
        break;
    }
  }
  return answer.join("");
}

function solution(numLog) {
  let answer = [];
  for (let i = 0; i < numLog.length - 1; i++) {
    const sol = numLog[i + 1] - numLog[i];
    if (sol === 1) answer.push("w");
    if (sol === -1) answer.push("s");
    if (sol === 10) answer.push("d");
    if (sol === -10) answer.push("a");
  }
  return answer.join("");
}

const differences = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
};

function solution(numLog) {
  return numLog.reduce(
    (result, curr, i) =>
      i === 0 ? result : result + differences[curr - numLog[i - 1]],
    ""
  );
}

function solution(numLog) {
  return numLog.reduce(
    (result, curr, i) =>
      i === 0 ? result : result + differences[curr - numLog[i - 1]],
    ""
  );
}
