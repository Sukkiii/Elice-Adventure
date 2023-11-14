const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  var result = line.split(' ');
  console.log(result.join('\n'));

  rl.close();
}).on("close", function () {

});
