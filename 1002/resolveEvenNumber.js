function resolveWhenEvenNumber (n) {
    return new Promise((resolve, reject) => {
        if(n % 2 === 0){
            resolve(`${n}은 짝수입니다!`)
        } else {
            reject(`${n}은 홀수입니다...`)
        }
    })
}
const inputA = 1

module.exports = { inputs: [inputA], func: resolveWhenEvenNumber }
