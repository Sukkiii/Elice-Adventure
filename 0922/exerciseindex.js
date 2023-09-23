// function varFor () {
//   for (var i = 0; i < 3; ++i) {
//     setTimeout(() => console.log('i: ', i), 0);
//   }
// }

// function letFor () {
//   for (let i = 0; i < 3; ++i) {
//     setTimeout(() => console.log('i: ', i), 0);
//   }
// }

// varFor();
// letFor();

// f2();                            // 1번

// var f = function() {
//   console.log('function 1');
//   console.log('f3: ', f3);       // 2번
// };

// f();                             // 3번

// let f4 = () => console.log('function 4');

// function f2() {
//   console.log('function 2');
//   f4();                          // 4번
// }

// var f3 = () => console.log('function 3');

// const targetURL = 
//   "https://www.naver.com";
// const windowSize = 
//   `height=${window.innerHeight},width=${window.innerWidth}`;
// window.open (
//   targetURL, 
//   "Target", 
//   windowSize
// );

// function printDocumentInfo() {
//   console.log('문서 URL:',document.URL);
//   console.log('문서 URL:',document.title);
//   console.log('문서 URL:',document.querySelectorAll('*'));
// }

// function createTodoList(todos) {
//   return todos
//     .map((todo) => {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(todo))
//     return li;
//     })
//     .reduce((ul, li) => {
//       ul.appendChild(li);
//       return ul;
//     }, document.createElement('ul'))
//     // map : todo를 받아 li의 자식 태그로 추가한다
//     // reduce : ul태그의 하위 태그로 li 자식태그 계속 추가
// }

// function changeToUsd(krw) {
//   const rate = 1046;
//   return (krw/rate).toFixed(2);
// }

// const krw = 1000000;
// console.log(changeToUsd(krw));

// function formatNumber(n) {
//   if(isNaN(n)) return '0';
//   return Number(n).toFixed(2);
// }

// formatNumber('12.345') // 12.35

// function getMaxDiff(nums) {
//   return Math.max(...nums) - Math.min(...mins)
// }

// getMaxDiff([-1, -4, -7, 11]) // 11-(-7)= 18

// function getRandomNumInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Array.from({length: 10}).map(() =>
//   getRandomNumInRange(50, 100))

// function isWeekend(today) {
//   let day = today.getDay();
//   return day === 0 || day === 6;
// }

// console.log(isWeekend(new Date('2023/9/22')));

// function addDays(date, days) {
//   date.setDate(date.getDate() + days)
//   return date.toDateString()
// }

// addDays(new Date('2023/9/22'), 100);
// // 'Sun Dec 31 2023'

// function timeDiff(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// let dayTime = 60 * 24 * 60 * 1000;
// function fromNow(date) {
//   let diff = timeDiff(date, new Date());
//   return `${Math.floor(diff/dayTime)} days ago...`;
// }

// fromNow(new Date('2023/9/1')) // '21 days ago'

// function toUserList(uesrs) {
//   return uesrs
//     .filter((user) => !user.includes('Admin'))
//     .map((user) => user.trim().toUpperCase())
//     .map((user)=> `<li>${users}</li>`)
//     .join('')
// }

// console.log(toUserList(['Daniel','Tom','Johnny','Admin']))
// // <li>DANIEL</li> <li>TOM</li> <li>JOHNNY</li>

// 'Daniel,Kim,SW'.split(',');
// // ['Daniel','Kim','SW']
// 'Daniel,Kim,SW'.replace(',','');
// // 'Daniel Kim,SW'
// 'Daniel,Kim,SW'.inclues('Kim');
// // true
// 'Daniel,Kim,SW '.trim();
// // 'Daniel,Kim,SW'
// 'Daniel,Kim,SW'.indexOf('Kim');
// // 7

// JSON.stringify({ name: 'Daniel', age: 12});
// // '{"name":"Daniel","age":12}'
// JSON.parse('{"name":"Daniel","age":12}');
// // {name: 'Daniel', age: 12}
