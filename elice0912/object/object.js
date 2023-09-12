const user = {
  name: '홍길동',
  age: 30,
  email: 'test@test.com',
  address: '제주도 제주시',
  food: ['김치찌개', '제육볶음'],
  
  payment: function() {
    console.log('결재가 완료 되었습니다.');
    // return this.deliverystart();
  },
  deliverystart: () => {
    console.log('배달이 시작되었습니다.');
  }
// 화살표 함수로 매개변수 입력시 괄호안에 넣으면 됨
}

console.log(user.name);
console.log(user.age);
console.log(user.food[0]);
console.log(user.food[1]);

user.payment();
user.deliverystart();

// console.log('변경전');
// console.log(user);

// console.log('변경후');
// user.name = '수키';
// console.log(user);

// user = { name: 'hello' }
// console.log(user);
