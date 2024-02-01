const solution = (my_string, is_prefix) => {
  const prefix = my_string.substring(0, is_prefix.length)
  return prefix === is_prefix ? 1 : 0
}

const solution2 = (my_string, is_prefix) =>
  my_string.startsWith(is_prefix) ? 1 : 0
