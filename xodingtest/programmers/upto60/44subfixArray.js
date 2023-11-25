function solution(my_string) {
  var answer = []

  my_string.split('').forEach((_, i) => {
    answer.push(my_string.substring(i))
  })
  return answer.sort()
}

function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort()
}
