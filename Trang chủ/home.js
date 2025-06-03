// Cập nhật padding cho phần nội dung dưới header
function updateMainPadding() {
  const header = document.querySelector("header");
  const main = document.querySelector(".intro-container");
  if (header && main) {
    main.style.paddingTop = header.offsetHeight + "px";
  }
}

window.addEventListener("load", updateMainPadding);
window.addEventListener("resize", updateMainPadding);

// Ẩn hiện header khi cuộn - chỉ đẩy lên 80px
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
      // Cuộn xuống → ẩn header ở -80px
      header.style.top = "-80px";
    } else {
      // Cuộn lên → hiện lại header
      header.style.top = "0";
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});



let underbannerIndex = 0;
let underbannerSlides = document.getElementsByClassName("underbanner-slide");
let underbannerTimer;

function showUnderbannerSlides() {
  for (let i = 0; i < underbannerSlides.length; i++) {
    underbannerSlides[i].classList.remove("active");
  }

  underbannerIndex++;
  if (underbannerIndex > underbannerSlides.length) underbannerIndex = 1;
  underbannerSlides[underbannerIndex - 1].classList.add("active");

  underbannerTimer = setTimeout(showUnderbannerSlides, 4000);
}

function plusUnderbannerSlides(n) {
  clearTimeout(underbannerTimer);
  underbannerIndex += n - 1;
  if (underbannerIndex < 0) underbannerIndex = underbannerSlides.length - 1;
  showUnderbannerSlides();
}

window.onload = showUnderbannerSlides;

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
const slidesPerView = 4;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesPerView;
  } else if (currentIndex > totalSlides - slidesPerView) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 25;
  slider.style.transform = `translateX(${offset}%)`;
}


window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Hiển thị lần lượt các review-item khi cuộn tới
function revealReviewItems() {
  const reviewItems = document.querySelectorAll('.review-item');
  const triggerBottom = window.innerHeight * 0.9;

  reviewItems.forEach((item, index) => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add('active');
      }, index * 200); // delay từng item 200ms
    }
  });
}

window.addEventListener('scroll', revealReviewItems);
window.addEventListener('load', revealReviewItems);


let newsSlideIndex = 0;
const newsSlides = document.querySelectorAll('.news-slide');
const totalNewsSlides = newsSlides.length;
const newsSlider = document.querySelector('.news-slider');
const slidesPerView1 = 4;

function moveNewsSlide(direction) {
  newsSlideIndex += direction;

  // Giới hạn chỉ số slide
  if (newsSlideIndex < 0) {
    newsSlideIndex = totalNewsSlides - slidesPerView1;
  } else if (newsSlideIndex > totalNewsSlides - slidesPerView1) {
    newsSlideIndex = 0;
  }

  // Tính toán vị trí dịch chuyển (%)
  const offset = -newsSlideIndex * (100 / slidesPerView1);
  newsSlider.style.transform = `translateX(${offset}%)`;
}

// Tự động chuyển slide mỗi 4 giây

// Gọi hàm khi tải trang để kích hoạt hiệu ứng
window.addEventListener('load', () => {
  moveNewsSlide(0);
});


let hotSaleIndex = 0;
const hotSaleSlides = document.querySelectorAll('.hot-sale-slider .slide');
const hotSaleSlider = document.querySelector('.hot-sale-slider .slider');
const slidesPerViewHotSale = 4;

function moveHotSaleSlide(direction) {
  hotSaleIndex += direction;

  if (hotSaleIndex < 0) {
    hotSaleIndex = hotSaleSlides.length - slidesPerViewHotSale;
  } else if (hotSaleIndex > hotSaleSlides.length - slidesPerViewHotSale) {
    hotSaleIndex = 0;
  }

  const offset = -hotSaleIndex * 25;
  hotSaleSlider.style.transform = `translateX(${offset}%)`;
}



window.addEventListener('load', () => {
  moveHotSaleSlide(0);
});



function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Đóng modal khi click ra ngoài nội dung
window.onclick = function(event) {
  const loginModal = document.getElementById('login-modal');
  const registerModal = document.getElementById('register-modal');
  
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  } else if (event.target === registerModal) {
    registerModal.style.display = "none";
  }
};



// search
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');

  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const keyword = searchInput.value.trim().toLowerCase();
        const tourItems = document.querySelectorAll('.tour-item');

        tourItems.forEach(item => {
          const title = item.querySelector('h3')?.textContent.toLowerCase() || "";
          const itinerary = item.querySelector('.itinerary')?.textContent.toLowerCase() || "";

          if (title.includes(keyword) || itinerary.includes(keyword)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  }
});

// carousel
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.underbanner-slide');
  const slideContainer = document.querySelector('.underbanner-slides');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }

  document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Auto-slide every 5 seconds (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
});
