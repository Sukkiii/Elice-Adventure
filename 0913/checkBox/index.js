let classList = document.getElementsByClassName('select');
// select 클래스를 가지고 있는 3개의 요소를 가져옴

function handleOnclick() {
  this.classList.toggle("on");
  // 선택된 요소에 on 클래스를 추가
}

// 가져온 3개의 요소에 이벤트 등록
for (let i = 0; i < classList.length; i++) {
  classList[i].addEventListener('click', handleOnclick);
}