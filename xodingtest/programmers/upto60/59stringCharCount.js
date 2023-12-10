const solution = (my_string) => {
  const result = new Array(52).fill(0)

  for (const char of my_string) {
    const index = char.charCodeAt(0)
    if (65 <= index && index <= 90) {
      result[index - 65]++
    } else if (97 <= index && index <= 122) {
      result[index - 71]++
    }
  }

  return result
}

const solution2 = (my_string) => {
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let a = []
  a.length = 52
  a.fill(0)

  my_string.split('').map((n) => {
    a[al.indexOf(n)] += 1
  })

  return a
}

const solution3 = (my_string) => {
  return [...my_string].reduce(
    (p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p),
    Array(52).fill(0)
  )
}
