// const solution = (str_list) => {
//   const findL = str_list.findIndex((str) => str === 'l')
//   const findR = str_list.findIndex((str) => str === 'r')

//   if (findL === -1 && findR === -1) {
//     return []
//   } else if (findL < findR) {
//     return str_list.slice(0, findL)
//   } else if (findL > findR) {
//     return str_list.slice(findR + 1)
//   }
// }

const solution = (str_list) => {
  const index = str_list.findIndex((item) => item === 'l' || item === 'r')

  if (index === -1) {
    return []
  } else if (str_list[index] === 'l') {
    return str_list.slice(0, index)
  } else {
    return str_list.slice(index + 1)
  }
}

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'l') return arr.slice(0, i)
    if (arr[i] === 'r') return arr.slice(i + 1)
  }
  return []
}
