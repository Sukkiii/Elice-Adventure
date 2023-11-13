// 나의 풀이

function solution(my_string, queries) {
  let array = my_string.split('')

  for (const query of queries) {
    const [start, end] = query

    array.splice(
      start,
      end - start + 1,
      ...array.slice(start, end + 1).reverse()
    )
  }

  return array.join('')
}

// forEach사용
function solution(my_string, queries) {
  let array = my_string.split('')

  queries.forEach(([start, end]) => {
    const changeArray = array.slice(start, end + 1)
    array.splice(start, changeArray.length, ...changeArray.reverse())
  })
  return array.join('')
}
