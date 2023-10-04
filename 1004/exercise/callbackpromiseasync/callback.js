function getName(cb) {
  setTimeout(() => {
    cb('suk');
  }, 2000);
}

getName((name) => {
  console.log(name);
})

getName((name) => {
  console.log(name);
})

getName((name) => {
  console.log(name);
})

//2초 뒤
//suk
//suk
//suk

function getName(cb) {
  setTimeout(() => {
    cb('suk');
  }, 2000)
}
function getAge(cb) {
  setTimeout(() => {
    cb("6");
  }, 2000);
}
function getAddress(cb) {
  setTimeout(() => {
    cb("Seoul");
  }, 2000);
}

getName((name) => {
  getAge((age) => {
    getAddress((address) => {
      console.log(name, age, address)
    })
  })
})