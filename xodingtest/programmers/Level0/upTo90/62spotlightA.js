const solution = (myString) =>
  myString
    .split('')
    .map((_) => (_ === 'a' || _ === 'A' ? _.toUpperCase() : _.toLowerCase()))
    .join('')

const solution2 = (myString) =>
  myString
    .split('')
    .map((_) => (_.toLowerCase() === 'a' ? 'A' : _.toUpperCase()))
    .join('')

const solution3 = (myString) => myString.toLowerCase().replaceAll('a', 'A')
