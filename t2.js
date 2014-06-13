var page = require('webpage').create();
page.open('http://news.imaso.co.kr/32451', function() {
  page.viewportSize = { width: 1024, height: 768 };
  page.render('example.png');
  phantom.exit();
});
