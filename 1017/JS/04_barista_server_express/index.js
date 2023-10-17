const express = require("express");
const { coffeeOrderRouter, teaOrderRouter } = require("./router");

// 메인 express 객체, 여기에 각종 미들웨어와 라우터를 레고 조립하듯이 연결해서
// 어플리케이션을 완성시켜나간다. 이러한 조립 구조는 코드 작성을 간결하게 할 수 있도록 도와준다.
const app = express();

// 문자열로 요청에 담아져 들어온 body를 자바스크립트 객체로 바꿔주는 미들웨어
app.use(express.json());

// coffeeOrderRouter /coffee-orders path 아래에 메인 express 어플리케이션에 등록(연결)
app.use("/coffee-orders", coffeeOrderRouter);
// teaOrderRouter /tea-orders path 아래에 메인 express 어플리케이션에 등록(연결)
app.use("/tea-orders", teaOrderRouter);

// 맞는 path가 없을 때 실행되는 미들웨어 03_barista_server_no_express에서의
// L74의 if (resourcePath === "coffee-orders")의 조건에 안맞았을 때 어떻게 처리했는지 기억나시나요?
app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.statusCode = 404;
  next(error);
});

// 에러 처리 미들웨어. 03_barista_server_no_express에서의 catch문 기억나시나요?
// express의 request-response 사이클 안에서 에러가 발생하면 별도의 예외 처리를 하지 않는 이상
// 이 미들웨어로 에러가 전달된다.
app.use((error, req, res, next) => {
  console.log(error);
  res.statusCode = error.statusCode ?? 400;
  res.json({
    error: error.message,
    data: null,
  });
});

app.listen(3000, () => {
  console.log("카페 서버가 포트 3000에서 운영중입니다 🚀");
});
