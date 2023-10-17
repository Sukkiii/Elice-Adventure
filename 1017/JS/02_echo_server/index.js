const http = require("http");

// 클라이언트로 부터 들어오는 요청을 받기 위한 서버 객체(인스턴스)를 생성
const server = http.createServer();

// "request"(요청이 들어옴) 이벤트에 반응하는 리스너 함수 등록
// 아래 req(request)와 res(response)는 stream 객체이다.
server.on("request", async (req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    // stream 객체는 하나의 데이터를 균일한 사이즈의 chunk(데이터의 덩어리)로 쪼개서 하나 씩 하나 씩 전달한다.
    // Node.js 서버는 클라이언트로 부터 요청을 받을 때 HTTP body(본문) 데이터를 stream 형식으로 받는다. 즉 쪼개진 데이터의 덩어리들을 하나 씩 하나 씩 받게 되는데
    // 아래 배열은 해당 덩어리들을 모으기 위한 저장소이다.
    const bodyChunkList = [];
    // 위에서 말한 HTTP body 데이터 덩어리들이 서버로 들어올 때마다 req객체에 미리 세팅된 "data" 이벤트가 발생하게 되는데 이 이벤트에 대해 반응(listen)을 하려면
    // 아래와 같이 .on("data", (chuck) => {})와 같이 리스너 함수 등록을 해야한다.
    req
      .on("data", (chunk) => {
        // 데이터 덩어리들이 들어올 때마다 body 배열에 덩어리를 넣어준다. chunk 매개변수가 그 데이터 덩어리들이다. 덩어리의 사이즈는 64 KB(2^16 bytes)이다(데이터의 끝부분을 읽어오는 것이면 64 KB보다 낮을 수 있다). 참고로 1024 bytes = 1KB, 1byte = 8bits
        // 매개변수 chunk의 타입은 Buffer타입이다.
        bodyChunkList.push(chunk);
      })
      // 들어올 HTTP body 데이터 덩어리들이 없으면, 즉 받을 데이터가 더 이상 없으면 아래의 "end" 이벤트가 발생하게 되며 이 이벤트에 대해 반응(listen)을 하려면
      // 아래와 같이 .on("end", () => {})와 같이 리스너 함수 등록을 해야한다.
      .on("end", () => {
        // Buffer형태로 받은 데이터 덩어리들을 먼저 배열에 담아줬는데, 그 Buffer 데이터 덩어리들을 하나로 합쳐서(Buffer.concat) String 형태로 바꿔준다.
        // Buffer 데이터는 바이트 형태로 저장되어있는 데이터이기 때문에 그냥 사용하기에는 어려움이 있다.
        // 그렇기에 다루기 쉬운 string 타입으로 변환을 해준다.
        const bodyString = Buffer.concat(bodyChunkList).toString();
        // response(응답) stream에 header값을 설정
        // NOTE: header(a.k.a. HTTP Header)는 HTTP 요청/응답에 있어서 요청/응답에 추가로 담을 수 있는 정보이다.
        //       주로 HTTP 요청/응답의 본 데이터는 HTTP body(본문)에 있다.
        res.setHeader("Content-Type", "application/json");
        // request(요청)으로 받은 데이터를 그대로 response(응답)에 담아서 보낸다.
        // NOTE: write를 부르는 순간 매개변수로 전달된 값은 stream을 따라 client에게 보내진다.
        res.write(bodyString);
        // end를 부름으로서 response stream에 더 이상 데이터를 담지 않고 stream을 끝맺는다는 신호를 보낸다(클라이언트야 내 턴을 여기서 마치도록 하지...).
        // NOTE: end를 안부르면 요청-응답 과정이 끝나지 않는 상태가 된다. Timeout 시간이 도달할 때까지 클라이언트는 알 수 없는 무한 대기를 하게 되니 주의!!
        res.end();
      });
    return; // 여기서 깔끔하게 함수를 끝내줘야 밑에 코드가 실행안됨.
  }
  res.setHeader("Content-Type", "application/json");
  // HTTP status 400은 잘못된 요청을 뜻하는 코드.
  // NOTE: 4XX는 클라이언트 잘못! 5XX는 서버 잘못!
  res.statusCode = 400;
  // 아래와 같이 잘못된 요청이라는 메시지를 담아 친절하게 응대를 해준다.
  res.write(JSON.stringify({ error: "잘못된 요청입니다." }));
  // res.end로 응답 마무리
  res.end();
});

// .listen 함수를 호출해야 비로소 외부로 부터 request(요청)을 받을 수 있다
// 아래 포트 3000 확인!
server.listen(3000, () => {
  // 현재 리스너 함수는 제대로 요청을 받을 수 있는 상태가 되면 불리는 함수이다.
  console.log("웹 서버가 포트 3000에서 운영중입니다 🚀");
});
