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
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const distanceToBottom = documentHeight - (scrollTop + windowHeight);

  if (distanceToBottom < 300) {
    // Nếu gần đáy trang thì ẩn hoàn toàn
    header.style.top = "-300px";
  } else {
    if (scrollTop > lastScrollTop) {
      // Cuộn xuống → ẩn header ở -55px
      header.style.top = "-55px";
    } else {
      // Cuộn lên → hiện lại header
      header.style.top = "0";
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


//ảnh slide giới thiệu tour
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoSlideTimer;

function showSlide(n) {
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  clearTimeout(autoSlideTimer); // Dừng chạy tự động khi dùng nút
  slideIndex += n;
  showSlide(slideIndex);
  autoSlide(); // Tiếp tục chạy tự động
}

function autoSlide() {
  autoSlideTimer = setTimeout(() => {
    slideIndex++;
    showSlide(slideIndex);
    autoSlide(); // gọi lại chính nó
  }, 10000);
}

// Khởi tạo slide đầu tiên
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  autoSlide();
});

// Hiện gt chung lịch trình
window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".day-section");
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // ẩn khi lướt qua
      }
    });
  });


//Lưu ý về giá tour
function toggleDropdown(header) {
  const content = header.nextElementSibling;
  const isActive = header.classList.contains('active');
  
  // Toggle arrow and content
  header.classList.toggle('active');
  content.style.display = isActive ? 'none' : 'block';
}
//có thể bạn sẽ quan tâm
  function toggleMoreTours() {
    const more = document.getElementById("moreTours");
    const button = document.querySelector(".load-more");

    if (more.style.display === "none") {
      more.style.display = "block";
      button.textContent = "Thu gọn ▲";
    } else {
      more.style.display = "none";
      button.textContent = "Xem thêm ▼";
    }
  }

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

