const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// const indexRouter = require('./routes/home');
// const accountsRouter = require('./routes/accounts');
const route = require('./routes');
const db = require('./config/db');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LogRocket Express API with Swagger',
      version: '0.1.0',
      description: 'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'LogRocket',
        url: 'https://logrocket.com',
        email: 'info@email.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/accounts',
      },
    ],
  },
  apis: ['./routes/accounts.js'],
};

const specs = swaggerJsdoc(options);

//conect to DB
db.connect();

const app = express();

//HTTP logger
// app.use(morgan('combined'));

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
// app.set('view engine', 'jade');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/default');
// use res.render to load up an ejs view file

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

//Routes init
// app.use('/', indexRouter);
// app.use('/accounts', accountsRouter);
route(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
