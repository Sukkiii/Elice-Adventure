const solution = (num_list) => {
  const odd = num_list.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      return acc + cur
    }
    return acc
  }, 0)
  const even = num_list.reduce((acc, cur, i) => {
    if (i % 2 === 1) {
      return acc + cur
    }
    return acc
  }, 0)

  return even <= odd ? odd : even
}
