function solution(num_list, n) {
  let array = []
  for (let i = n - 1; i < num_list.length; i++) {
    array.push(num_list[i])
  }
  return array
}

function solution(num_list, n) {
  return num_list.slice(n - 1)
}
