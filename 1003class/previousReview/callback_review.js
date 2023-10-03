// callback -> 함수 실행 뒤에 또다른 함수를 실행시킨다.

// const words = ['a', 'abc', 'abcdefg'];

// const result = words.filter((word) => word.length > 6);
// filter가 words 배열에서 결과를 word에 넣어 길이가 6이상인 코드만 result로 집어넣어줌

// console.log('주문이 들어왔어요')

// function orderCallBack() {
//   console.log('결재 진행중');
//   setTimeout(() => {
//     console.log('결재완료');
//   }, 3000);
// }

// orderCallBack();
// console.log('배달시작');

// => 주문이 들어왔어요, 결재 진행중, 배달시작, 결재완료로 나오게 되어버림

console.log('주문이 들어왔어요')

function orderCallBack() {
  console.log('결재 진행중');
  setTimeout(() => {
    console.log('결재완료');
    setTimeout(() => {
      console.log('배달시작');
      setTimeout(() => {
        console.log('배달이 완료되었습니다');
        setTimeout(() => {
          console.log('배달 수당이 지급되었습니다.')
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
}

orderCallBack();

// 이렇게 해야 순서대로 진행됨 >> callBackHell이라고도 함
// callBack chain
