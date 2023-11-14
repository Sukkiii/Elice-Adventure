const getJson = (resource, callback) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        // 데이터를 일부분만 발췌해서 받아오기 위해서 JSON 데이터를 파싱할 것
        // callback(undefined, data); 
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log('통신에 장애가 발생하였습니다')
        // callback('통신 장애가 있습니다.', request.responseText);
        reject('통신불가')
      }
    })
    
    request.open('GET', resource);
    request.send();
  }) 
}

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// getJson('https://jsonplaceholder.typicode.com/todos/4')
//   .then(data => {
//     console.log('resolve', data);
//   }, error => {
//     console.log('rejected', error);
//   })
  // 가장 기본적인 promise의 형태

// 또 다른 형태의 promise
// getJson('https://jsonplaceholder.typicode.com/todos/10')
//   .then(data => {
//     console.log(data);
//   }).catch(err => {
//     console.log('error', err)
//   })

getJson('https://jsonplaceholder.typicode.com/todos/10')
  .then(data => {
    console.log(data.title);
    return getJson('https://jsonplaceholder.typicode.com/todos/1')
  }).then(data => {
    console.log(data.title)
    return getJson('https://jsonplaceholder.typicode.com/todos/4')
  }).then(data => {
    console.log(data.id);
  }).catch(err => {
    console.log('통신에러', err)
  })