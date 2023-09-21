const now = new Date();
// new Data에 새롭게 접근 > new를 가져와서 새롭게 활용을 하겠다. 라는 의미
// 
console.log(now);

console.log('getFullyear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDay: ', now.getDay());
// 일월화수목 0 1 2 3 4
// mdn에서 검색해보기 왜 이렇게 찍힐까?
console.log(now.toLocaleString());

let kwon = {
  name: '권',
  age: 27,
}

console.log(kwon);
console.log(kwon.age);

// let smartphone = {
//   company: 'apple',
//   price: 2000,
// }

// let samsung = {
//   company: 'samsung',
//   price: 3000,
// }

// 이런식으로 작성해야 하는데, 쓰는 형태가 회사, 가격만 사용해도 된다면?
// 비효율 적이라고 볼 수 있음

// 생성자
function User(name, age) {
  this.name = name;
  this.age = age;
}

let newName = new User('Lee', 10);
let kim = new User('kim', 40);

console.log(newName);
console.log(kim);

