/* Lumio Apps: light/dark switch. Saved only in this browser (localStorage). */
(function () {
  var r = document.documentElement, KEY = 'lumio-theme';
  try { var s = localStorage.getItem(KEY); if (s === 'light' || s === 'dark') r.setAttribute('data-theme', s); } catch (e) {}
  function effective() {
    var t = r.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function sync() {
    var b = document.getElementById('theme-toggle');
    if (!b) return;
    b.setAttribute('aria-label', effective() === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('theme-toggle');
    if (!b) return;
    sync();
    b.addEventListener('click', function () {
      var next = effective() === 'light' ? 'dark' : 'light';
      r.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
  });
  if (window.matchMedia) {
    var m = matchMedia('(prefers-color-scheme: light)');
    var f = function () { sync(); };
    if (m.addEventListener) m.addEventListener('change', f);
  }
})();
