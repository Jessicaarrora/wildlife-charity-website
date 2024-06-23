$(document).ready(function () {
  $('#hamburger').click(function () {
    $(this).toggleClass('open');
    $('header').toggleClass('menu-visible');
    $('body').toggleClass('menu-open');
  });
});
