const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
    console.log('PS is running on port 3000');
});

app.get('/', function(req,res){
res.render('index',{title:"Index"});

});


