function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}

printWithDelay(() => console.log('async callback'), 3000);

function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

module.exports = { printWithDelay };
