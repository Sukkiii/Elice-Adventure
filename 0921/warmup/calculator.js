function Calculator(a, b) {
  this.a = a;
  this.b = b;
  // 생성자를 사용하면 메모리라는 영역을 활용하게 되는것.
  // 생성자에 this를 넣는 이유는 결국 객체를 만들어쓸거기 때문에 그 객체를 지칭해줄려고 쓰는것이다

  this.sum = () => {
    return this.a + this.b;
  }
  this.sub = () => {
    return this.a - this.b;
  }
  this.mul = () => {
    return this.a * this.b;
  }
  this.div = () => {
    return this.a / this.b;
  }
}

let math = new Calculator(6, 3);
// 메모리의 영역에 접근
// > new는 메모리 주소에 할당되어 있는 누군가를 새롭게 접근하겠다는 얘기
// Calculator는 + - * / 를 한번에 접근할 수 있음
let math2 = new Calculator(8, 2);
// 위의 math, math2는 같은 친구일까 다른친구일까
// Calculator라고 하는 기능은 같지만,
// 각자가 참조해서 가는 영역이 다른 것

console.log(math.sum());
console.log(math.div());
console.log(math2.sum());
console.log(math2.div());
// 여기서 math.sum() 뒤에 괄호를 넣어줘야 함.
// 안넣어주면 함수 자체를 호출함.

function sum1(a, b) {
  return a + b;
}
function sum2(a, b) {
  this.a = a;
  this.b = b;

  return a + b;
}
// 여기서 아래 함수가 더 좋은거다는 아님

// Math Mdn 문서
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
// Math.PI 문서
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/PI