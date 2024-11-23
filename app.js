var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// import expressSesion for save purpus this i don't no what is meaning but i will find out
const expressSession =  require("express-session");
const flash = require('express-flash');
const compression = require('compression');
const MongoStore = require("connect-mongo")

var indexRouter = require('./routes/index');
var cateringRouter = require('./routes/catering');
var usersRouter = require('./models/users');
const passport = require('passport');

var app = express();
app.use(flash());
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// then i used expressSesstion
// app.use(expressSession({
//   resave: false,
//   saveUninitialized: true,
//   secret: "hi helo hi"
// }));


app.use(
  expressSession({
    secret: process.env.SESSION_SECRET || "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_CLOUD_SERVER || "mongodb://localhost:27017/yourDatabaseName",
      collectionName: "sessions", // Optional: Customize the collection name
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: false, // Set to true if using HTTPS
    },
  })
);


// Middleware to make flash messages available in templates
app.use((req, res, next) => {
  res.locals.successMessage = req.flash('success');
  res.locals.errorMessage = req.flash('error');
  next();
});

// used passport for set up password security purpurs
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());
// passport.deserializeUser(paymentRoutes.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// router setup
app.use('/', indexRouter);
app.use('/', cateringRouter); //new
app.use('/users', usersRouter);
// app.use('/', paymentRoutes);

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


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;
