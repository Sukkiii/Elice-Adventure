function solution(strArr) {
  const groups = {}

  for (let str of strArr) {
    const length = str.length

    if (!groups[length]) {
      groups[length] = 0
    }

    groups[length]++
  }

  return Math.max(...Object.values(groups))
}
