// 문자열 섞기

function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}

function solution(str1, str2) {
  return [...str1].reduce((prev, char, i) => prev + char + str2[i], "");
}

function solution(str1, str2) {
  let result = [];
  
  for(let i = 0; i < str1.length; i++) {
    result.push(str1[i]);
    result.push(str2[i]);
  }
  return result.join('');
}