<html>
// 마우스 클릭 이벤트 예시
<p onclick = "changeText(this)">여길 클릭하세요!</p>

<script>
  function changeText(element) {
    element.innerHTML = '내용이 바뀌었습니다!'
  }
</script>

</html>
// 이 함수는 HTML 문서가 로드될 때 실행됨.
window.onload = function() {

  // 아이디가 'text'인 요소를 선택함
  var text = document.getElementById('text');

  text.innerHTML = 'HTML 문서가 로드되었습니다.';
}