// 시간초과... 11 ~ 15번 문제가 엄청 숫자 양이 많은 문제인 듯 하다...

const solution = (X, Y) => {
  const bothNum = []
  const splitX = X.split('')
  const splitY = Y.split('')
  for (let i = 0; i < splitX.length; i++) {
    if (splitY.includes(splitX[i])) {
      const idx = splitY.indexOf(splitX[i])
      splitY.splice(idx, 1)
      bothNum.push(splitX[i])
    }
  }
  const answer = bothNum.sort((a, b) => b - a).join('')
  return answer.length === 0 ? '-1' : Number(answer) === 0 ? '0' : answer
}

function solution(X, Y) {
  const bothNum = X.split('').filter((el, i) => {
    Y.splice(Y.indexOf(i), 1)
    Y.includes(el)
  })

  const answer = bothNum.sort((a, b) => b - a).join('')
  return answer.length === 0 ? '-1' : Number(answer) === 0 ? '0' : answer
}

function solution(X, Y) {
  let answer = ''

  // 길이가 10이고 0으로 채워진 두 배열을 만든다.
  const newX = [...new Array(10)].fill(0)
  const newY = [...new Array(10)].fill(0)

  // 원본 문자열로 index에 접근해서 갯수를 센다.
  X.split('').forEach((n) => newX[n]++)
  Y.split('').forEach((n) => newY[n]++)

  newX.forEach(n, (i) => {
    if (n && newY[i]) {
      answer += String(i).repeat(Math.min(newX[i], newY[i]))
    }
  })

  return answer.length === 0
    ? '-1'
    : answer !== '' && +answer === 0
    ? '0'
    : [...answer].reverse().join('')
}

function solution(X, Y) {
  const xCount = [...new Array(10)].fill(0)
  const yCount = [...new Array(10)].fill(0)
  for (const word of X) xCount[~~word] += 1
  for (const word of Y) yCount[~~word] += 1

  const lst = [...new Array(10)].map((_, idx) =>
    Math.min(xCount[idx], yCount[idx])
  )
  const ret =
    lst.reduce((a, c) => a + c, 0) === lst[0]
      ? '0'
      : lst.reduceRight(
          (a, c, idx) => (c ? a + idx.toString().repeat(c) : a),
          ''
        )

  return lst.reduce((a, c) => a + c, 0) ? ret : '-1'
}

function solution(X, Y) {
  let answer = ''
  X = X.split('')
  Y = Y.split('')
  for (let i = 0; i < 10; i++) {
    let x_cnt = X.filter((x) => Number(x) === i).length
    let y_cnt = Y.filter((y) => Number(y) === i).length
    answer += i.toString().repeat(Math.min(x_cnt, y_cnt))
  }

  if (answer === '') {
    return '-1'
  } else if (
    answer.split('').filter((x) => x === '0').length === answer.length
  ) {
    return '0'
  } else {
    return answer.split('').sort().reverse().join('')
  }
}
