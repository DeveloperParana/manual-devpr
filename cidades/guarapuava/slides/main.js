let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(n) {
  document.querySelectorAll('.slide').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById('slide-' + n).classList.add('active');
  document.getElementById('slide-counter').textContent = n + ' / ' + totalSlides;
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 1) currentSlide = totalSlides;
  if (currentSlide > totalSlides) currentSlide = 1;
  showSlide(currentSlide);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    changeSlide(1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    changeSlide(-1);
  }
  if (e.key === 'Home') {
    e.preventDefault();
    currentSlide = 1;
    showSlide(currentSlide);
  }
  if (e.key === 'End') {
    e.preventDefault();
    currentSlide = totalSlides;
    showSlide(currentSlide);
  }
});

// QR Codes
var qrConfig = { width: 120, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } };
var qrMainConfig = { width: 250, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } };

var qrItems = [
  { id: 'qr-cfp', url: 'https://forms.gle/yfdG15syLh6cjzCS9', config: qrConfig },
  { id: 'qr-empresa', url: 'https://forms.gle/kygV8SKqLS3ii2pv6', config: qrConfig },
  { id: 'qr-apoiar', url: 'https://opencollective.com/codaqui/projects/devpr', config: qrConfig },
  { id: 'qrcode', url: 'https://github.com/DeveloperParana/manual-devpr', config: qrMainConfig }
];

qrItems.forEach(function(item) {
  var el = document.getElementById(item.id);
  if (el) {
    QRCode.toCanvas(document.createElement('canvas'), item.url, item.config, function(error, canvas) {
      if (!error) el.appendChild(canvas);
    });
  }
});

showSlide(1);
