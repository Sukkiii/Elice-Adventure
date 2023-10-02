function countDownThree () {
    console.log(3);
    setTimeout(()=>console.log(2),1000);
    setTimeout(()=>console.log(1),2000);
    setTimeout(()=>console.log('끝'),3000);
}

module.exports = { inputs: [], func: countDownThree }
