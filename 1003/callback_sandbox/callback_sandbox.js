// callback chain 을 통해서 하나하나 데이터 불러와보기

const getCommunicate = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      // 데이터를 일부분만 발췌해서 받아오기 위해서 JSON 데이터를 파싱할 것
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log('통신에 장애가 발생하였습니다')
      callback('통신 장애가 있습니다.', request.responseText);
    }
  })
  
  request.open('GET', resource);
  request.send(); 
}

getCommunicate('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
  // callback함수로 err, data를 넣어주어야 함.
  console.log(data.title);
  // 위에서 parsing을 거쳤기때문에 이렇게 분리해서 접근이 가능한 것
  console.log(data.id);
  getCommunicate('https://jsonplaceholder.typicode.com/todos/25', (err, data) => {
    console.log(data.title);
    console.log(data.id);
    getCommunicate('https://jsonplaceholder.typicode.com/todos/35', (err, data) => {
      console.log(data.title);
      console.log(data.id);
    })
  });
});