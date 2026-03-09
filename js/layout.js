// Shared navigation HTML
const navHTML = `
<nav>
  <a class="logo" href="index.html"><img src="images/logo/SF Logo white.png" alt="SF Surfing" class="logo-img"></a>
  <ul>
    <li>
      <a href="#">Surf Spots ▾</a>
      <div class="dropdown">
        <a href="ocean-beach.html">Ocean Beach</a>
        <a href="cronkite-rodeo-beach.html">Rodeo / Cronkite Beach</a>
        <a href="ft-point.html">Fort Point</a>
        <a href="lindamar.html">Lindamar</a>
      </div>
    </li>
    <li><a href="index.html#learn">Surf Lessons</a></li>
    <li><a href="surf-shops.html">Surf Shops</a></li>
    <li><a href="videos.html">Videos</a></li>
    <li><a href="#">Store</a></li>
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
});
