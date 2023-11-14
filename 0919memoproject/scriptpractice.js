// 기능을 쌓아가는 흐름을 잘 기억하도록 하기

// 1. 삭제 기능 만들기
// 1-1) list에 먼저 접근해야함
// > li위에 있는 부모 ul 태그의 class에 접근한다 (class="memos")
// > 여기서 memos를 선택하는 이유는: 똑같은 deleteBtn가 3개가 있기때문에 꼬일 수 있음
// > querySelector를 하는 이유는: 의미상으로 옳은 것인데, memos라고 하는 안에서의 내용변화에 정확하게 접근하기 위해서이다.
//   (변화된 내용에 접근하기에 유연하다. 전체 내용에서 변화될 수 있는 것들에서 인지하기에 querySelector가 조금 더 낫다. getElements~보다/ 우선 이만큼만 알고 넘어가기)

// 1-2) list에 click 이벤트 추가하기
// > 정확하게 trash-can icon을 눌렀을때만 삭제가 되야 함
// > classList = 전체의 class를 가지고 있는 어떤 집단
// > e.target 그 타겟의 부모요소로부터 삭제해줘라
// > e는 addEventListener가 발생되었을 때, click을 했을 때의 요소라고 생각하면 됨

// 1-3) 아래 코드처럼 querySelectorAll로 작성했을 경우도 가능하긴 함
// > querySelector는 첫번째 class를 가져오는데, All은 전체를 찾는것이긴 때문에 아래까지 다 내려가서 코드를 읽는것
// > 아래 문서가 끝날때까지 browser가 끝까지 전체를 읽기때문에 효율성, 최적화에 차이가 있음.
// 질문 실습 : querySelectorAll로 가져오면 메모가 추가됐을 때 이벤트가 발생안할 수도 있을까

const list = document.querySelector('.memos');

list.addEventListener('click', e => {
  if(e.target.classList.contains('deleteBtn')) {
    e.target.parentElement.remove();
  }
});

// const list = document.querySelectorAll('.delete');

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click',function(e) {
//         if(e.target.classList.contains('delete')){
//             e.target.parentElement.remove();
//         }
//     })
// }

// 2. 더하기 기능 만들기
// 
// 2-1) 제출했을 때, 데이터를 전송해주기 위해서 submit 이벤트를 사용

// 2-2) 새로고침을 방지하는 코드
// preventDefault > 없으면 페이지가 submit으로 새로고침이 되는 것
// 이전에 내가 작성했던 코드를 없애지 않겠다는 방지코드

// 2-3) 메모 저장하기에서 입력되는 memo를 불러오기
// > form의 input에서 name.value를 전송하는 것이다
// > 서버에 무엇인가를 전송하려고 할 때에는 태그 안의 name이 필요하다

// 2-4) submit 받은 memo를 li안에 넣어주어야 함
// > saveMemo라는 함수를 생성
// > list안의 하나의 태그를 통째로 복사해서 saveMemo의 html이라는 변수의 ``안에 넣어줘야함
// > 위의 이유는 add라고 하는 input 태그에서 전송된 값을 받아오기 위해서이다
// > saveMemo안에 memo라는 form을 넣어준다

// 2-5) saveMemo라는 함수안에 memoText의 매개변수를 받아주는 부분을 넣어주기
//  list.innerHTML += html; 내용이 쌓이도록 하기 위해서

// const addForm = document.querySelector('.add');

// addForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const memo = addForm.add.value;
//   // console.log(memo);
//   saveMemo(memo);
// });

