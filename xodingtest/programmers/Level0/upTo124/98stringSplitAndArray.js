const solution = (myString) =>
  myString
    .split('x')
    .sort()
    .filter((_) => _.length !== 0)
