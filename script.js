const container = document.querySelector(".content-con");
const items = document.querySelectorAll(".content-item");

const gap = 30;
const itemWidth = items[0].offsetWidth;
const moveAmount = itemWidth + gap;

let index = 0;
let sliderInterval;

// clone ทั้งชุด
items.forEach(item => {
  container.appendChild(item.cloneNode(true));
});

function slide() {

  index++;
  container.style.transform = `translateX(-${index * moveAmount}px)`;

  if (index === items.length) {

    setTimeout(() => {
      container.style.transition = "none";
      container.style.transform = "translateX(0)";
      index = 0;

      container.offsetHeight;
      container.style.transition = "transform 1s ease";
    }, 1000);
  }
}

function startSlider() {
  sliderInterval = setInterval(slide, 4000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

startSlider();

// 🔥 หยุดตอนเอาเมาส์ชี้
container.addEventListener("mouseenter", stopSlider);

// 🔥 กลับมาเล่นต่อเมื่อเอาเมาส์ออก
container.addEventListener("mouseleave", startSlider);
