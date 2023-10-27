function solution(l, r) {
  const range = Array.from({ length: r - l + 1 }, (_, index) => l + index);

  const filter = range.filter((n) =>
    // n.toString().includes('0') || n.toString().includes('5') || /^[05]+$/.test(n)
    /^[05]+$/.test(n.toString())
  );
  if (filter.length === 0) filter.push(-1);
  return filter;
}
