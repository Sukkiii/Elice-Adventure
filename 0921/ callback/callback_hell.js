// callback hell.

// 주문이 들어오고 >> 결재진행중 >> 결제완료 ::: 1번 시나리오
// 배달 시작 >> 배달이 완료 >> 배달 수수료 3000원 받음


// 1번 시나리오
console.log('주문이 들어왔습니다.');
// 콜백지옥을 해결하기 위해 promise가 나옴
function orderCallBack() {
  console.log('결재 진행 중....');
  setTimeout(() => {
    console.log('결제 완료')
    // 2번 시나리오
    setTimeout(() => {
      console.log('배달 시작');
      setTimeout(() => {
        console.log('배달이 완료!');
        setTimeout(() => {
          console.log('배달 수수료 3000원을 입금합니다.');
        }, 2000);
      }, 5000);
    }, 1000);
  }, 3000);
}

orderCallBack();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
// callback 지옥과 관련해서 이를 해결하기 위해 promise가 나왔다
