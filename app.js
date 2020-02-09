
require('./models/db/ordering');
const mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine','ejs');
var routes = require('./routes');
app.get('/' ,routes.home);
app.get('/about' , routes.about);
app.get('/services', routes.services);
app.get('/contacts',routes.contacts);
app.get('/order',routes.order);
app.get('/clem',routes.read);
app.post('/orders',routes.okay);
app.get('/ordering',routes.order1)


const PORT = process.env.PORT || 8080 ;
app.listen(PORT,function(){

    console.log('This application is running at port:' + PORT)
});