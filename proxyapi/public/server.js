var express = require('express');
var ejs = require('ejs');


function server(app, router, path, html){
    app.set("views", __dirname);
    app.engine('html', ejs.__express);
    app.set('views engine', 'html');
    router.get(path, function(req, res){
        res.render(html);
    });
    app.use(router);
}

exports.setPage = server;