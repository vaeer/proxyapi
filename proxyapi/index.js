var express = require('express');
var proxy = require('./public/proxy');
var server = require('./public/server')
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
port = process.env.port || 3000;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extend: false}));
router.use(express.static(__dirname + '/'));

server.setPage(app, router, '/', 'index.html');
server.setPage(app, router, '/query', 'query.html');
proxy.setProxy(app, '/weather', 'http://v.juhe.cn/weather/index');
app.listen(port);
console.log('正在监听%s端口', port);