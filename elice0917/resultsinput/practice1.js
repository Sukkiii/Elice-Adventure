const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
    console.log(line);
    // 한 줄 씩 입력받은 후 실행할 코드
    // 입력된 값은 line에 저장된다
    rl.close();
});

rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
});