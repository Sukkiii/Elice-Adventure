// 11에서 20까지 소수는 true, 소수가 아니면 false가 출력되도록 함수를 만들기
function isPrime(n) {
  var divisor = 2;
  if (n == 1) return false;
  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

for (var i = 11; i <= 20; i++) {
  document.writeln(i, isPrime(i));
}