// 2-6) 빈칸이 생기면 안되는 bug해결하기
// memo.length로 조건문 넣어주기
// 2-7) 메모 저장하기 아래부분에 메모를 작성하지 않고 enter를 입력했을 때,
// 경고문이 보이는 동작을 해보자
// > hidden이라는 class를 넣고 빼고 기능을 넣어야 함
// > 이번에는 id 자체에 접근해서 해보기
// 2-8) 근데 여기까지하면 또다른 bug가 생김 (hidden없앤 class가 안없어짐)
// > 정상적으로 입력해도 alertmsg가 남아있음
// > alertmsg.classList.add('hidden');
// 2-9) 입력했을때 입력창 없애주기
// addForm.add.value = '';
// memo = ""; 가 안되는 이유 copy한 값을 변수에 저장한거여서 안된것같습니다
// 값의 본질이 아니라서

const addForm = document.querySelector('.add');
const alertmsg = document.getElementById('alertmsg');

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const memo = addForm.add.value;
  // console.log(memo);
  // 메모가 존재한다면
  if (memo.length) {
    saveMemo(memo);
    alertmsg.classList.add('hidden');
    // memo = "";
    // memo === "";
    addForm.add.value = '';
  } else {
    alertmsg.classList.remove('hidden');
  }
});

const saveMemo = memoText => {
// function saveMemo(memoText) {}
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${memoText}</span>
    <i class="far fa-trash-alt deleteBtn"></i>
  </li>`
  list.innerHTML += html;
}

// 3. 메모에서 검색기능을 구현하기
// > 검색에는 통상적으로 2가지 방법이 있음
// 1) client side // server side
// > 검색한 내용, 키워드가 server에 전달. server컴퓨터가 내용, 키워드를 분석
// >>> 검색 결과 내용이 client에 전달
// 2) 페이지의 내용을 다 전달을 해줬을 때, 그 안에서 client가 따로 주어진 결과 안에서 검색을 새롭게 시도
// 우리가 하려는게 2번째 내용을 하려고 하는 것

// 3-1) header 안의 search class안의 input에 접근
// 3-2) keyup이라는 이벤트를 작성
// > 키를 놓을 때 이벤트가 발생 > 클릭하고 마우스에서 클릭을 뗐을때 (키보드도 마찬가지)
// > search라고 되어 있는 input tag를 그대로 가져옴
// console.log() 찾아보면 자판 하나하나 뗄떼마다 작성되는 것

const search = document.querySelector('.search input');

search.addEventListener('keyup', e => {
  const searchText = search.value;
  // console.log(searchText);
  filterMemo(searchText);
})

// 3-3) filter를 검색할 수 있는 무엇인가를 하나 만들어야 함
// filterMemo(searchText);
// > 이 만든 함수를 위에다가 넣어줘야 함
// > 직접적인 검색을 하기 전에 검색하는 범위를 인지하는 것이 우선
// > ul class 어디에서 어떤 내용을 검색할 것인지 > memo 내용들
// > ul이라고 하는 전체 list중에 하나하나의 list
// > 위에 const에서 list라고 그 list들의 부모를 따놨음
// > list.children이라고 list의 자식들을 array로 받아 보기

// 3-4) filter로 결과를 검출할 수 있도록 해줌 
// 3-5) 지웠을때 기존 code는 나오게 만들어야 함

const filterMemo = memo => {
  console.log(Array.from(list.children));
  
  Array.from(list.children)
    .filter((e) => !e.textContent.includes(memo))
    // 검색창에 입력된 내용들을 인지하기 시작하는 단계
    // 검색을 했으면 'A'라는 게 포함되지 않는 list들을 hidden 해야 함
    .forEach((e) => e.classList.add('filtered'));
    // 포함하지 않는 친구들에 filtered를 입혀줄 것
  Array.from(list.children)
    .filter((e) => e.textContent.includes(memo))
    .forEach((e) => e.classList.remove('filtered'));
  // 질문) memotext는 콜백의 매개변수 역할. 값을 받아주는 역할로 e로 해도 되는 매개변수의 역할
  // e대신 memod라던가 매개변수 아무거나 써도 상관없음
  }

// filter라고 자바스크립트에서 제공해주는 것을 이용
// mdn filter 검색해보기
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
