
document.addEventListener("DOMContentLoaded", function () {
    var dayNightToggle = document.getElementById("dayNightToggle");

    dayNightToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode", dayNightToggle.checked);
    });
});

$(document).ready(function () {
    $('#hamburger').click(function () {
      $(this).toggleClass('open');
      $('header').toggleClass('menu-visible');
      $('body').toggleClass('menu-open');
    });
  });
  