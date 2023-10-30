function solution(num_list) {
  let sum = 0;
  let multi = 1;

  for (let i = 0; i < num_list.length; i++) {
    multi = num_list[i] * multi;
    sum += num_list[i];
  }
  let square = sum * sum;
  return multi < square ? 1 : 0;
}

function solution(num_list) {
    let mul = num_list.reduce((a, c) => {return a*c ;}, 1);
    let sum = num_list.reduce((a, c) => {return a+c ;}, 0);
    return (mul < sum*sum) ? 1 : 0;
}

function solution(num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}
