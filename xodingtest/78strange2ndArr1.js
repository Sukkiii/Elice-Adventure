const solution = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  )

const solution2 = (n) => {
  var answer = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0)
    }
    answer.push(row)
  }
  return answer
}
