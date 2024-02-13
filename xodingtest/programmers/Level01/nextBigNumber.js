const parseInt = (n) => {
  let count = 0
  n.toString(2)
    .split('')
    .map((n) => {
      if (n === '1') count++
    })
  return count
}

function solution(n) {
  for (i = n + 1; i < 1000000; i++) {
    if (parseInt(n) === parseInt(i)) {
      return i
    }
  }
}
