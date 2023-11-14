// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let inputString = '';
// rl.on("line", (x) => {
//   let input = x.split('');
//   let N = parseint(input[0]);

//   for(let i=1; i<N; i++){
//     inputString += input[i]
//   }
//   console.log(inputString.join(''));
//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = '';
let N = 0;
let count = 0;

rl.on("line", (line) => {
  if (count === 0) {
    N = parseInt(line);
  } else {
    inputString += line;
    if (count === N) {
      console.log(inputString);
      rl.close();
    }
  }
  
  count++;
}).on("close", function () {
  process.exit();
});
