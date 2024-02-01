const solution = (arr) => {
  const transform = (n) =>
    n >= 50 && n % 2 === 0 ? n / 2 : n < 50 && n % 2 === 1 ? n * 2 + 1 : n

  let count = 0
  let currentArr = [...arr]
  let nextArr = currentArr.map(transform)

  while (JSON.stringify(currentArr) !== JSON.stringify(nextArr)) {
    currentArr = nextArr
    nextArr = currentArr.map(transform)
    count++
  }

  return count
}
