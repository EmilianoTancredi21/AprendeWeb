(function () {
  const openButton = document.querySelector(".navigation__menu");
  const menu = document.querySelector(".navigation__links");
  const closeMenu = document.querySelector(".navigation__close");

  openButton.addEventListener("click", () => {
    menu.classList.add("navigation__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("navigation__link--show");
  });
})();
