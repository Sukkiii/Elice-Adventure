function solution(l, r) {
  const range = Array.from({ length: r - l + 1 }, (_, index) => l + index);

  const filter = range.filter((n) =>
    // n.toString().includes('0') || n.toString().includes('5') || /^[05]+$/.test(n)
    /^[05]+$/.test(n.toString())
  );
  if (filter.length === 0) filter.push(-1);
  return filter;
}

function gen50() {
    let i = 1;

    while(true) {
        yield Number(Number(i).toString(2)) * 5;
        i++;
    }
}
function solution(l, r) {
    const n = gen50();
    let a = 0;
    const arr = [];

    while(a < l) { a = n.next().value; }
    while(a <= r) { arr.push(a); a = n.next().value; }

    return arr.length ? arr : [-1];
}