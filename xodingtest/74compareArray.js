function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1
  }

  const sumArr1 = arr1.reduce((sum, num) => sum + num, 0)
  const sumArr2 = arr2.reduce((sum, num) => sum + num, 0)

  return sumArr1 > sumArr2 ? 1 : sumArr1 < sumArr2 ? -1 : 0
}
