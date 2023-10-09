// 자주 사용되는 문법 - let,const

var TITLE = 'NODE.JS';
var director = "sukki";
director = 'bear';
TITLE = 'ES6'

const TITLE = "NODE.JS";
let director = "sukki";
director = "bear";
TITLE = "ES6"; // 오류 발생

// 자주 사용되는 문법 - Template String

var name = 'sukki';
var age = 5;
// +를 사용해 문자열과 변수 연결
// 줄 바꿈 문자 \n 사용 필요
var hi = 'My name is ' + name +
          '.\n I\'m ' + age + 'years old.';
console.log(hi);

const name = 'sukki';
const age = 5;
// 문자열 사이에 간단하게 변수 사용 가능
// 따옴표 간단하게 사용 가능
// 줄 바꿈 지원
const hi = 
  `My name is ${name}.
  I'm ${age} years old.`;
console.log(hi);

// 자주 사용되는 문법 - arrow function

// 기본 함수 표현 방법
function doSomething(param) {
  console.log('do something');
}

// 익명 함수 표현 방법
setTimeout(function(param) {
  console.log('no name function');
}, 0)

// 함수 새로 선언 가능
function doSomething () {
  console.log('do other');
}

// 상수형으로 표현 가능
const doSomething = (param) => {
  console.log('do something');
}

// 익명함수 간결하게 표현 가능
setTimeout((param) => {
  console.log('no name function');
}, 0)

// 함수 새로 선언 불가능
doSomething = () => {
  console.log('do other');
}

// 자주 사용되는 문법 - class

function Model(name, age) {
  this.name = name;
  this.age = age;
}
// prototype으로 class 함수 구현
Model.prototype.getInfo = function() {
  console.log(this.name, this.age);
}
var model = new Model('sukki', 5);
model.getInfo();

// 일반적인 형태의 class 구현 가능
class Model {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(this.name, this.age);
  }
}
const model = new Model('sukki', 5)
model.getInfo();

// 자주 사용되는 문법 - destructing

var obj = {name: 'sukki', age: 5};
var name = obj.name;
var age = obj.age;

var arr = ['some', 'values'];
var first = arr[0];
var secone = arr[1];

const obj = {name: 'sukki', age: 5};
// Object의 key와 같은 이름으로 변수 선언 가능
const { name, age } = obj;
// 다른 이름으로 변수 선언하는 방법
const { name: n1, age: a1 } = obj;

const arr = ['some', 'values'];
// arr에서 순차적으로 변수 선언 가능
const [first, second] = arr;

// 자주 사용되는 문법 - promise, async - await