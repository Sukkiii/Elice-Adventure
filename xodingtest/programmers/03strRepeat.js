// 문자열 반복해서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(input[0].repeat(input[1]))
});

// .on('close', function () {
//   let repeat = input[0];
// 	let n = +input[1];

// 	let result = '';
// 	Array(n).fill(str).forEach(item => {
// 		result += item;
// 	});
// 	console.log(result);
// });

// .on('close', function () {
//   let repeat = input[0];
// 	let n = +input[1];

//   const result = Array(n).fill(str).map(item => item).join('');

// 	console.log(result);
// });