const solution = (arr) =>
  arr.map((n) =>
    n >= 50 && n % 2 === 0 ? n / 2 : n < 50 && n % 2 === 1 ? n * 2 : n
  )

const solution2 = (arr) =>
  arr.map((n) => {
    if (n >= 50 && n % 2 === 0) {
      return n / 2
    } else if (n < 50 && n % 2 === 1) {
      return n * 2
    }
    return n
  })
