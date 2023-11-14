function solution(data) {
  const nameArray = data.split(' ');
  let result = [];

  for (let name of nameArray) {
    const firstName = name[0];
    if (firstName === '김') {
      result.push(name);
    }
  }
  return result.join(' ');
}

module.exports = solution;
