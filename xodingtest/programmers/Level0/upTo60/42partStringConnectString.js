function solution(my_strings, parts) {
  let answer = ''

  my_strings.forEach((str, i) => {
    const [s, e] = parts[i]
    answer += str.substring(s, e + 1)
  })
  return answer
}
