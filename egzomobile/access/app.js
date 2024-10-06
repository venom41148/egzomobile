const hambergery_mobile = document.querySelector(".hambergery_mobile");
let navOpen = false;
hambergery_mobile.addEventListener("click", function () {
  if (navOpen) {
    hambergery_mobile.classList.remove("nav__btn--open");
    navOpen = false;
  } else {
    hambergery_mobile.classList.add("nav__btn--open");
    navOpen = true;
  }
});