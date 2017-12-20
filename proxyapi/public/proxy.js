var request = require('request');

function setProxy(app, localUrl, remoteUrl){
    app.use(localUrl, function(req,res){
        var query = req._parsedUrl.search || req.url;
        var url = remoteUrl + query;
        console.log(url);
        req.pipe(request(url)).pipe(res);
    });
}
exports.setProxy = setProxy;