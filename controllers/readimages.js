var _=require("underscore"),
  fs=require("fs"),
  request=require('request'),
  path = require("path");

exports.getImages = function (req, res) {

var jsonObject=JSON.parse(fs.readFileSync('./data/images.json', 'utf8'));
let result = '';
_.map( jsonObject, function(content) {
    _.map(content,function(data){
        exports.download(data.ImageUrl, path.basename(data.ImageUrl), function() {
        console.log(path.basename(data.ImageUrl) + ' saved.');
  })  
});
res.send('Complete!')
});
};

exports.download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream('./data/'+filename)).on('close', callback);
  });
};

/* download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
  console.log('done');
}); */