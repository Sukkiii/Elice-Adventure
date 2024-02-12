const solution = (arr) => arr.flatMap((num) => Array(num).fill(num))

function solution(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i])
    }
  }
  return result
}
