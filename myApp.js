let express = require('express');
let app = express();
//console.log("Hello World");
app.get('/',myFunction);
function myFunction(req, res) {
  res.sendFile(__dirname +'/views/index.html') ;
}

































 module.exports = app;
