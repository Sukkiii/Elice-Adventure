// reverse함수를 정의하고
// 입력한 문자열을 거꾸로 출력하도록 코딩하기
function reverse (str) {
  let reverStr = '';
  for (let i=str.length-1; i >= 0; i--) {
    reverStr = reverStr + str.charAt(i);
  }
  return reverStr;
} 

document.write(reverse("Hello I'm sukki"));
