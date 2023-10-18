// 마지막 두 원소

// 처음에 작성한 코드
function solution(num_list) {
    let last = num_list[num_list.length-1];
    let twoLast = num_list[num_list.length-2];
    if(last > twoLast) {
        num_list.push(last-twoLast);
    } else {
        num_list.push(last*2);
    }
    return num_list;
}
// 간단하게 만들어볼깡
function solution(num_list) {
    let last = num_list[num_list.length-1];
    let twoLast = num_list[num_list.length-2];
    const pushNum = (last > twoLast) ? last-twoLast : last*2;
    num_list.push(pushNum);

    return num_list;
}

// 응용해본 코드
function solution (num_list) {
  const [twoLast, last] = num_list.splice(-2);
  const add_list = (last > twoLast) ? last-twoLast : last * 2;
  
  num_list.push(add_list);
  return num_list;
}
// 왜 안되지?
// 수정해보자.
// 문제1) splice가 아니라 slice를 써야됨.. 이런 똥멍청이
function solution (num_list) {
  const [twoLast, last] = num_list.slice(-2);
  const add_list = (last > twoLast) ? last-twoLast : last * 2;
  
  num_list.push(add_list);
  return num_list;
}

// 다른 사람의 참신's 풀이

function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
