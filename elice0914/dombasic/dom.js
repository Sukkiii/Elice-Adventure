const chicken = document.querySelector('p');
// p태그를 가진 친구들을 선택해서 chicken이라는 변수에 넣는 것
// console.log(chicken);
chicken.innerText = '황금 양반 후반';

const all = document.querySelectorAll('p');
// console.log(all);]

const classcheck = document.querySelector('.best');
// console.log(classcheck);

const para = document.querySelector('body > h3');
const inheriate = document.querySelector('div > p');
console.log(inheriate);
console.log(para);

const content = document.querySelector('.content');
content.innerHTML += '<h2>올해 최고의 치킨은?</h2>';

inheriate.innerHTML = '치키치키붐붐';
// tag id, class
// const bbq = document.getElementById('bbq');
// const hoocham = document.getElementsByClassName('hoocham');
