const http = require("http");
const crypto = require("crypto");

// 클라이언트로 부터 들어오는 요청을 받기 위한 서버 객체(인스턴스)를 생성
const server = http.createServer();

// 커피 주문 목록을 저장하기 위한 배열
const COFFEE_ORDER_LIST = [];

// "request"(요청이 들어옴) 이벤트에 반응하는 리스너 함수 등록
// 아래 req(request)와 res(response)는 stream 객체이다.
server.on("request", (req, res) => {
  // 요청(req)을 받는 stream이 요청을 받는 도중 문제가 발생하면 "error" 이벤트를 발생시키는데
  // 해당 이벤트 발생 시 일련의 작업을 할 수 있도록 리스너 함수를 등록해준다.
  req.on("error", (error) => {
    // 에러가 무엇인지 console로 한 번 찍어보고
    console.log(error);
    // 서버쪽의 문제라 가정하고 response HTTP status code를 500이라 설정해준다.
    res.statusCode = 500;
    // 현재 response stream을 끝낸다.
    res.end();
  });

  // 응답(res)을 보내는 stream을 통해 응답 데이터를 도중 문제가 발생하면 "error" 이벤트가 발생한다
  // 해당 이벤트 발생 시 로그를 찍도록 아래와 같이 리스너 함수를 등록하였다.
  res.on("error", (error) => {
    console.log(error);
  });

  // stream 객체는 하나의 데이터를 균일한 사이즈의 버퍼(buffer, 데이터의 임시 저장소이자 큰 데이터를 작게 쪼갠 덩어리, 이하 덩어리라고 표현)로 쪼개서 하나씩 하나씩 전달한다.
  // Node.js 서버는 클라이언트로 부터 요청을 받을 때 HTTP body(본문) 데이터를 stream 형식으로 받는다. 즉 쪼개진 데이터의 덩어리들을 하나씩 하나씩 받게 되는데
  // 아래 배열은 해당 덩어리들을 모으기 위한 저장소이다. 
  let bodyChunkList = [];

  // 위에서 말한 HTTP body 데이터 덩어리들이 서버로 들어올 때마다 req객체에 미리 세팅된 "data" 이벤트가 발생하게 되는데 이 이벤트에 대해 반응(listen)을 하려면
  // 아래와 같이 .on("data", (chuck) => {})와 같이 리스너 함수 등록을 해야한다.
  req
    .on("data", (chunk) => {
      // 데이터 덩어리들이 들어올 때마다 body 배열에 덩어리를 넣어준다. chunk 매개변수가 그 데이터 덩어리들이다. 덩어리의 사이즈는 64 KB(2^16 bytes)이다(데이터의 끝부분을 읽어오는 것이면 64 KB보다 낮을 수 있다). 참고로 1024 bytes = 1KB, 1byte = 8bits
      // 이 데이터 덩어리는 Node.js가 파편화된 데이터를 내부적으로 모으고 그 모은 데이터의 사이즈가 위에서 언급한 사이즈에 도달 했을 때 현재 콜백함수를 불러서 개발자가 매개변수로써 사용할 수 있도록 해준다. 이 내부적으로 모으는 과정이 버퍼링이다: 데이터를 일정 사이즈까지 모으고 넘기는 것.
      // 그렇기에 매개변수 chunk의 타입은 *Buffer*타입이다.
      bodyChunkList.push(chunk);
    })
    // 들어올 HTTP body 데이터 덩어리들이 없으면, 즉 받을 데이터가 더 이상 없으면 아래의 "end" 이벤트가 발생하게 되며 이 이벤트에 대해 반응(listen)을 하려면
    // 아래와 같이 .on("end", () => {})와 같이 리스너 함수 등록을 해야한다.
    .on("end", () => {
      try {
        // Buffer형태로 받은 데이터 덩어리들을 먼저 배열에 담아줬는데, 그 Buffer 데이터 덩어리들을 하나로 합쳐서(Buffer.concat) String 형태로 바꿔준다.
        // Buffer 데이터는 바이트 형태로 저장되어있는 데이터이기 때문에 그냥 사용하기에는 어려움이 있다.
        // 그렇기에 다루기 쉬운 string 타입으로 변환을 해준다.
        // NOTE: 만약 body의 데이터가 JSON형식이라면 여기서 JSON.parse를 사용해서 객체화하면 된다.
        const body =
          bodyChunkList.length > 0
            ? JSON.parse(Buffer.concat(bodyChunkList).toString()) // 참고: JSON.parse가 실패하면 에러가 발생할 수 있는 불안전한 코드이다. 실제로는 try/catch와 같이 예외처리가 필요.
            : // 아무 데이터가 없으면 빈 문자열을 body 변수에 넣도록 하였다.
              "";

        // req(요청)에 담긴 HTTP header와 method, url 정보(호스트와 포트를 제외한, 즉 path 정보...)를 별도의 변수로 꺼낸다.
        const { headers, method, url: path } = req;

        // URL의 path를 메인과 서브로 분리해준다. parseUrl함수 참고.
        // e.g. /api/coffee-orders/1 => mainPath = "api"; subPaths = ["coffee-orders", "1"];
        const [mainPath, ...subpaths] = parsePath(path);

        // path가 api로 시작하면 분기문으로 입성, 아니면 클라이언트의 요청이 잘못된 요청이므로 L155-161에서 HTTP status code 404로 응답
        if (mainPath === "api") {
          // 일단 HTTP status code를 200으로 설정(설정을 안해주어도 기본값이 200이긴 하다)
          res.statusCode = 200;
          // 응답으로 돌려주는 데이터의 형식이 JSON이기 때문에 HTTP header(a.k.a.Response header)에 명시적으로 적어주는게 좋다.
          // 클라이언트는 해당 값을 보고 어떻게 받은 값을 읽어낼지(parsing) 결정한다.
          // 참고로 html 데이터라면 res.setHeader("Content-Type", "text/html")로 설정해줘야한다.
          res.setHeader("Content-Type", "application/json");

          const resourcePath = subpaths[0];

          if (resourcePath === "coffee-orders") {
            // HTTP method에 따라서 함수(지정된 작업)를 실행
            // HTTP method와 CRUD를 매핑해준 단계
            switch (method) {
              // POST인 경우: 커피 주문을 생성
              // HINT: express.js의 app.post("/api/coffee-orders", (req, res) => {});
              case "POST": {
                // 커피 주문 생성
                const order = createCoffeeOrder(body);
                // 특정 데이터를 생성했을 때는 HTTP status code 201을 사용
                res.statusCode = 201;
                // 주문 데이터를 문자열로 변환하여 응답으로 보내고 종료.
                res.end(
                  JSON.stringify({
                    data: order,
                    error: null,
                  })
                );
                return;
              }
              // GET인 경우
              // HINT1: express.js의 app.get("/api/coffee-orders/:orderId", (req, res) => {});
              // HINT2: express.js의 app.get("/api/coffee-orders", (req, res) => {});
              case "GET": {
                // path에 주문 ID가 담겨져 있다면 하나의 주문만 가져오기
                const orderId = subpaths[1];
                if (orderId !== "" && orderId !== undefined) {
                  const order = getSingleCoffeeOrder(orderId);
                  res.end(
                    JSON.stringify({
                      data: order,
                      error: null,
                    })
                  );
                  return;
                }
                // 아니면 모든 커피 주문 가져오기
                const orders = getAllCoffeeOrders();
                res.end(
                  JSON.stringify({
                    data: orders,
                    error: null,
                  })
                );
                return;
              }
              // PUT인 경우
              // HINT1: express.js의 app.put("/api/coffee-orders/:orderId", (req, res) => {});
              case "PUT": {
                // path에 주문 ID가 담겨져 있다면 하나의 주문 수정
                const orderId = subpaths[1];
                if (orderId !== "" && orderId !== undefined) {
                  const updatedOrder = updateCoffeeOrder(orderId, body);
                  res.end(
                    JSON.stringify({
                      data: updatedOrder,
                      error: null,
                    })
                  );
                  return;
                }
                // 주문 ID가 없으면 에러 던지기(try/catch문의 catch문에서 일괄적으로 에러 메시지를 담은 응답을 보내기 위함)
                const error = new Error(
                  "ID를 제시해야 커피 주문을 업데이트할 수 있습니다."
                );
                error.statusCode = 400;
                throw error;
              }
              // DELETE인 경우
              // HINT1: express.js의 app.delete("/api/coffee-orders/:orderId", (req, res) => {});
              case "DELETE": {
                // path에 주문 ID가 담겨져 있다면 하나의 주문 삭제
                const orderId = subpaths[1];
                if (orderId !== undefined && orderId !== null) {
                  const deletedOrder = deleteCoffeeOrder(orderId);
                  res.end(
                    JSON.stringify({
                      data: deletedOrder,
                      error: null,
                    })
                  );
                  return;
                }
                // 주문 ID가 없으면 에러 던지기(try/catch문의 catch문에서 일괄적으로 에러 메시지를 담은 응답을 보내기 위함)
                const error = new Error(
                  "ID를 제시해야 커피 주문을 삭제할 수 있습니다."
                );
                error.statusCode = 400;
                throw error;
              }
              // 그 외의 HTTP method인 경우에도 에러 던지기(try/catch문의 catch문에서 일괄적으로 에러 메시지를 담은 응답을 보내기 위함)
              default: {
                const error = new Error(
                  `HTTP 메소드 '${method}'은 지원하지 않습니다.`
                );
                error.statusCode = 405;
                throw error;
              }
            }
          }
        }

        // 클라이언트의 요청이 잘못된 요청이므로 HTTP status code 404로 응답
        res.statusCode = 404;
        res.end(
          JSON.stringify({
            data: null,
            error: "리소스를 찾지 못했습니다.",
          })
        );
      } catch (error) {
        // 일괄적으로 잘못된 요청에 대한 응답을 보내기 위해 try/catch문을 사용
        // try와 catch 사이에서 던져진 에러들은 여기서 처리 => express.js의 에러 처리 미들웨어가 떠오르지는 않나요?
        // 에러 로그를 한 번 찍어보고
        console.log(error);
        // error 객체에 담긴 HTTP status code를 res(응답)에 담아
        res.statusCode = error.statusCode ?? 400;
        // 마지막으로 에러 메시지를 응답으로 보내고 응답 과정 끝
        res.end(
          JSON.stringify({
            data: null,
            error: error.message,
          })
        );
      }
    });
});

