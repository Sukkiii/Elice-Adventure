// 객체 내부에 접근하는 방법
function makeTotalPrice (inputA) {
  let q1 = inputA.quantity1;
  let p1 = inputA.price1;
  let q2 = inputA.quantity2;
  let p2 = inputA.price2;

  return q1*p1 + q2*p2;
}

let inputA = {
  quantity1: 4,
  price1: 500,
  quantity2: 2,
  price2: 300
};

module.exports = { inputs: [inputA], func: makeTotalPrice }
