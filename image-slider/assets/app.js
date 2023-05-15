const slides = document.querySelectorAll(".slide >img");
const paginationContainer = document.querySelector(".pagination-container");
const slidesArray = Array.from(slides);
const slidesCount = slidesArray.length;
const prevBtn = document.getElementById("leftbtn");
const nextBtn = document.getElementById("rightbtn");
let currentIndex = 0;

//add data attributes to img
slides.forEach((slide, index) => {
  slide.id = index + 1;
});

//creat dynamic pagination
function creatPagination() {
  const paginationUl = document.createElement("ul");
  for (let i = 0; i < slidesCount; i++) {
    const paginationEle = document.createElement("li");
    paginationEle.textContent = i + 1;
    paginationEle.dataset.num = i;
    paginationUl.append(paginationEle);
  }
  paginationContainer.append(paginationUl);
}
creatPagination();

const paginationNums = document.querySelectorAll(
  ".pagination-container >ul>li"
);
prevBtn.addEventListener("click", () => {
  if (currentIndex == 0) {
    return;
  } else {
    currentIndex--;
    showSlide();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex + 1 == slidesCount) {
    return;
  } else {
    currentIndex++;
    showSlide();
  }
});
//get current index from pagination numder
paginationNums.forEach((paginationNum) => {
  paginationNum.addEventListener("click", () => {
    currentIndex = parseInt(paginationNum.dataset.num);
    showSlide();
  });
});

//show slide
function showSlide() {
  removeActive();
  slides[currentIndex].classList.add("active");
  paginationNums[currentIndex].classList.add("active");

  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentIndex + 1 == slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
//to show default slide
showSlide();

//reset all slides and pagination to click to anthor one
function removeActive() {
  slides.forEach((slide) => slide.classList.remove("active"));
  paginationNums.forEach((paginationNum) =>
    paginationNum.classList.remove("active")
  );
}
