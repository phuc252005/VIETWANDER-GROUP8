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

/* js cho form gửi ý kiến */
$(document).ready(function () {
    $('#submitComment').click(function () {
        const name = $('#commentAuthor').val().trim();
        const content = $('#commentText').val().trim();
        if (content === "") {
            $('#errorText').show();
            return;
            } else {
                $('#errorText').hide();
            }
        const newComment = `
        <div class="comment">
        <div class="name">${$('<div>').text(name || 'Ẩn danh').html()}</div>
        <div class="text">${$('<div>').text(content).html()}</div>
        </div>
        `;
        $('#commentList').append(newComment);
        $('#commentAuthor').val('');
        $('#commentText').val('');
    });
});
/* js cho icon trở về đầu trang */
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
/* js cho carousel */
//slideshow ảnh
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
  }, 4000);
}

// Khởi tạo slide đầu tiên
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
  autoSlide();
});
