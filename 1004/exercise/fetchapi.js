let result = fetch(serverURL)

result
  .then(response => {
    if(response.ok) {
      // 요청 성공
    }
  })
  .catch(error => {
    // 요청 실패
  })

fetch(serverURL)
  .then(response => {
    response.ok
    response.status
    response.statusText
    response.url
    response.bodyUsed
  })

fetch(serverURL)
  .then(resp => {
    for(let [k, v] of resp.headers) {
      console.log(k, v)
    }
  })

fetch(serverURL)
  .then(resp => {
    return resp.json()
  })
  .then(json => {
    console.log('body : ', json)
  })

fetch(serverURL, {
  method: 'post',
  headers: {
    'Content-Type' :'application/json;charset-utf-8',
    Authentication: 'mysecret'
  },
  body: JSON.stringify(formData)
})
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log('POST 요청 결과: ', json)
  })
