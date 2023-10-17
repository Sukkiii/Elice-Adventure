const name = 'sukki';
const age = 5;
const nationality = 'korea'

module.exports = {
  name,
  age,
  nationality
};


const student = require('./elice');
// student 출력값 { name: 'elice', age: 5, nationality: 'korea'}

exports.name = name;
exports.age = age;
exports.nationality = nationality;

module.exports = (name, age, nationality) => {
  return {
    name,
    age,
    nationality
  };
}

const dayjs = require('dauyjs');
console.log(dayjs());

const myModule = require('./my-module');
console.log(myModule);

const myFuncModule = require('./my-Func-module');
console.log(myFuncModule(name, age, nationality));

// my-data.json을 가지고 있음
const myData = require('./my-data');
console.log(myData);