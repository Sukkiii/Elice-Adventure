// N의 제곱근까지 나누어서 계산하기
function sumOfPrimes() {
  var sum = 0;

  for (var num = 2; num <= 200; num++) {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += num;
    }
  } document.write("1이상 200이하의 소수의 합 = " + sum);
} sumOfPrimes();

// N/2까지 나누어서 계산하기
// function sumOfPrimes() {
//   var sum = 0;

//   for (var num = 2; num <= 200; num++) {
//     var isPrime = true;
    
//     for (var i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       sum += num;
//     }
//   } return sum;
// } console.log(sumOfPrimes());

// N-1까지 전부 계산하기
// function solution() {
//     let sum = 0;
//     let j;

//     for (let i = 1; i <= 200; i++) {
//         for (j = 2; j <= i; j++) {
//             if (i % j == 0) break;
//         }

//         if (j == i) sum += j;
//     } console.log("1이상 200이하의 소수의 합 = " + sum);
// } solution();
