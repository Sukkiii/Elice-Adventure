function solution(data) {
  const array = data.split(" ");
  const result = [...new Set(array)];
  // const result = Array.from(array);

  return result.join(' ');
}

module.exports = solution;
