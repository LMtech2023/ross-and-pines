(function () {
  "use strict";

  var burger = document.querySelector(".header__burger");
  var menu = document.querySelector(".header__menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.toggle("header__menu--open");
    });
  }

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });
})();
