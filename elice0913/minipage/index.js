// 1) Scroll Navigation

var aTags = document.querySelectorAll('header a');
// 전체 header 안에 있는 a 태그들을 가져와서
for (var i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    // aTag안에 onclick 이벤트를 전부 적용 시켜줘야하는것 
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    // this.getAttribute('href')를 이용해서 a태그 안의 href를 가져옴
    // document.querySelector로 a태그를 가져오게 됨

    window.scrollTo({
      behavior: 'smooth',
      // 어떻게 scroll할 지
      top: target.offsetTop,
    });
  };
}

// 2) Image Slider

var slider = document.querySelector('#slider');
var slides = slider.querySelector('.slides');
var slide = slides.querySelectorAll('.slide');

var currentSlide = 0;
//현재 화면에 보여지는 슬라이드가 몇번째인지

setInterval(function () {
  var from = -(1024 * currentSlide);
  var to = from - 1024;
  slides.animate({
      marginLeft: [from + 'px', to + 'px']
    }, {
      duration: 500,
      easing: 'ease',
      iterations: 1,
      fill: 'both',
    });
  currentSlide++;
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
  }
}, 3000);


var links = document.querySelectorAll('.tabs-list li a')
var items = document.querySelectorAll('.tabs-list li')
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault();
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute('href');
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }  
} 

// 4) Click Image Slider
document.querySelector(".right-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active");
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null) {
        nextSlide = currentSlide.parentElement.firstElementChild;
    }
        currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    nextSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function () {
    var currentSlide = document.querySelector("#photo .slide.active");
    var nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null) {
        nextSlide = currentSlide.parentElement.firstElementChild;
    }
        currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide.classList.remove("active");
    nextSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}
  
