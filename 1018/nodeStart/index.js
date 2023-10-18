// http 모듈을 불러오세요.
const http = require("http");

// "Hello sukki!"를 출력하는 서버 객체를 만드세요.
// 8080포트로 서버를 시작하세요.
http
  .createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : "text/html"});
    res.end('Hello sukki!');
  })
  .listen(8080)

const express = require("express");
const app = express();

// "Hello sukki!"를 출력하는 라우트를 설정
app.get("/", (req, res) => {
  res.send("Hello sukki!");
});

// 서버를 8080 포트에서 시작
app.listen(8080, () => {
  console.log("서버가 8080번 포트에서 실행 중...");
});
