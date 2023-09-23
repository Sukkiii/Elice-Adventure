const point1X = document.getElementById("point1-x");
const point1Y = document.getElementById("point1-y");
const point2X = document.getElementById("point2-x");
const point2Y = document.getElementById("point2-y");
const calculateButton = document.getElementById("calculate-button");
const result = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const [p1x, p1y, p2x, p2y] = [
    point1X.value,
    point1Y.value,
    point2X.value,
    point2Y.value,
  ];

  TwoDotDistance.setPoints(p1x, p1y, p2x, p2y);
  const distance = TwoDotDistance.calculateDistance();

  result.innerHTML = `<h4>두 점 사이의 거리 : ${distance}</h4>`;
});

const TwoDotDistance = {
  point1: {
    x: 0,
    y: 0,
  },

  point2: {
    x: 0,
    y: 0,
  },

  setPoints: function (x1, y1, x2, y2) {
    this.point1.x = x1;
    this.point1.y = y1;
    this.point2.x = x2;
    this.point2.y = y2;
    return;
  },

  calculateDistance: function () {
    const distance = Math.sqrt(
      Math.pow(this.point1.x - this.point2.x, 2) +
        Math.pow(this.point1.y - this.point2.y, 2),
    );
    if (isNaN(distance)) return '0';
    return Number(distance).toFixed(2); // 둘째 자리까지 계산
  },
};
