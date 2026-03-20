const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');

(async () => {
  // Gerar QR Code como data URL
  const qrDataUrl = await QRCode.toDataURL(
    'https://github.com/DeveloperParana/manual-devpr',
    { width: 250, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } }
  );

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'load', timeout: 30000 });

  // Injetar QR Code como imagem e mostrar todos os slides
  await page.evaluate((qrSrc, total) => {
    // Injetar QR code
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
    // Esconder navegacao
    var nav = document.querySelector('.nav');
    if (nav) nav.style.display = 'none';
    // Mostrar todos os slides
    for (var i = 1; i <= total; i++) {
      var slide = document.getElementById('slide-' + i);
      slide.classList.add('active');
      slide.style.display = 'flex';
      slide.style.pageBreakAfter = 'always';
    }
  }, qrDataUrl, 7);

  await new Promise(r => setTimeout(r, 1000));

  var outputPath = path.resolve(__dirname, 'slides-abertura-devpr-guarapuava.pdf');
  await page.pdf({
    path: outputPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
  });

  console.log('PDF gerado: ' + outputPath);
  await browser.close();
})();
