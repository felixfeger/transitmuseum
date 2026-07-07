// City Metro Transit Museum — shared site script
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('nav.main-nav a[data-page]');
  var current = document.body.getAttribute('data-page');
  links.forEach(function (a) {
    if (a.getAttribute('data-page') === current) a.classList.add('active');
  });
});
