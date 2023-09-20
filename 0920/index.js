// let o = {
//   name: 'Daniel',
//   f1: () => {
//     console.log('[f1] this : ', this);
//   },
//   f2: function() {
//     console.log('[f2] this : ', this);
//   },
// };

// o.f1();  // global
// o.f2();  // o

// setTimeout(o.f1, 10);  // global
// setTimeout(o.f2, 20);  // global

// let o = {
//   name: 'Daniel',
//   printName: function() {
//     console.log('내 이름은 ', this.name);
//   },
// };

// o.printName();                       // 내 이름은 Daniel
// setTimeout(o.printName, 10);         // 내 이름은 undefined
// setTimeout(o.printName.bind(o), 20); // 내 이름은 Daniel

// const o = {
//   method() {
//     console.log('context : ', this)      // o
//     let f1 = function() {
//       console.log('[f1] this : ', this);
//     }
//     let f2 = () => 
//       console.log('[f2] this : ', this);
//     f1();     // global
//     f2();     // o
//   }
// };
// o.method()

let o= {
  name: "Daniel",
  age: 23,
  address: "Street",
  job: "Software Engineer",
}
let o2 = {
  ...o, 
  name: "Tom", 
  age: 24
}
let o3 = { 
  name: "Tom", 
  age: 24, 
  ...o 
}
o2.job// Software Engineer
o2.name
o2.age
o3.name// Daniel
o3.age