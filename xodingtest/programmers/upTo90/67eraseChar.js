const solution = (my_string, indices) => {
  const array = my_string.split('')
  const reverser = indices.sort((a, b) => b - a)
  reverser.map((_) => array.splice(_, 1))

  return array.join('')
}

function solution(my_string, indices) {
  let answer = ''

  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i]
    }
  }

  return answer
}
