var express = require('express');
var path = require('path');
var router = express.Router();
var Busboy = require('busboy');
var fs = require('fs');

router.post('/', function(req, res) {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log("on file");
    var time = (new Date()).getTime();
    var saveTo = path.join(__dirname,'/files/',filename + '_' + time);
    console.log("PATH >> " + saveTo);
    file.pipe(fs.createWriteStream(saveTo));
  });
  busboy.on('finish', function() {
    console.log("on finish");
    res.redirect('/');
  });
  //console.log(req.body.content);
  //res.send("OK");
  return req.pipe(busboy);

});

/*router.get('/',function(req,res){
  res.writeHead(200, { Connection: 'close' });
  res.end('<html><head></head><body>\
    <form method="POST" enctype="multipart/form-data">\
    <input type="file" name="filefield"><br />\
    <input type="submit">\
    </form>\
    </body></html>');
});
*/
module.exports = router;
