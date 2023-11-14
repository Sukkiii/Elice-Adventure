
// 1. 아이디가 carrot 인 요소를 선택해서
// 2. carrot 버튼을 클릭했을 때,
// 3. '토끼가 나타났어요!' 라는 문장을 출력

let carrot_button = document.getElementById('carrot');

function whathappen () {
  document.getElementById('text').innerHTML = '토끼가 나타났어요!!';
}

carrot_button.addEventListener('click', whathappen);