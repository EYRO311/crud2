const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql= require('mysql');
const myConnection=require('express-myconnection');

const app = express();

// import routers
const customerRoutes = require('./routes/customer');const { urlencoded } = require('express');
;

//setting
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'crud3'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//route
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});