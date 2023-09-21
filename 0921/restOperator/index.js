function sumArray(sum, ...arr) {
  if (arr.length === 0) return sum;

  const [head, ...tail] = arr;
  return sumArray(sum + head, ...tail);
}
sumArray(0, 1, 2, 3, 4, 5);

function mul(m, ...arr) {
  if (arr.length === 0) return m;

  const [head, ...tail] = arr;

  return mul(m * head, ...tail);
}

console.log(mul(3, 6, 9, 12, 15));

console.log(mul(11, 13, 17, 19, 23, 29));

function multiply(num, ...arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(num * arr[i]);
  }
  return newArray;
}

let arr = multiply(12, 6, 4, 3, 2, 1);
console.log(arr);
