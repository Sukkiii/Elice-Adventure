const link = document.querySelector('a');
console.log(link.getAttribute('href'));
// querySelector는 a태그로 접근하고, getAttribute는 href로 접는 하는 이유
// getAttribute는 속성을 가져오라는 명령이라 태그명은 사용할 수 없음
// a는 태그고, href는 속성이라서 그럼
link.setAttribute('href', 'https://www.google.com');
link.innerHTML = '역시 검색은 구글이지';