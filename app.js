
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');
var app     = express();
var server  = require('http').createServer(app);
var io      = require('socket.io').listen(server,{ log: false });


app.set('port', process.env.PORT || 3000);



// all environments
app.configure(function() {
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(app.router);
  return app.use(express["static"](__dirname + "/public"));
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var i=1000;

var sk='';
io.sockets.on('connection', function (socket) {
  sk=socket;
});

app.get('/', function(req,res){

i++;
res.redirect('/'+i);
});

app.post('/', function(req,res){
res.send('ok');
});

app.get('/:id', function(req,res){
 res.render('index', { title: 'Express',logid:req.params.id});
});

app.post('/:id', function(req,res){
    res.send('ok');
    sk.broadcast.emit('broadcast_'+req.params.id, req.body);
    sk.emit('broadcast_'+req.params.id, req.body);
});

server.listen(app.get('port')); 