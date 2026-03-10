const navHTML = `
<nav>
  <a class="logo" href="index.html"><img src="images/logo/SF Logo white.png" alt="SF Surfing" class="logo-img"></a>
  <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <ul id="nav-links">
    <li>
      <a href="#" class="nav-dropdown-toggle">Surf Spots ▾</a>
      <div class="dropdown">
        <a href="ocean-beach.html">Ocean Beach</a>
        <a href="cronkite-rodeo-beach.html">Rodeo / Cronkite Beach</a>
        <a href="ft-point.html">Fort Point</a>
        <a href="lindamar.html">Lindamar</a>
      </div>
    </li>
    <li><a href="surf-finder.html">Surf Finder</a></li>
    <li><a href="surf-lessons.html">Surf Lessons</a></li>
    <li><a href="surf-shops.html">Surf Shops</a></li>
    <li><a href="videos.html">Videos</a></li>
    <li><a href="history.html">History</a></li>
    <li><a href="volunteer.html">Volunteer</a></li>
    <li><a href="store.html">Store</a></li>
  </ul>
</nav>`;

const footerHTML = `
<footer>
  <div class="footer-logo">San Francisco Surfing</div>
  <nav>
    <a href="index.html">Home</a>
    <a href="ocean-beach.html">Ocean Beach</a>
    <a href="cronkite-rodeo-beach.html">Rodeo Beach</a>
    <a href="ft-point.html">Fort Point</a>
    <a href="lindamar.html">Lindamar</a>
    <a href="surf-shops.html">Surf Shops</a>
    <a href="videos.html">Videos</a>
  </nav>
  <p>&copy; San Francisco Surfing</p>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-placeholder').innerHTML = navHTML;
  document.getElementById('footer-placeholder').innerHTML = footerHTML;

  // Mobile hamburger toggle
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.classList.toggle('is-open', isOpen);
  });

  // Mobile: toggle Surf Spots dropdown on tap
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownToggle.parentElement.classList.toggle('dropdown-open');
      }
    });
  }

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a:not(.nav-dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
});
