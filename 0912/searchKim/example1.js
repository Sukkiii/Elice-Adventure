function solution(data) {
  const nameArray = data.split(' ');
  let result = [];
  
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i][0] === '김') {
      result.push(nameArray[i]);
    }  
  }
  return result.join(' ');
}

module.exports = solution;
