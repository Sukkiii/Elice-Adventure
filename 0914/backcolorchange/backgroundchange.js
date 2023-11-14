var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/
blockOne.addEventListener('mouseenter', e => {
  // blockOne.style.backgroundColor = "red";
  blockOne.classList.add('red');
});
blockTwo.addEventListener('mouseenter', e => {
  // blockTwo.style.backgroundColor = "gold";
  blockTwo.classList.add('yellow');
});
blockThree.addEventListener('mouseenter', e => {
  // blockThree.style.backgroundColor = "lightgreen";
  blockThree.classList.add('green');
});

blockOne.addEventListener('mouseout', e => {
  blockOne.classList.remove('red');
});
blockTwo.addEventListener('mouseout', e => {
  blockTwo.classList.remove('yellow');
});
blockThree.addEventListener('mouseout', e => {
  blockThree.classList.remove('green');
});
// blockThree.addEventListener('mouseout', e => {
//   e.target.classList.remove('green');
// });
// 이렇게 적용할 수 있음
