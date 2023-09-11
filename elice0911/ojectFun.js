// 객체 내부에 접근하는 방법
function makeTotalPrice(inputA) {
  var q1 = inputA.quantity1;
  var p1 = inputA.price1;
  var q2 = inputA.quantity2;
  var p2 = inputA.price2;

  return q1*p1 + q2*p2;
}

var inputA = {
  quantity1: 4,
  price1: 500,
  quantity2: 2,
  price2: 300
};

module.exports = { inputs: [inputA], func: makeTotalPrice }