// .listen 함수를 호출해야 비로소 외부로 부터 request(요청)을 받을 수 있다
// 아래 포트 3000 확인!
server.listen(3000, () => {
  // 현재 리스너 함수는 제대로 요청을 받을 수 있는 상태가 되면 불리는 함수이다.
  console.log("카페 서버가 포트 3000에서 운영중입니다 🚀");
});

// 단순히 url의 path를 / 기준으로 쪼개주는 함수.
// e.g. /api/coffees => ['api', 'coffees']
function parsePath(path) {
  const paths = path.split("/");
  return paths.slice(1);
}

/** 아래는 비즈니스 로직 함수들이다 **/
// 커피 주문을 생성하기 위한 함수
function createCoffeeOrder({ type, orderedBy, count }) {
  // 커피 타입이 명시되지 않은 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  if (type === undefined) {
    const error = new Error(`커피 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  // 커피 주문자가 명시되지 않은 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  // 커피 수량이 1 미만인 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  // 참고로 count값이 없으면 통과이다. 알아서 count: 1로 처리해준다. 아래 코드 참고.
  if (count !== undefined && count < 1) {
    const error = new Error(`커피 수량은 1이상이어야 합니다.`);
    error.statusCode = 400;
    throw error;
  }

  // 새로운 커피 주문 객체
  const createdCoffeeOrder = {
    id: crypto.randomUUID(),
    type,
    orderedBy,
    count: count ?? 1,
  };

  // 전체 주문 리스트에 저장
  COFFEE_ORDER_LIST.push(createdCoffeeOrder);
  return createdCoffeeOrder;
}

// 현재까지 쌓인 커피 주문들을 모두 반환해주는 함수
function getAllCoffeeOrders() {
  return COFFEE_ORDER_LIST;
}

// 현재까지 쌓인 커피 주문들 중 하나를 id 기준으로 반환해주는 함수
function getSingleCoffeeOrder(id) {
  const coffeeId = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeId > -1) {
    return COFFEE_ORDER_LIST[coffeeId];
  }
  throw new Error(`아이디가 '${id}'인 커피 주문을 찾지 못했습니다.`);
}

// 현재까지 쌓인 커피 주문들 중 하나를 id 기준으로 수정해주는 함수
function updateCoffeeOrder(id, { type, orderedBy, count }) {
  // id 매개변수로 주어진 값을 id로 가지고 있는 주문이 있는 지 찾고
  const orderIndex = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  // 없으면 에러 던지기
  if (orderIndex === -1) {
    const error = new Error(`아이디가 '${id}'인 커피를 찾지 못했습니다.`);
    error.statusCode = 400;
    throw error;
  }
  // 커피 타입이 명시되지 않은 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  if (type === undefined) {
    const error = new Error(`커피 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  // 커피 주문자가 명시되지 않은 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  // 커피 수량이 1 미만인 경우 클라이언트의 요청이 잘못된 것이므로
  // HTTP status code 400으로 설정하고 에러를 던진다.
  // 참고로 count값이 없으면 통과이다. 알아서 count: 1로 처리해준다. 아래 코드 참고.
  if (count !== undefined && count < 1) {
    const error = new Error(`커피 수량은 1이상이어야 합니다.`);
    error.statusCode = 400;
    throw error;
  }
  COFFEE_ORDER_LIST[orderIndex] = { id, type, orderedBy, count: count ?? 1 };
  return COFFEE_ORDER_LIST[orderIndex];
}

// 현재까지 쌓인 커피 주문들 중 하나를 id 기준으로 삭제해주는 함수
function deleteCoffeeOrder(id) {
  const orderId = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  if (orderId > -1) {
    const [order] = COFFEE_ORDER_LIST.splice(orderId, 1);
    return order;
  }
  const error = new Error(`아이디가 '${id}'인 커피 주문을 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}
/** 비즈니스 로직 함수 끝 **/
