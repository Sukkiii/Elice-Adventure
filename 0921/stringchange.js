/*
1. 
getReverse 함수를 return 문 한 줄로 작정하세요.
input: "Happy Thanksgiving!"
output: "!gnivigsknahT yppaH"
*/
function getReverse(s) {
  return s.split('').reverse().join('');
}

console.log(getReverse('Happy Thanksgiving!'));

/*
2.
groupByCommas 함수는 입력값의 3자리 단위씩 컴마로 묶어서 반환합니다.
return 문 한 줄로 작정하세요.
intput:2443243
output: 2,443,243
*/
function groupByCommas(n) {
  return n.toLocaleString();
}
console.log(groupByCommas(2443243));
/*
3.
getMiddle 함수는 input String s의 중간에 있는 문자열을 반환합니다.
이 때 s의 길이가 짝수라면 가운데 두글자를 반환하고 홀수라면 문자 1개만 반환합니다.
return 문 한 줄로 작정하세요.
intput: eliceacademy
output: ac
intput: christmas
output: s
*/
function getMiddle(s) {
  let textlength = '';
  if(s.length%2 === 0){
    textlength = s.substr(s.length/2, 2);
  } else {
    textlength = s.substr(Math.floor(s.length/2), 1);
  }
  return textlength;
}

console.log(getMiddle('christmas'));
