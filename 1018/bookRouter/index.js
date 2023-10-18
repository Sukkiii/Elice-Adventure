// express로 app 객체를 생성하고, 8080포트로 서버를 여세요.
const express = require('express');
const bookRouter = require('./routes/books');
const app = express();

app.get('/', (req, res) => {
  res.send('root page');
});
// 라우터를 "/books" 경로에 연결하세요.
app.use('/books', bookRouter);

app.listen(8080);
