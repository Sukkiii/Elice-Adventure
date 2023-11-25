function solution(my_string, is_suffix) {
  const suffix = my_string.slice(-is_suffix.length)

  return suffix === is_suffix ? 1 : 0
}
