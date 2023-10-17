const crypto = require("crypto");
const express = require("express");

const router = express.Router();

const TEA_ORDER_LIST = [];

router.get("/", (req, res) => {
  console.log("GET /teas");
  const teas = getAllTeaOrders();
  res.json({
    error: null,
    data: teas,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(`GET /teas/${id}`);
  const tea = getSingleTeaOrder(id);
  res.json({
    error: null,
    data: tea,
  });
});

router.post("/", (req, res) => {
  console.log(`POST /teas`);
  const { type, orderedBy, count } = req.body;
  const tea = createTeaOrder({ type, orderedBy, count });
  res.statusCode = 201;
  res.json({
    error: null,
    data: tea,
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log(`PUT /teas/${id}`);
  const { type, orderedBy } = req.body;
  const tea = updateTeaOrder(id, { type, orderedBy });
  res.json({
    error: null,
    data: tea,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /teas/${id}`);
  const tea = deleteTeaOrder(id);
  res.json({
    error: null,
    data: tea,
  });
});

function createTeaOrder({ type, orderedBy, count }) {
  if (type === undefined) {
    const error = new Error(`티 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (count !== undefined && count < 1) {
    const error = new Error(`티 수량은 1 이상이어야 합니다.`);
    error.statusCode = 400;
    throw error;
  }

  const createdTeaOrder = {
    id: crypto.randomUUID(),
    type,
    orderedBy,
    count: count ?? 1,
  };

  TEA_ORDER_LIST.push(createdTeaOrder);
  return createdTeaOrder;
}

function getAllTeaOrders() {
  return TEA_ORDER_LIST;
}

function getSingleTeaOrder(id) {
  const teaId = TEA_ORDER_LIST.findIndex((tea) => tea.id === id);
  if (teaId > -1) {
    return TEA_ORDER_LIST[teaId];
  }
  const error = new Error(`아이디가 '${id}'인 티 주문을 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}

function updateTeaOrder(id, { type, orderedBy, count }) {
  const orderIndex = TEA_ORDER_LIST.findIndex((tea) => tea.id === id);
  if (orderIndex === -1) {
    const error = new Error(`아이디가 '${id}'인 티 주문을 찾지 못했습니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (type === undefined) {
    const error = new Error(`티 타입을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (orderedBy === undefined || orderedBy === "") {
    const error = new Error(`주문자 이름을 명시해야합니다.`);
    error.statusCode = 400;
    throw error;
  }
  if (count !== undefined && count < 1) {
    const error = new Error(`티 수량은 1 이상이어야 합니다.`);
    error.statusCode = 400;
    throw error;
  }
  TEA_ORDER_LIST[orderIndex] = { id, type, orderedBy, count: count ?? 1 };
  return TEA_ORDER_LIST[orderIndex];
}

function deleteTeaOrder(id) {
  const teaId = TEA_ORDER_LIST.findIndex((tea) => tea.id === id);
  if (teaId > -1) {
    const [tea] = TEA_ORDER_LIST.splice(teaId, 1);
    return tea;
  }
  const error = new Error(`아이디가 '${id}'인 티 주문을 찾지 못했습니다.`);
  error.statusCode = 400;
  throw error;
}

// 라우터를 모듈로 내보내기
module.exports = router;
