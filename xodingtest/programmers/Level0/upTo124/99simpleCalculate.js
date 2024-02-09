const solution2 = (binomial) => eval(binomial)

const solution = (binomial) => new Function(`return ${binomial}`)()

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

function solution(binomial) {
  const [a, op, b] = binomial.split(' ')
  return ops[op](+a, +b)
}
