// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   explain() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// }
// const duck = new Animal ('duck', 'quack');

// const duck = {
//   name: 'duck',
//   sound: 'quack',
// };

// const { name, sound } = duck;

// console.log("name", name);
// console.log("sound", sound);

// const animals = ['duck', 'cat', 'bear'];
// const [first, second, third] = animals;

// console.log('first', first)
// console.log("second", second);
// console.log("third", first);

// db.getUsers((err, users) => {
//   if (err) {
//     ...
//     return;
//   }
//   async1(users, (r1) => {
//     async2(r1, (r2) => {
//       async3(r2, (r3) => {
//       ...
//       });
//     });
//   });
// });

// db.getUsersPromise()
//   .then((users) => {
//     return promise1(users);
//   })
//   .then(r1 => promise2(r1))
//   .catch(... );

// function getUsersPromise(params) {
//   return new Promise((resolve, reject) => {
//     getUsers(params, (err, users) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(users);
//     });
//   });
// }

// async function doSomething () {
//   const r1 = await promise1();
//   const r2 = await promise2(r1);
//   const r3 = await promise3(r1, r2);

//   return r3;
// };

// doSomething().then(r3 => {
//   console.log(r3)
// });

// function doSomething(msg) {
//   return promise1()
//     .then(r => {
//       console.log(r)
//     })
//     .catch(e => {
//       console.error(e)
//     });
// }

// async function doSomething(msg) {
//   try {
//     const r = await promise1();
//     console.log(r);
//   } catch(e) {
//     console.error(e);
//   }
// }

// async function sync() {
//   const r1 = await promise1();
//   const r2 = await promise2();
//   console.log(r1, r2)
// }
// async function parallel() {
//   const [r1, r2] = await Promise.all([
//     promise1(),
//     promise2(),
//   ]);
//   console.log(r1, r2);
// }