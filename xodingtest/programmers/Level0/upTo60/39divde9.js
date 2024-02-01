// 내가 푼 풀이
function solution(number) {
  return number.split('').reduce((acc, digit) => acc + parseInt(digit), 0) % 9
}

// 풀어서 풀이
function solution(number) {
  const digits = number.split('')

  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0)

  return sum % 9
}
