function scrollUp(e) {
  const scrollbtn = document.querySelector('.scroll-top');

  scrollbtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
}
scrollUp("scroll-btn");

// function scrollUp(targetId) {
//   /*1. 함수를 적용할 target 변수 지정하기*/
//   const scrollbtn = document.getElementById(targetId);
//   /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
//   scrollbtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
//   });
// }
// scrollUp("scroll-btn");