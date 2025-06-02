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
      // Cuộn xuống → ẩn header ở -80px
      header.style.top = "-55px";
    } else {
      // Cuộn lên → hiện lại header
      header.style.top = "0";
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

//chạy slide dưới banner
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

/* js cho phần xem thêm */
document.addEventListener('DOMContentLoaded', function () {
  const gridId = 'popular-tours';
  const tourGrid = document.getElementById(gridId);
  const tours = tourGrid.querySelectorAll('.tour-item');
  const loadMoreBtn = document.querySelector('.load-more');
  const initialCount = 6;
  const step = 3;

  let currentIndex = 0;

  function initTours() {
    for (let i = 0; i < tours.length; i++) {
      if (i < initialCount) {
        tours[i].classList.add('visible');
      } else {
        tours[i].classList.remove('visible');
      }
    }
    currentIndex = initialCount;
    loadMoreBtn.textContent = 'Xem thêm';
    loadMoreBtn.classList.remove('collapsed');
  }

  function toggleTours() {
    if (loadMoreBtn.textContent === 'Thu gọn') {
      initTours();
    } else {
      const nextIndex = currentIndex + step;
      for (let i = currentIndex; i < nextIndex && i < tours.length; i++) {
        tours[i].classList.add('visible');
      }
      currentIndex = nextIndex;

      if (currentIndex >= tours.length) {
        loadMoreBtn.textContent = 'Thu gọn';
        loadMoreBtn.classList.add('collapsed');
      }
    }
  }

  // Khởi tạo ban đầu
  initTours();

  // Bắt sự kiện click
  loadMoreBtn.addEventListener('click', toggleTours);
});
/* js cho slideshow ảnh các điểm đến hấp dẫn */
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
  scrollToActiveThumbnail();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  scrollToActiveThumbnail();
}

function showSlides(n) {
  const slides = document.getElementsByClassName("thumbnail");
  const mainImage = document.getElementById("main-image");
  const slideTitle = document.getElementById("slide-title");
  const slideDescription = document.getElementById("slide-description");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  const currentThumbnail = slides[slideIndex - 1];
  mainImage.src = currentThumbnail.getAttribute("data-large-image") || currentThumbnail.src;
  slideTitle.textContent = currentThumbnail.getAttribute("data-title");

  const descriptionText = currentThumbnail.getAttribute("data-description") || "";
  const paragraphs = descriptionText.split("||").filter(p => p.trim());
  slideDescription.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join("");

  currentThumbnail.classList.add("active");
}

function carouselScroll(direction) {
  const wrapper = document.querySelector(".thumbnail-wrapper");
  const scrollAmount = 200;
  wrapper.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

function scrollToActiveThumbnail() {
  const wrapper = document.querySelector(".thumbnail-wrapper");
  const activeThumbnail = document.querySelector(".thumbnail.active");
  if (activeThumbnail) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const thumbRect = activeThumbnail.getBoundingClientRect();
    const scrollPosition = activeThumbnail.offsetLeft - wrapperRect.width / 2 + thumbRect.width / 2;
    wrapper.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }
}