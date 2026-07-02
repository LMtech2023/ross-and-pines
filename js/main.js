(function () {
  "use strict";

  var burger = document.querySelector(".header__burger");
  var mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      mobileMenu.classList.toggle("header__mobile-menu--open");
    });
  }

  var contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you. A Ross & Pines team member will contact you shortly.");
    });
  }
})();
