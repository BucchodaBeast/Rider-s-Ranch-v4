(function() {
  var btn = document.getElementById('hamburgerBtn');
  var nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;

  function openNav() {
    nav.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    nav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function() {
    nav.classList.contains('open') ? closeNav() : openNav();
  });

  // close when a link is tapped
  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeNav);
  });

  // close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeNav();
  });

  // close if user taps outside nav area (the backdrop)
  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
      closeNav();
    }
  });
})();
