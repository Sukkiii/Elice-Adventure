const solution = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    const index = query[i]

    if (i % 2 === 0) {
      arr.splice(index + 1, arr.length - (index + 1))
    } else {
      arr.splice(0, index)
    }
  }
  return arr
}
