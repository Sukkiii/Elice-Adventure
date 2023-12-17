const solution = (start, end_num) => {
  let answer = []
  for (let i = start; i >= end_num; i--) {
    answer.push(i)
  }

  return answer
}

const solution2 = (start, end_num) =>
  [...Array(start - end_num + 1)].map((_, index) => start - index)
