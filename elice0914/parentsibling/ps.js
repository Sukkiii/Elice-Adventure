const list = document.querySelector('ul');

console.log(list.children);
console.log(Array.from(list.children));
//iterable object 자바스크립트에서 인지하고 있는 object

Array.from(list.children).forEach(child => {
  child.classList.add('movie-name')
})
// 배열 마다! 라는 의미로 for문으로 array에 있는것을 하나씩 찍어봐라

// 부모의 태그에 접근해서 위/아래에 접근하는 방식
const moviecenter = document.querySelector('.middle');

console.log(moviecenter.parentElement);
console.log(moviecenter.parentElement.parentElement);
console.log(moviecenter.nextElementSibling);
console.log(moviecenter.previeousElementSibling);