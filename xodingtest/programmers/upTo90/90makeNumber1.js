const solution = (num_list) => {
  const make1 = (n, count) => {
    if (n === 1) {
      return count
    } else if (n % 2 === 0) {
      return make1(n / 2, count + 1)
    } else {
      return make1((n - 1) / 2, count + 1)
    }
  }

  let totalCount = 0
  num_list.forEach((_) => (totalCount += make1(_, 0)))

  return totalCount
}

function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c)
}
