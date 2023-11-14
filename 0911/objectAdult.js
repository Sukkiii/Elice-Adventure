//객체들로 이루어진 배열을 받아서 성인만 골라내는 함수 만들기

// 지시사항에 따라 코드를 작성합니다.
function getOnlyAdults (inputA) {
  let adultsArray = [];
  for (let i=0; i < inputA.length; i++) {
    if (inputA[i].age >= 20) {
      adultsArray.push(inputA[i].name);
    }
  } return adultsArray;
}

let inputA = [{
  name: "박태환",
  age: 36
}, 
{
  name: "유재석",
  age: 50
},
{
  name: "김강훈",
  age: 13
},
{
  name: "이지원",
  age: 16
}]

module.exports = { inputs: [inputA], func: getOnlyAdults }
