const solution = (arr, flag) => {
  const answer = []

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      answer.push(...Array(arr[i] * 2).fill(arr[i]))
    } else {
      answer.splice(-arr[i])
    }
  }

  return answer
}
