const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const slide = document.querySelectorAll(".gallery-slide__item");

let currentSlide = 0;

const showSlide = (n) => {
  slide[currentSlide].classList.remove("active");
  slide[n].classList.add("active");
  currentSlide = n;
};

const nextSlide = () => {
  if (currentSlide === slide.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  if (currentSlide === 0) {
    showSlide(slide.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
};

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

// Đếm ngược thời gian
const count = document.querySelector(".preorder-count");

const countDown = () => {
  const now = new Date().getTime();
  const preOrder = new Date("2022-11-30").getTime();
  const distance = preOrder - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  count.innerHTML = `
    <div class="preorder-count__item">
        <span class="preorder-count__number">${days}</span>
        <span class="preorder-count__text">Ngày</span>
    </div>
    <div class="preorder-count__item">
        <span class="preorder-count__number">${hours}</span>
        <span class="preorder-count__text">Giờ</span>
    </div>
    <div class="preorder-count__item">
        <span class="preorder-count__number">${minutes}</span>
        <span class="preorder-count__text">Phút</span>
    </div>
    <div class="preorder-count__item">
        <span class="preorder-count__number">${seconds}</span>
        <span class="preorder-count__text">Giây</span>
    </div>
    `;

  if (distance < 0) {
    clearInterval(x);
    count.innerHTML = "EXPIRED";
  }
};

setInterval(countDown, 1000);
