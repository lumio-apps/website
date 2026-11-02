/* Lumio Apps home: doors and the theme cord. Nothing is stored or sent. */
(function () {
  var grid = document.querySelector('.dr-grid');
  if (grid) {
    grid.parentNode.classList.add('js');
    var doors = grid.querySelectorAll('.dr');
    var set = function (d, open) {
      d.classList.toggle('open', open);
      var b = d.querySelector('.dr-leaf');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      b.setAttribute('aria-label', d.querySelector('.dr-plate').textContent.replace(/^\d+/, '') + (open ? ': close the door' : ': open the door'));
    };
    Array.prototype.forEach.call(doors, function (d) {
      d.querySelector('.dr-leaf').addEventListener('click', function () { set(d, !d.classList.contains('open')); });
    });
    var all = document.getElementById('hd-all'), openAll = false;
    if (all) all.addEventListener('click', function () {
      openAll = !openAll;
      Array.prototype.forEach.call(doors, function (d) { set(d, openAll); });
      all.textContent = openAll ? 'close them all' : 'open them all';
    });
  }
  var cord = document.getElementById('hd-cord'), tog = document.getElementById('theme-toggle');
  if (cord && tog) cord.addEventListener('click', function () {
    cord.classList.add('pulled');
    setTimeout(function () { cord.classList.remove('pulled'); }, 450);
    tog.click();
  });
})();
