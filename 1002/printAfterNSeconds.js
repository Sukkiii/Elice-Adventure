function printAfterNSeconds(n) {
    const count = n*1000;
    setTimeout(()=> {
        console.log(`${n}초가 경과되었습니다.`)
    },count)
}

const inputA = 2

module.exports = { inputs: [inputA], func: printAfterNSeconds }
