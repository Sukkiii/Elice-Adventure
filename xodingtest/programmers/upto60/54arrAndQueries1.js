const solution = (arr, queries) => {
  queries.forEach((query) => {
    const [s, e] = query
    for (let i = s; i <= e; i++) {
      arr[i]++
    }
  })
  return arr
}

const solution2 = (arr, queries) => {
  for (const query of queries) {
    const [s, e] = query
    for (let i = s; i <= e; i++) {
      arr[i]++
    }
  }
  return arr
}
