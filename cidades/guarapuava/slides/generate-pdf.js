const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');

(async () => {
  var qrDataUrl = await QRCode.toDataURL(
    'https://github.com/DeveloperParana/manual-devpr',
    { width: 250, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } }
  );

  var browser = await puppeteer.launch({ headless: true });
  var page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  var filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'load', timeout: 30000 });

  await page.evaluate((qrSrc) => {
    var qrDiv = document.getElementById('qrcode');
    if (qrDiv) {
      var img = document.createElement('img');
      img.src = qrSrc;
      img.style.width = '250px';
      img.style.height = '250px';
      img.style.borderRadius = '12px';
      img.style.border = '2px solid #8AD0A5';
      qrDiv.appendChild(img);
    }

    var nav = document.querySelector('.nav');
    if (nav) nav.remove();

    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
      slide.style.display = 'flex';
      slide.style.width = '1920px';
      slide.style.height = '1080px';
      slide.style.minHeight = '1080px';
      slide.style.maxHeight = '1080px';
      slide.style.pageBreakAfter = 'always';
      slide.style.breakAfter = 'page';
      slide.style.overflow = 'hidden';
      slide.style.alignItems = 'center';
      slide.style.justifyContent = 'center';
      slide.classList.add('active');
    });

    document.body.style.width = '1920px';
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';
  }, qrDataUrl);

  await new Promise(r => setTimeout(r, 1000));

  var outputPath = path.resolve(__dirname, 'slides-abertura-devpr-guarapuava.pdf');
  await page.pdf({
    path: outputPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: false,
  });

  console.log('PDF gerado: ' + outputPath);
  await browser.close();
})();
