fetch('https://jsonplaceholder.typicode.com/todos/10')
  .then(res => {
    console.log(res.json());
  }).catch(err => {
    console.log(err);
  })

  //fetch라는 함수 자체가 promise를 내장하고 있다.
  // https://developer.mozilla.org/ko/docs/Web/API/fetch

  