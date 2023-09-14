// HTML <li> 요소를 선택
var selectedItem = document.getElementsByTagName('li');
// 아이디가 'id'인 요소를 선택
var selectedItem = document.getElementById('id');
// 클래스가 'odd'인 요소를 선택
var selectedItem = document.getElementsByClassName('odd');
// name 속성값이 'first'인 요소를 선택
var selectedItem = document.getElementsByName('first');

// 아이디가 'even'인 요소를 선택
var selectedItem = document.getElementById('even');
// 선택된 요소의 텍스트 색상을 변경
selectedItem.style.color = 'red';

// 아이디가 'text'인 요소를 선택
var str = document.getElementById('text');
// 선택된 요소의 내용을 변경
str.innerHTML = '요소의 내용을 바꿉니다';

// queryselector를 통해 복잡한 구조 표현하기
// class = " category tMargin" 안의 class = "ribbon" 접근하기
document.querySelector('.category.tMargin > .ribbon')
// 그 안의 a 태그의 href 속성에 접근하기
document.querySelector('.category.tMargin > .ribbon > a').href

// HTML 문서의 모든 자식 노드 중에서 첫번째 노드의 이름을 선택
document.childNodes[0].nodeName;
// 아이디가 'heading'인 요소의 첫번째 자식 노드의 노드값을 선택
document.getElementById('heading').firstChild.nodeValue;
// 아이디가 'heading'인 요소의 첫번째 자식 노드의 타입을 선택
document.getElementById('heading').firstChild.nodeType;
