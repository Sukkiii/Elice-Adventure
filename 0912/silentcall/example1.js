function solution(data) {
  const array = data.split(' ');
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i])
    }
  }
  return result.join(' ');
}

module.exports = solution;
