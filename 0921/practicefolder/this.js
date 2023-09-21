// function normalFunction () {
// 	console.log(this);
// }

// normalFunction();

// const myObject = {
//   name: 'sukki',
//   sayHello: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// myObject.sayHello();

// function person(name) {
//   this.name = name;
//   this.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }

// const sukki = new person('sukki'); // this.name ? -> sukki
// const yoon = new person('yoon'); // this.name ? -> yoon

// sukki.sayHello();

const myObjWithArrow = {
  name: 'sukki',
  sayHello: function () {
    const arrowFunction = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
    arrowFunction();
  }
};

myObjWithArrow.sayHello();