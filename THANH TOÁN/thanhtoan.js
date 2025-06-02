// Tính tiền đặt cọc
const basePrice = 2990000;
const adultInput = document.getElementById("adults");
const childInput = document.getElementById("children");
const infantInput = document.getElementById("infants");
const totalDisplay = document.getElementById("total-price");

function calculateDeposit() {
    const adults = parseInt(adultInput.value) || 0;
    const children = parseInt(childInput.value) || 0;
    const infants = parseInt(infantInput.value) || 0;

    const total = (adults * basePrice) + (children * basePrice * 0.8);
    const deposit = total * 0.1;

    totalDisplay.textContent = deposit.toLocaleString('vi-VN') + "đ";
}

adultInput.addEventListener("input", calculateDeposit);
childInput.addEventListener("input", calculateDeposit);
infantInput.addEventListener("input", calculateDeposit);
calculateDeposit();

// Slideshow
const tourImages = [
    "images/tourdalat1.jpg",
    "images/tourdalat1hover.jpg",
    "images/tourdalat2.jpg"
];
let currentSlide = 0;

function changeSlide(n) {
    currentSlide = (currentSlide + n + tourImages.length) % tourImages.length;
    const slideImg = document.getElementById("slide-img");
    slideImg.src = tourImages[currentSlide];
}
