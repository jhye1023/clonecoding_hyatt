let sliderImages = document.querySelectorAll(".image-box");
let arrowRight = document.querySelector(".right");
let arrowLeft = document.querySelector(".left");
let dots = document.querySelectorAll(".dot");
let media = document.querySelectorAll(".media__overlay")

let current = 0;

function reset() {
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
    media[i].style.display = 'none';
    dots[i].classList.remove("active");
    }
  }

function startSlide() {
  reset();
  sliderImages[0].style.display = 'inline-block';
  media[0].style.display = 'block';
  dots[0].classList.add("active");
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display= 'inline-block';
  dots[current - 1].classList.add("active");
  media[current - 1].style.display = 'block';
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].style.display= 'inline-block';
  dots[current + 1].classList.add("active");
  media[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener("click", function() {
  if(current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", function() {
  if(current === sliderImages.length -1) {
     current = -1;
  }
  slideRight();
});





startSlide();