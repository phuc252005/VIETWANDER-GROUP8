//header không che mất nội dung bên dưới
  function updateMainPadding() {
    const header = document.querySelector("header");
    const main = document.querySelector(".intro-container");
    if (header && main) {
      main.style.paddingTop = header.offsetHeight + "px";
    }
  }

  window.addEventListener("load", updateMainPadding);
  window.addEventListener("resize", updateMainPadding);
  //ẩn đi
window.addEventListener('scroll', function () {
    const header = document.querySelector('header'); //Lấy phần tử <header> trong trang và gán vào biến header
    const scrollTop = window.pageYOffset; //Lấy vị trí cuộn hiện tại theo chiều dọc của trang (tính từ trên xuống)
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;//Chiều cao của vùng hiển thị (viewport)
    const distanceToBottom = documentHeight - (scrollTop + windowHeight); //khoảng cách còn lại từ đáy màn hình hiện tại đến đáy trang web

    // Nếu cách đáy trang < 300px thì ẩn header
    if (distanceToBottom < 300) {
      header.style.top = "-300px"; // đẩy header ra khỏi màn hình
    } else {
      header.style.top = "0";
    }
  });

//trở về đầu trang
// Hiển thị nút khi cuộn xuống 100px
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Hàm cuộn về đầu trang
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

//slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

  showSlide(currentSlide); // Hiển thị slide đầu tiên
  setInterval(nextSlide, 8000); // Chuyển sau mỗi 8 giây

    // Bắt sự kiện click
document.getElementById('underbanner-prev').addEventListener('click', prevSlide);
document.getElementById('underbanner-next').addEventListener('click', nextSlide);

function plusUnderbannerSlides(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}


