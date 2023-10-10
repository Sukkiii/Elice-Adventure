const express = require('express')
require('dotenv').config()
const app = express()

app.get('', (req, res) => {
  // res.send('<h1>hi! I\'m sukki</h1>')
  res.sendFile(__dirname + '/index.html')
})
// get 메서드
// 요청이 들어왔을 때를 처리
// 
app.listen(process.env.PORT, () => {
  console.log(`서버가 ${process.env.PORT}번에서 작동중입니다.`);
})
// 환경변수에 접근하는 것 > 3000이라는 port변수에 접근 가능

// ctrl + c > 서버끄기