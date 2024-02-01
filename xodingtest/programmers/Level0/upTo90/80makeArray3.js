const solution = (arr, intervals) => {
  const [int1, int2] = intervals

  return [
    ...arr.slice(int1[0], int1[1] + 1),
    ...arr.slice(int2[0], int2[1] + 1),
  ]
}

const solution2 = (arr, intervals) => {
  const [int1, int2] = intervals

  return arr.slice(int1[0], int1[1] + 1).concat(arr.slice(int2[0], int2[1] + 1))
}
