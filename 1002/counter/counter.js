const Counter = {
  count: 0,

  getCount: function () {
    return this.count;
  },

  resetCount: function () {
    this.count = 0;
  },

  incrementSync: function () {
    const currentTime = Date.now();

    while(true) {
        const now = Date.now();
        if (now - currentTime > 3000) break;
    }
    this.count++;
  },

  incrementAsync: function (callback) {
    setTimeout(() => {
        this.count++;
        callback();
    }, 3000)
  },
};

const syncButton = document.getElementById("sync");
const asyncButton = document.getElementById("async");
const result = document.getElementById("result");
const blink = document.getElementById("blink");
blink.style.width = "100px";
blink.style.height = "100px";
blink.style.background = "red";
blink.style.marginTop = "12px";

setInterval(() => {
  blink.style.background = blink.style.background === "red" ? "blue" : "red";
}, 500);

syncButton.addEventListener("click", () => {
  Counter.incrementSync();
  result.innerHTML = Counter.getCount();
});

asyncButton.addEventListener("click", () => {
  Counter.incrementAsync(() => {
    result.innerHTML = Counter.getCount();
  });
});

result.innerHTML = 0;
