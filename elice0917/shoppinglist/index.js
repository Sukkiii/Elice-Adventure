var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//1. `addItem(e) {}` 함수 내에  id="item" 에 입력된 input 값을 `<li> 태그`로 추가합니다.
//2. 이 때, li 를 생성해서 `appendChild()`와   `.createTextNode(`) 를 사용합니다.
//3. 아이템이 생성된 동시에 삭제 버튼도 `appendChild()`를 사용해서 li에 추가합니다. ( `itemList`에 생성된 li를 추가합니다.)
function addItem(e) {
  e.preventDefault();

  const newItem = document.getElementById('item').value;
  //input값을 가져오는 코드 
  const li = document.createElement('li');
  // li 요소를 만드는 코드
  li.className = 'list-group';
  // li 태그의 class 이름 생성
  li.appendChild(document.createTextNode(newItem));
  // input value를 자식 코드로 추가하는 코드 

  const deleteButton = document.createElement('button');
  // 삭제 버튼 추가
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  // 삭제 버튼의 class 명 생성
  deleteButton.appendChild(document.createTextNode('삭제'));
  // '삭제'라는 값을 가진 text 자식 node 추가
  li.appendChild(deleteButton);
  // li안에 이 deleteButton을 자식 노드로 추가
  itemList.appendChild(li);
  // 지금까지 만든 li가 items인 요소의 자식 노드로 들어감. 즉, itemList에 들어가서 쇼핑 리스트를 만드는 것
}

//5. `removeItem(e) {}` 함수 내에 작성합니다.
//6. index.html에`btn btn-danger btn-sm float-right delete` 로 태그된 delete 버튼을 click 하게 될 경우  itemList에서 제거합니다. 이 때 removeChild()를 사용합니다.
function removeItem(e) {
  // removeItem은 click 이벤트에 등록되어 있는 상태 (js:8)
  if (e.target.classList.contains('delete')) {
    //e.target의 클래스명에 delete가 포함되어 있으면?
    if (confirm('Are you sure?')) {
    // confirm을 이용해서 확인, 취소 2개의 버튼이 있는 모달을 띄웠을때, 확인이 눌린다면
      const li = e.target.parentElement;
      // 이벤트의 부모 노드를 가져오는 코드
      itemList.removeChild(li);
      // 위에서 가져온 부모노드를 아이템 리스트에서 제거
    }
  }
}

//아이템 진열하기
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
