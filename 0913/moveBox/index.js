function move() {

  let box = document.getElementById('move');
  box.style.width = "600px";
  box.style.height = "600px";
  box.style.left = "300px";
};
// move 함수 설명
// 일단 Id가 'move'인 속성을 찾아서 box라는 변수로 넣음
// 변수 box의 style은 width, height, left가 변경되는 것

let btn = document.getElementById('btn');
// btn 변수에 Id가 'btn'인 속성을 찾아서 넣어줌

btn.addEventListener("click", move);  
// btn을 click을 하면 move함수가 실행되어서 box 요소가 위치와 크기를 변경하게 됨