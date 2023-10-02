let isInThrottle;
function increaseScoreDuringTyping() {
  if (isInThrottle) {
    return;
  }
  isInThrottle = true;

  setTimeout(() => {
    const score = document.querySelector("#score");
    const newScore = parseInt(score.innerText) + 1;
    score.innerText = newScore;

    isInThrottle = false;
  }, 500);
}

const nameElem = document.querySelector("#inputName");
nameElem.addEventListener("input", increaseScoreDuringTyping);
