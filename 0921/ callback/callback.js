// 배달 주문이 들어옴. => 결제 => 결제완료 => 배달을 시작한다.

// function orderCallBack() {
//   //결제진행, 결제완료
//   console.log('결제 진행중');
//   setTimeout(() => {
//     console.log('결제 완료!');
//   }, 3000); // 1000이 1초 뒤에 setTimeout의 sth을 실행하는것
// }

// console.log('주문이 들어왔어요.');
// orderCallBack();
// console.log('배달시작');
// 원하는 시나리오는 주문들어왔어요 > 결재 진행중 > 3초 뒤 결재 완료 > 배달시작
// 그러나 비동기로 배달시작이 먼저 뜨게 됨
// 나의 실행순서와 프로그램이 결과를 내주는 순서와 동일하지 않음 > 비동기성

// 콜백 함수.
function orderCallBack() {
  //결제진행, 결제완료
  console.log('결제 진행중');
  setTimeout(() => {
    console.log('결제 완료!');
    setTimeout(() => {
      console.log('배달시작');
    }, 1000);
  }, 3000);
}

console.log('주문이 들어왔어요.');
orderCallBack();
// 원하는 시나리오대로 진행 됨
