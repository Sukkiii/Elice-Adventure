function solution(arr, k) {
  const set = new Set(arr)
  const values = Array.from(set)
  const result = Array.from({ length: k }, (_, i) =>
    values[i] !== undefined ? values[i] : -1
  )
  return result
}
