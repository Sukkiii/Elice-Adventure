function solution(arr) {
  const n = arr.length
  const targetLength = Math.pow(2, Math.ceil(Math.log2(n)))
  const zerosToAdd = targetLength - n
  return [...arr, ...Array(zerosToAdd).fill(0)]
}
