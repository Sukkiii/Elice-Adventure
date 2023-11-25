function solution(my_strings, n) {
  return my_strings.substring(my_strings.length - n, my_strings.length)
}

function solution(my_string, n) {
  return my_string.substring(my_string.length - n)
}

function solution(my_string, n) {
  var answer = my_string.slice(-1 * n)
  return answer
}
