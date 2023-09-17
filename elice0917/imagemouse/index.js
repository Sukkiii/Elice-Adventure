/*지시사항을 따라 작성해주세요*/
const image = document.getElementsByClassName('zoom-img')[0];

function zoomIn() {
  // 지시사항 1-1
  image.style.transform = 'scale(1.2)';
  image.style.transition = 'all 0.5s';
}

function zoomOut() {
  // 지시사항 1-2
  image.style.transform = 'scale(1)';
  image.style.transition = 'all 0.5s';
}

// image함수에 해당 이벤트 추가
image.addEventListener('mouseenter', zoomIn);
image.addEventListener('mouseleave', zoomOut);
