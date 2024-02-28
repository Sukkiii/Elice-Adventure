function solution(arr, n) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0 && i % 2 !== 0) {
      result.push(arr[i] + n)
    } else if (arr.length % 2 !== 0 && i % 2 === 0) {
      result.push(arr[i] + n)
    } else {
      result.push(arr[i])
    }
  }

  return result
}
