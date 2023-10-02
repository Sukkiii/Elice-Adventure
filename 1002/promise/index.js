//1. new Promise() 메소드를 호출해서 Promise를 생성하세요.
new Promise(function (resolve, reject) {
  resolve();
});

//2. new Promise()를 호출할 때 콜백 함수의 인자를 resolve, reject로 선언하세요.
function getData() {
  return new Promise(function (resolve, reject){
    var data = 'javascript promise';
    resolve(data);
  });

  //resolve를 실행해서 아래 선언된 메시지(data)를 resolve 인자 값으로 넘기세요.
//   var data = 'javascript promise';
}
// then을 이용해서 resolve()의 결과 값 data를 resolvedData로 받습니다.
getData().then(function (resolvedData) {
  document.write(resolvedData);
});
