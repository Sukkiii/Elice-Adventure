const crypto = require("crypto");
const express = require("express");

// router는 작은 단위의 express라고 이해하면 쉽다
// router들을 express에 app.use로 연결하면 아래에 설정한 기능들을 바로 사용할 수 있다.
// 유지 보수가 상대적으로 용이하다고 표현할 수 있으며 API 기능 별로 모듈화가 쉬워진다.
// 만약 별도의 API 기능을 만들어야한다면 다른 파일에 새로운 router를 생성해서 코드를 작성하고 express에 붙여주면 끝이다.
const router = express.Router();

const COFFEE_ORDER_LIST = [];

/** 장황했던 HTTP method switch문이 보다 간결해졌다. **/
router.get("/", (req, res) => {
  console.log("GET /coffees");
  const coffees = getAllCoffeeOrders();
  res.json({
    error: null,
    data: coffees,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(`GET /coffees/${id}`);
  const coffee = getSingleCoffeeOrder(id);
  res.json({
    error: null,
    data: coffee,
  });
});

router.post("/", (req, res) => {
  console.log(`POST /coffees`);
  // req의 body값을 가져오기가 쉬워졌다.
  // req.on("data", (chunk) => { /** 이하 코드 **/ }).on("end", () => { /** 이하 코드 **/})
  // 위와 같은 리스닝 코드가 필요없다. express.js가 대신 수행해준다.
  const { type, orderedBy, count } = req.body;
  const coffee = createCoffeeOrder({ type, orderedBy, count });
  res.statusCode = 201;
  res.json({
    error: null,
    data: coffee,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { type, orderedBy, count } = req.body;
  console.log(`PUT /coffees/${id}`);
  const coffee = updateCoffeeOrder(id, { type, orderedBy, count });
  res.json({
    error: null,
    data: coffee,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /coffees/${id}`);
  const coffee = deleteCoffeeOrder(id);
  res.json({
    error: null,
    data: coffee,
  });
});

/** 아래는 03번째 예제 코드와 같은 비즈니스 로직 함수들이다 **/
function createCoffeeOrder({ type, orderedBy, count }) {
  if (type === undefined) {
    const error = new Error(`커피 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
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

function getAllCoffeeOrders() {
  return COFFEE_ORDER_LIST;
}

function getSingleCoffeeOrder(id) {
  const coffeeId = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeId > -1) {
    return COFFEE_ORDER_LIST[coffeeId];
  }
  const error = new Error(`아이디가 '${id}'인 커피 주문을 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}

function updateCoffeeOrder(id, { type, orderedBy, count }) {
  const orderIndex = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  if (orderIndex === -1) {
    const error = new Error(`아이디가 '${id}'인 커피 주문을 찾지 못했습니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (type === undefined) {
    const error = new Error(`커피 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (count !== undefined && count < 1) {
    const error = new Error(`커피 수량은 1이상이어야 합니다.`);
    error.statusCode = 400;
    throw error;
  }
  COFFEE_ORDER_LIST[orderIndex] = { id, type, orderedBy, count: count ?? 1 };
  return COFFEE_ORDER_LIST[orderIndex];
}

function deleteCoffeeOrder(id) {
  const coffeeIndex = COFFEE_ORDER_LIST.findIndex((coffee) => coffee.id === id);
  if (coffeeIndex > -1) {
    const [coffee] = COFFEE_ORDER_LIST.splice(coffeeIndex, 1);
    return coffee;
  }
  const error = new Error(`아이디가 '${id}'인 커피 주문을 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}
/** 비즈니스 로직 함수 끝 **/

// 라우터를 모듈로 내보내기
module.exports = router;
