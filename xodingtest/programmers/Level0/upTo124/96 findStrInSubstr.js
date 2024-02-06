const solution2 = (myString, pat) => {
  const regex = new RegExp(`(?=${pat})`, 'g')
  const matches = myString.match(regex)
  return matches.length
}

const solution = (myString, pat) => {
  let count = 0
  let index = -1
  while ((index = myString.indexOf(pat, index + 1)) !== -1) {
    count++
  }
  return count
}
