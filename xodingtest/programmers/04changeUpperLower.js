// 대소문자 바꿔서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
})
// .on('close',function(){
//     str = input[0];
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= 'a' && str[i] <= 'z') {
//             result += str[i].toUpperCase();  
//         } else {
//             result += str[i].toLowerCase();
//         }
//     }
//     console.log(result);
// });

// .on('close',function(){
//     str = input[0].split('');
//     str.forEach((value, index) => {
//         if (value === value.toUpperCase()) {
//             str[index] = value.toLowerCase();
//         } else {
//             str[index] = value.toUpperCase();
//         }
//     });
//     console.log(str.join(''));
// });

.on('close', () => {
  console.log(
    input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),
  );
});