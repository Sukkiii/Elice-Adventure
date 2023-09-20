const input = document.getElementById("name");
const setButton = document.getElementById("set-button");
const repeatButton = document.getElementById("repeat-button");
const result = document.getElementById("result");
let cnt = 2;

setButton.addEventListener("click", () => {
  NameRepeater.setName(input.value);
  result.innerHTML = "설정되었습니다.";
});

repeatButton.addEventListener("click", () => {
  const resultString = NameRepeater.repeatName(cnt);
  cnt++;
  result.innerHTML = resultString;
});

const NameRepeater = {
  name: 'My Name',
  setName: function setName(name) {
    this.name = name;
    // function키워드 함수로 this를 선택했을 때, 실행 컨텍스트 안에 있는 NameRepeater를 가리킴
  },
  repeatName: function repeatName(num) {
    return this.name.repeat(num);
    // NameReater의 이름을 num만큼 반복하여 리턴
  },
};