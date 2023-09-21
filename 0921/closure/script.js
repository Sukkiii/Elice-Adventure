// let l0 = '10';

// function fn2() {
//   let l2 = 'l2';
//   console.log(l0, l1, l2);
// }

// function fn1() {
//   let l1 = 'l1';
//   console.log(l0, l1);
//   fn2();
// }

// fn1();

// 이렇게 쓰면 l1이 정의되어 있지 않다고 뜨게 됨

// Breakpoints > 중단점 디버깅에서 일시정지 시켜줌
// 브레이킹을 걸면 브라우저가 break를 걸어줌

// 넘어가는 화살표 양쪽에 넘어가는 화살표를 누르면

// 5번째 줄에서 l1부분만 아무것도 뜨지 않는것을 볼 수 있음.
// > l1은 function l2에서 불러오지 않는것

let l0 = '10';

function fn1() {
  function fn2() {
    let l2 = 'l2';
    console.log(l0, l1, l2);
  }
  let l1 = 'l1';
  console.log(l0, l1);
  fn2();
}

fn1();

// 함수안에 함수를 집어넣어서 호출을 해주는 형태 : closure