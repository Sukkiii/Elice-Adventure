function getAllParaElems() {
  let allCount = document.getElementsByTagName('p');
  // p태그 갯수 = 메뉴의 개수 세기
  var num = allCount.length;
  alert("전체 메뉴 종류는 " + num + " 개 입니다.");
//   console.log(allCount);
//   console.log(allCount.length);
//   console.log(typeof allCount);
}

function div1ParaElems() {
  let coldbrew = document.getElementById('coldbrew');
  let coldbrewCount = coldbrew.getElementsByTagName('p');
  var num = coldbrewCount.length;
  alert("커피 음료 종류는 " + num + " 개 입니다.");
}

function div2ParaElems() {
  let espresso = document.getElementById('espresso');
  let espressoCount = espresso.getElementsByTagName('p');
  var num = espressoCount.length;
  alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
}
