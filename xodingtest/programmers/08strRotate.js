// 문자열 돌리기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  const array = line.split("");
  const newArray = array.map((char) => char + "\n");
  console.log(newArray.join(""));
});

// // 다른 풀이1
rl.on("line", function (line) {
  const array = line.split("");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
    result += "\n";
  }
  console.log(result);
});

// // 다른 풀이2
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  for (let i of str) {
    console.log(i);
  }
});

// // 다른 풀이3
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  [...str].forEach((c) => console.log(c));
});

//다른 풀이4
rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  [...str].map((x) => console.log(x));
});
