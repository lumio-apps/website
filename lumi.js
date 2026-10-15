/* Lumi, the Lumio robot: a floating mascot on the home page. Decorative only. */
(function () {
  var host = document.getElementById("lumi");
  if (!host) return;
  var flame = '<g class="lumi-flame"><ellipse cx="50" cy="156" rx="6" ry="9" fill="#ffb347"/><ellipse cx="70" cy="156" rx="6" ry="9" fill="#ffb347"/><ellipse cx="50" cy="155" rx="3" ry="5" fill="#fff3b0"/><ellipse cx="70" cy="155" rx="3" ry="5" fill="#fff3b0"/></g>';
  host.innerHTML =
    '<div class="lumi-shadow"></div><div class="lumi-bot">' +
    '<svg viewBox="0 0 120 170" aria-hidden="true" focusable="false">' + flame +
    '<g class="lumi-legL"><rect fill="#cfc9f7" x="44" y="120" width="12" height="26" rx="6"/><rect fill="#f4f2ff" x="40" y="142" width="20" height="11" rx="5.5"/></g>' +
    '<g class="lumi-legR"><rect fill="#cfc9f7" x="64" y="120" width="12" height="26" rx="6"/><rect fill="#f4f2ff" x="60" y="142" width="20" height="11" rx="5.5"/></g>' +
    '<g class="lumi-armL"><rect fill="#cfc9f7" x="26" y="86" width="12" height="32" rx="6"/></g>' +
    '<rect fill="#f4f2ff" x="36" y="80" width="48" height="44" rx="14"/>' +
    '<rect fill="#cfc9f7" x="36" y="112" width="48" height="12" rx="6" opacity=".55"/>' +
    '<circle fill="#ffd84d" cx="60" cy="100" r="6"/>' +
    '<g class="lumi-armR"><rect fill="#cfc9f7" x="82" y="86" width="12" height="32" rx="6"/></g>' +
    '<line x1="60" y1="14" x2="60" y2="30" stroke="#8d86c9" stroke-width="3" stroke-linecap="round"/>' +
    '<circle class="lumi-ant" fill="#ffd84d" cx="60" cy="9" r="5"/>' +
    '<rect fill="#cfc9f7" x="22" y="44" width="9" height="16" rx="4.5"/><rect fill="#cfc9f7" x="89" y="44" width="9" height="16" rx="4.5"/>' +
    '<rect fill="#f4f2ff" x="30" y="28" width="60" height="48" rx="17"/>' +
    '<rect fill="#17142e" x="37" y="37" width="46" height="28" rx="12"/>' +
    '<g class="lumi-eyes lumi-idle"><ellipse class="lumi-eye l" fill="#7be0d0" cx="51" cy="51" rx="5" ry="6"/><ellipse class="lumi-eye r" fill="#7be0d0" cx="69" cy="51" rx="5" ry="6"/></g>' +
    '</svg></div>';
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  var bot = host.querySelector(".lumi-bot"), eyes = host.querySelector(".lumi-eyes"), timer = null;
  window.addEventListener("pointermove", function (ev) {
    var r = bot.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * 0.3;
    var dx = ev.clientX - cx, dy = ev.clientY - cy, m = Math.max(1, Math.hypot(dx, dy)), k = Math.min(1, m / 220);
    eyes.classList.remove("lumi-idle");
    eyes.style.transform = "translate(" + (dx / m * 5 * k).toFixed(2) + "px," + (dy / m * 4 * k).toFixed(2) + "px)";
    clearTimeout(timer);
    timer = setTimeout(function () { eyes.style.transform = ""; eyes.classList.add("lumi-idle"); }, 3500);
  }, { passive: true });
})();
