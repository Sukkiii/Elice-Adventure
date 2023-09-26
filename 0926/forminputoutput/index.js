const form = document.getElementById("form");
const input = document.getElementById("input");
const answer = document.getElementById("answer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const rainPercent = input.value;
  
  if(rainPercent >= 50){
    answer.innerHTML = '우산을 챙긴다.'
  } else answer.innerHTML = '그냥 간다.'

  form.reset();
});
