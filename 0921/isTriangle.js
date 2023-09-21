function isTriangle(a, b, c) {
  return b+c>a && c+a>b && a+b>c;
}

const inputA = 7
const inputB = 7
const inputC = 15

module.exports = { inputs: [inputA, inputB, inputC], func: isTriangle }
