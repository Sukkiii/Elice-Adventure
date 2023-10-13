// 코드 처리하기

function solution(code) {
  let mode = 0;
  let ret = [];
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] !== "1" && i % 2 === 0) {
        ret.push(code[i]);
      }
      if (code[i] === "1") {
        mode = 1;
      }
    } else {
      if (code[i] !== "1" && i % 2 === 1) {
        ret.push(code[i]);
      }
      if (code[i] === "1") {
        mode = 0;
      }
    }
  }
  return ret.length === 0 ? "EMPTY" : ret.join("");
}
