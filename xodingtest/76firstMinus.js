// const solution = (n) => {
//   const findIndex = n.findIndex((n) => n < 0)
//   return findIndex ? findIndex : -1
// }

const solution = (n) => {
  const findIndex = n.findIndex((n) => n < 0)
  return findIndex !== -1 ? findIndex : -1
}

const solution2 = (num_list) => num_list.findIndex((v) => v < 0)
