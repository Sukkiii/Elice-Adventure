function solution(data) {
  const nameArray = data.split(' ');
  
  const result = nameArray.map(name => {
    const firstName = name[0];
    if (firstName === '김') {
      return name;
      } else {
      return '';
    }
  });
  return result.filter(Boolean).join(' ');
}

module.exports = solution;