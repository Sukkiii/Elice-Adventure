// express로 app 객체를 생성하세요.
const express = require('express');
const app = express();
const port = 8080;
// response의 헤더 정보와 상태 코드를 설정하고, request의 params를 json 형태로 보내세요.
app.get('/', (req, res) => {
  res.send('root page');
});
app.get('/:follow', (req, res) => {
  res
  .set({
      "Content-Type": "text/json",
      Etag: "10000",
  })
  .status(201)
  .json(req.params);
});

// 8080번 포트로 서버를 여세요.
app.listen(port, () => {
  console.log(`Now server opening in ${port}`);
});
