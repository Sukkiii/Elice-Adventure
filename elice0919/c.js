console.log("x", x); // x hello
console.log('add', add(1,2)); // add NaN

// error나는 이유
// c.js안에서 x를 선언한 적이 없음
// 스코프에 아무것도 없음
// x is not defined

// 스코프
// a.js : x, y, add, subtract

// 이렇게 해서 가능하도록 하고 싶다면,
// a.js에 export를 넣어줘야 함