function getImages(uri) {
    var request = require('request');
    var url = require('url');
    var cheerio = require('cheerio');
    path = require('path')
    var fs = require('fs');

    function download(img){

            var img_url
            if (/^(http|https)?:\/\//.test(img_url)) {  
                img_url = uri + img.attribs.src            
            }else {
                img_url = img.attribs.src            
            }
            
            img_name = path.basename(img_url)
            
            console.log(img_url)

            
            if (/^(http|https)?:\/\//.test(img_url)) {  
                img_name = path.basename(img_url)
                request(img_url).pipe(fs.createWriteStream(img_name))
            } else {
                request(img_url).pipe(fs.createWriteStream(img_name))    
            }

    }
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body)
            imgs = $('img').toArray()            

            imgs.forEach(function (img) {

               console.log(img.attribs.width);
               console.log(img.attribs.src)
               
            })


        }
   })
}

//getImages("http://onionskin.io/")
//getImages("https://github.com/grant/swift-cheat-sheet")
//getImages("http://msopentech.com/blog/2014/06/09/docker-on-microsoft-azure/")
getImages("http://www.sysnet.pe.kr/2/0/1685?fb_action_ids=10203253905443770&fb_action_types=og.likes")

                