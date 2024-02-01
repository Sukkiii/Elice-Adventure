const solution = (n, k) => Array.from({ length: n / k }, (_, i) => (i + 1) * k)

const solution2 = (n, k) => {
  const result = []
  for (let i = k; i <= n; i += k) {
    result.push(i)
  }
  return result
}

const solution3 = (n, k) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((num) => num % k === 0)
