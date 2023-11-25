function solution(numbers, n) {
  return numbers.reduce((add, i) => (acc > n ? acc : acc + cur), 0)
}
