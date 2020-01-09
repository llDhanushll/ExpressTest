const path = require('path');

const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', 'views');

const userlogin = require('./routes/User-Login');
app.use('/',userlogin);


app.listen(3000);