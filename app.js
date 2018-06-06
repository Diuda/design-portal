var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var mongoose = require('mongoose')

const mongoOptions = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  poolSize: 7,
  keepAlive: true,
  connectTimeoutMS: 360000,
  socketTimeoutMS: 360000

}

mongoose.connect('mongodb://127.0.0.1:27017/dp', mongoOptions)
.then(()=>{
  console.log("Connected to db")
})
.catch((err)=>{
  console.log("error connecting to db: "+err)
})

var ups = require('./models/ups.js');


var api = require('./routes/api.js');

var csvdata = require('./addDataScript.js');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);
app.use('/addData', csvdata.addDataToMongo);
app.use('/addComponentData', csvdata.addComponent)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
