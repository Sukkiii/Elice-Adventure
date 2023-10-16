function solution(num_list) {
    let evenArr = num_list.filter((num) => num % 2 === 0);
    let oddArr = num_list.filter((num) => num % 2 !== 0);

    return Number(evenArr.join('')) + Number(oddArr.join(''));
}

function solution(num_list) {
    var even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc+cur, '');
    var odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc+cur, '');
    return Number(even) + Number(odd);
}
