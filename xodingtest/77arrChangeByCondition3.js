const solution = (arr, k) => {
  return k % 2 === 1 ? arr.map((n) => n * k) : arr.map((n) => n + k)
}

const solution2 = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k))
