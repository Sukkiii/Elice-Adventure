function solution(intStrs, k, s, l) {
  const result = []

  intStrs.forEach((str) => {
    const substring = parseInt(str.substring(s, s + l))

    if (substring > k) {
      result.push(substring)
    }
  })

  return result
}

function solution(intStrs, k, s, l) {
  return intStrs.map((_) => +_.slice(s, s + l)).filter((_) => _ > k)
}
