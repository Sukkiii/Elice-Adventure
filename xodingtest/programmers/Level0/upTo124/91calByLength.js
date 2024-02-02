const solution = (num_list) => {
  const multi = num_list.reduce((cal, cur) => cal * cur, 1)
  const add = num_list.reduce((cal, cur) => cal + cur, 0)
  return num_list.length >= 11 ? add : multi
}

const solution2 = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v))
