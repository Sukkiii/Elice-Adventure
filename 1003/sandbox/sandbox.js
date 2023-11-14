const request = new XMLHttpRequest();

// 통신상태가 어떻게 진행되고 있는지를 관찰해주는 코드
request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    // 통신이 잘못됐던 성공했던 끝나긴 함
    console.log('통신에 장애가 발생하였습니다')
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
// 뒤에 숫자를 붙이면 해당 id를 가진 데이터가 나옴 > get에서 parameter를 활용한 통신주소 변경 방식
// https://jsonplaceholder.typicode.com/todos/:id > 통신 결과를 바꿔줄 수 있음. id에 따라서
// https://www.apple.com/:id => 국가코드 => 해당국가의 언어로 나오는 페이지에 호출하라
// apple.com/kr 
// apple.com/jp
// https://trends.google.co.kr/trends/
// https://trends.google.co.kr/trends/explore?q=iphone14pro&date=now%201-d&geo=KR&hl=ko
// q=iphone14pro & date=now % 201 - d & geo=KR & hl=ko
// q=iphone14pro&date=now%201-d&geo=JP&hl=jp
// q=olympic&date=now%201-d&geo=JP&hl=jp
// 이런식으로 주소를 바꿔서 접속할 수 있음

request.send();

// 통신할 준비가 되어서 접속을 요청하겠다.
// 통신에서 open을 하기 위해서 필요한 2가지가 있다.

// 1. 통신방식의 함수가 필요.
// GET, POST, PUT, DELETE, UPDATE

// GET => 정보를 가져오는 것. (접속하고 나오는 모든 것들)
// naver, google에 접속했을 때 메인화면이 보여지는 것이 get. (검색창, 기사 등)
// sns, feed란도 get 통신의 예

// POST => 클라이언트에서 서버쪽으로 정보를 전달해 주는 것
// 로그인할 때 (로그인 아이디, 비밀번호), SNS 사진을 게시하는 것

// PUT => 글을 수정할 때에 사용하는 것. 거의 사용하지 않음
// POST나 PUT 이나 동일한 결과를 가져오고, 보안 이슈가 잇기 때문에 잘 사용하지 않는다
// 내부 통신에서 사용할 때 가끔 사용한다.

// DELETE => 말 그대로 삭제를 위해서 사용하는 http 함수

// UPDATE => 글을 수정하기 위해서 사용한다

// 2. 통신을 할 주소가 필요. (url. endpoint.)

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/todotodo');
// 이런식으로 하면 404 not found가 발생함 (캡쳐해둠)

//https://jsonplaceholder.typicode.com/todos/todotodo 494 (Not Found)
// 통신의 상태 코드

// 절대적으로 정해진 규칙음 없음. 단, 암묵적인 formal한 룰은 존재
// 200. 통신에 문제 없음 ok. 2XX. 
// 30X. 새로고침... 방문했던 페이지를 또 다시 방문했을 때.
// 브라우저 한 번 접속... 데이터를 저장 하는 경향 ... update 반드시 새로고침 해줘야 하는 경우들이 존재,
// 데이터가 온전히 전달되었는지 아닌지...
// 4xx. 404 ... 너가 요청한 주소가 존재하지 않는다. 너가 뭘 요청하는지 모르겠다.
// 500. 5xx ... internal server error. 서버 내부에서 에러가 간 경우.
// 요청이 있으면 응답이 있어야하는데, 데이터 서버가 문제가 생겨서 응답이 없는것

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// rest aPI 문서를 만들 때 