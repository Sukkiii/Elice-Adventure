function resolveWhenPositiveNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      resolve(`${n}은 양수입니다!`);
    } else {
      reject(`${n}은 음수입니다...`);
    }
  });
}

const inputA = 1;

module.exports = { inputs: [inputA], func: resolveWhenPositiveNumber };
