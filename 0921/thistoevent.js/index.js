class Menu {
  handleEvent(event) {
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }

  onMousedown() {
    elem.innerHTML = '마우스 버튼을 눌렀습니다.';
  }

  onMouseup() {
    elem.innerHTML = '마우스 버튼을 뗐습니다.';
  }
}

let menu = new Menu();
const elem = document.getElementById('elem');
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);
