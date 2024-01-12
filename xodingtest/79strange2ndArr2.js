const solution2 = (arr) => {
  const n = arr.length

  const isRight = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] !== arr[j][i]) {
          return 0
        }
      }
    }
    return 1
  }
  return isRight()
}

const solution = (arr) =>
  arr.every((row, i) => row.every((v, j) => v === arr[j][i])) ? 1 : 0
