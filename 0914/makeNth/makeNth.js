var myUl = document.querySelector("ul");

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.

// for(let i = 0; i <= 20; i++) {
//   const liElement = document.createElement('li');
//   //li tag가 없기때문에 tag를 새로 만들어야함
//   liElement.textContent = `${i}번째 문장`;
//   myUl.appendChild(liElement);
// }

// 풀이2)

for(let i = 0; i <= 20; i++) {
  const textNode = document.createTextNode(`${i}번째 문장`);
  myUl.appendChild(liElement);
  const liElement = document.createElement('li');
  liElement.appendChile(textNode);
}