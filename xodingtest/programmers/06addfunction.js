// 덧셈식 출력하기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    `${Number(input[0])} + ${Number(input[1])} = ${
      Number(input[0]) + Number(input[1])
    }`
  );
});

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = line.split(" ");
// }).on("close", function () {
//   const a = Number(input[0]);
//   const b = Number(input[1]);
//   console.log(`${a} + ${b} = ${a + b}`);
// });
