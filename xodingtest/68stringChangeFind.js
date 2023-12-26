const solution = (myString, pat) => {
  const replaceX = myString.replaceAll('A', 'X')
  const replaceA = replaceX.replaceAll('B', 'A')
  const replaceMyString = replaceA.replaceAll('X', 'B')

  return replaceMyString.includes(pat) ? 1 : 0
}

const solution2 = (myString, pat) =>
  [...myString]
    .map((v) => (v === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat)
    ? 1
    : 0
