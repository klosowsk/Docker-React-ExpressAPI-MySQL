var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// Default port 3000 is already in use by the app
app.listen(3001);

// Connection to the MySQL database
// just uncomment the code bellow to connect to the MySQL DATABASE 
// var connection = mysql.createConnection({
//   host     : 'db',
//   user     : 'root',
//   password : process.env.MYSQL_ROOT_PASSWORD,
//   database : 'dbname'
// });
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to db!");
// });

// setup cors
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
