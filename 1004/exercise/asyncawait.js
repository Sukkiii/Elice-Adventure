async function asyncFunc() {
  let data = await fetchData();
  let user = await fetchUser(data);
  return user;
}

async function asyncFunc() {
  let data1 = await fetchData1()
  let data2 = await fetchData2(data1)
  let data3 = await fetchData3(data2);
  return data3
}
function promiseFunc() {
  return fetchData1()
    .then(fetchData2)
    .then(fetchData3)
}

function fetchData1() {
  return request()
    .then((response) => response.requestData)
    .catch(error => {
      // error 발생
    })
}

async function asyncFunc() {
  try {
    let data1 = await
    fetchData1()
      return fetchData2(data1)
  } catch(e) {
    console.log('실패: ', e)
  }
}
