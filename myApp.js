let express = require('express');
let app = express();
//console.log("Hello World");
app.get('/',myFunction);
function myFunction(req, res) {
  res.send('Hello Express');
}

































 module.exports = app;
