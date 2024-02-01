// 나의 풀이
function solution(my_string, index_list) {
  let answer = "";

  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

//map 함수 이용
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
