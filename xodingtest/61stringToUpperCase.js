const solution = (my_string, alp) => {
  return my_string
    .split('')
    .map((_) => (_ === alp ? _.toUpperCase() : _))
    .join('')
}

const solution2 = (my_string, alp) =>
  my_string.replaceAll(alp, alp.toUpperCase())
