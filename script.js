window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItem = document.querySelectorAll(".slider-item");
  const prevBtn = document.querySelector(".prev-icon");
  const nextBtn = document.querySelector(".next-icon");
  const sliderWidth = sliderItem[0].offsetWidth;
  const sliderLength = sliderItem.length;
  let currentPosition = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    sliderActive(1);
  });
  prevBtn.addEventListener("click", function () {
    sliderActive(-1);
  });
  let sliderActive = (direction) => {
    if (direction === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      currentPosition = currentPosition - sliderWidth;
      sliderMain.style = `transform:translate(${currentPosition}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      currentPosition = currentPosition + sliderWidth;
      sliderMain.style.transform = `translate(${currentPosition}px)`;
      index--;
    }
  };
});
