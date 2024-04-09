(function () {
  const sliders = document.querySelectorAll(".testimony__body");
  const buttonNext = document.querySelector("#next");
  const buttonBefore = document.querySelector("#before");
  let currentIndex = 0;

  buttonNext.addEventListener("click", () => {
    changePosition(1);
  });

  buttonBefore.addEventListener("click", () => {
    changePosition(-1);
  });

  const changePosition = (increment) => {
    sliders[currentIndex].classList.remove("testimony__body--show");
    currentIndex = (currentIndex + increment + sliders.length) % sliders.length;
    sliders[currentIndex].classList.add("testimony__body--show");
  };
})();
