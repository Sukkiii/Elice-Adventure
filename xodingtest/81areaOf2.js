const solution = (arr) => {
  const stI = arr.indexOf(2)
  const endI = arr.lastIndexOf(2)

  return stI + endI < 1 ? [-1] : arr.slice(stI, endI + 1)
}
