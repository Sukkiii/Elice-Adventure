let text = 'echo';
console.log(text.charAt(0)); // 'e' 출력

text = 12345;
console.log(text.charAt(0));
// TypeError: text.charAt is not a function

let a;
a = 1;
a = 'b';

const sum = (a, b) => {
  return a + b;
}
sum(1, '2') // 12