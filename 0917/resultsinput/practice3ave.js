const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  var input = line.split(' ').map((el) => parseInt(el));
  var sum = 0;
  for(let i=0; i<input.length; i++) {
    sum += input[i];
  }
  const average = Math.floor(sum/3);
  console.log(average);

  rl.close();
}).on("close", function () {

});
