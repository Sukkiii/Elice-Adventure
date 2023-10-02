// let a = 10
// console.log('a : ', a)

// function foo(num) {
//   for (let i = 0; i < 10; ++i) {
//     console.log(num)
//   }
// }

// foo(num)

// let a = 10

// setTimeout(function callback() {
//   console.log('a: ', a)
// }, 3000)

// console.log('Finished')

// //타이머 비동기 처리
// setTimeout(() => console.log('타이머 끝'), 1000)
// setInterval(() => console.log('인터벌 타이머'), 1000)

// //네트워크 처리
// fetch('https://google.com')
//   .then(() => console.log('네트워크 요청 성공.'))
//   .catch(() => console.log('네트워크 요청 실패.'))

// request('user-data', (userData) => {
//   console.log('userData 로드')
//   saveUsers(userData)
// });

// console.log('DOM 변경')
// console.log('유저 입력')

// setTimeout(() => {
//   console.log('타임아웃1');
// }, 0);

// Promise.resolve().then(() => console.log('프로미스1'));

// setTimeout(() => {
//   console.log('타임아웃2');
// }, 0);

// Promise.resolve().then(() => console.log('프로미스2'));

// // 프로미스1 프로미스2
// // 타임아웃1

// let promise = new
// Promise((resoleve, reject) =>
// {
//   if(Math.random() < 0.5) {
//     return reject('실패')
//   }
//   resoleve(10)
// })

// promise
//   .then(data => {
//     console.log('성공:', data)
//   })
//   .catch(e => {
//     console.log('실패:', e)
//   })
//   .finally(() => {
//     console.log('promise 종료')
//   })

// promise
//   .then(data => {
//     return fetchUser(data)
//   })
//   .then(user => {
//     console.log('User : ', user)
//   })
//   .catch(e => {
//     console.log('실패:', e)
//   })

// Promise
//   .resolve(10)
//   .then(console.log)

// Promise
//   .reject('Error')
//   .catch(console.log)

Promise.all([
  promise1,
  promise2,
  promise3
])
  .then(values => {
    console.log('모두 성공:', values)
  })
  .catch(e => {
    console.log('하나라도 실패:', e)
  })

setTimeout(() => {
  console.log('Hi')
}, 10000)

// 비동기 api가 작동을 해서 이 함수를 어떤 q에 저장해서
// 자바스크립트 엔진이 아닌 별도의 환경에서 동작 > 그 별도의 환경이 10초 뒤에 task queue에 넣고 실행을 해야한다고 알림
// 자바스크립트 메인 스레드는 task queue를 확인해서, 아무것도 없을 때 동작
