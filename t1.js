function test1(){
	var screenshot = require('url-to-image');
	screenshot('http://news.imaso.co.kr/32451', 'google.png').done(function() {
	    console.log('http://google.com screenshot saved to google.png');
	});	
}

function test2(){
//http://h3manth.com/content/download-images-nodejs

	function getImages(uri) {
    var request = require('request');
    var url = require('url');
    var cheerio = require('cheerio');
    path = require('path')
    var fs = require('fs');
 
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body)
            imgs = $('img').toArray()
            console.log("Downloading...")
            imgs.forEach(function (img) {
            	//console.log(img);
                console.log(uri + img.attribs.src)
                process.stdout.write(".");
                img_url = img.attribs.src
                if (/^https?:\/\//.test(img_url)) {
                    img_name = path.basename(img_url)
                    request(img_url).pipe(fs.createWriteStream(img_name))
                }
            })
            console.log("Done!")
        }
    })
}
getImages("http://onionskin.io/")

}

function test3(){

//https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
var request = require('request');
var cheerio = require('cheerio');


request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      var rank = a.parent().parent().text();
      var title = a.text();
      var url = a.attr('href');
      var subtext = a.parent().parent().next().children('.subtext').children();
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      // Our parsed meta data object
      var metadata = {
        rank: parseInt(rank),
        title: title,
        url: url,
        points: parseInt(points),
        username: username,
        comments: parseInt(comments)
      };
      console.log(metadata);
    });
  }
});

}



function test4(){




}

test2();