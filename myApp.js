let express = require('express');
let app = express();
//console.log("Hello World");
app.use('/public',express.static(__dirname + '/public'));
app.get('/',myFunction);
function myFunction(req, res) {
  res.sendFile(__dirname +'/views/index.html') ;
}
app.get('/json',myFunction2);
function myFunction2(req, res) {
  res.json({"message": "Hello json"}) ;
}































 module.exports = app;
