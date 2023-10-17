const coffeeOrderRouter = require("./coffeeOrderRouter");
const teaOrderRouter = require("./teaOrderRouter");

// router들을 한 곳에 모아 export하여 require가 간결해지도록 도와준다.
module.exports = {
  coffeeOrderRouter,
  teaOrderRouter,
};
