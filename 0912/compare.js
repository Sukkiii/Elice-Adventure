let a = 100;
let b = 1;
let c = 3;
let d = 10;

// function Add() {
//   console.log(a);
// }

function Add(a, b) {
  console.log(a + b);
}

// Add();
Add(a, b);
Add(c, d);

let category = 1;

// 상의, 하의, 신발, 액세서리
// data type => String
// 하의 픽.

// 굳이 switch문을 쓰는 이유 > 가격대별로 분류 지정할 때 switch case문이 용의
// 숫자로 지정하는 이유는 String은 기본적으로 컴퓨터가 읽는 값이 숫자보다 크기 때문에
// Number 데이터 타입을 통해서 분류하는 것이 데이터를 덜 잡아먹음.
function Category(category) {
  switch (category) {
    case 0:
      console.log('상의를 선택했습니다')
      break;
    case 1:
      console.log('하의를 선택했습니다')
      break;
    case 2:
      console.log('신발을 선택했습니다')
      break;
    case 3:
      console.log('액세서리를 선택했습니다')
      break;
  }
}

Category(1);
Category(2);
Category(0);

// if (category === 1) {
//   console.log("하의야")
// }
// if (category === 2) {
//   console.log("상의야")
// }
