// 문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
  let answer = [];
  for (let i = 0; i < s; i++) {
    answer.push(my_string[i]);
  }
  for (let j = 0; j < overwrite_string.length; j++) {
    answer.push(overwrite_string[j]);
  }
  for (let k = s + overwrite_string.length; k < my_string.length; k++) {
    answer.push(my_string[k]);
  }
  console.log(answer);
  return answer.join("");
}

// 다른 풀이
// function solution(my_string, overwrite_string, s) {
//   return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);
// }
