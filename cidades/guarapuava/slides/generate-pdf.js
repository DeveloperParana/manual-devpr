const puppeteer = require('puppeteer');
const QRCode = require('qrcode');
const path = require('path');

(async () => {
  var qrSmall = { width: 120, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } };
  var qrBig = { width: 250, margin: 1, color: { dark: '#15A04B', light: '#FFFFFF' } };

  var qrItems = [
    { id: 'qr-cfp', url: 'https://forms.gle/yfdG15syLh6cjzCS9', size: 120, opts: qrSmall },
    { id: 'qr-empresa', url: 'https://forms.gle/kygV8SKqLS3ii2pv6', size: 120, opts: qrSmall },
    { id: 'qr-apoiar', url: 'https://opencollective.com/codaqui/projects/devpr', size: 120, opts: qrSmall },
    { id: 'qrcode', url: 'https://github.com/DeveloperParana/manual-devpr', size: 250, opts: qrBig },
  ];

  var qrData = {};
  for (var item of qrItems) {
    qrData[item.id] = { src: await QRCode.toDataURL(item.url, item.opts), size: item.size };
  }

  var browser = await puppeteer.launch({ headless: true });
  var page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  var filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'load', timeout: 30000 });

  await page.evaluate((qrs) => {
    Object.keys(qrs).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        var img = document.createElement('img');
        img.src = qrs[id].src;
        img.style.width = qrs[id].size + 'px';
        img.style.height = qrs[id].size + 'px';
        img.style.borderRadius = '6px';
        el.appendChild(img);
      }
    });

    var nav = document.querySelector('.nav');
    if (nav) nav.remove();

    var slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide, i) {
      slide.style.display = 'flex';
      slide.style.width = '1920px';
      slide.style.height = '1080px';
      slide.style.minHeight = '1080px';
      slide.style.maxHeight = '1080px';
      slide.style.overflow = 'hidden';
      slide.style.alignItems = 'center';
      slide.style.justifyContent = 'center';
      slide.classList.add('active');
      if (i < slides.length - 1) {
        slide.style.pageBreakAfter = 'always';
        slide.style.breakAfter = 'page';
      }
    });

    document.body.style.width = '1920px';
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';
  }, qrData);

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
