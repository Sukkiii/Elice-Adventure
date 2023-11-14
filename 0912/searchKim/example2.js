function solution(data) {
  const nameArray = data.split(' ');
  const result = [];
  
  nameArray.forEach(name => {
    // console.log('name',name); //name:'홍길동' 이라는 객체가 만들어 진 셈
    const firstName = name[0];
    if (firstName === '김') {
      result.push(name);
    }
  });
  return result.join(' ');
}

module.exports = solution;
