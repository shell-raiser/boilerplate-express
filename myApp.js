let express = require('express');
let app = express();
//console.log("Hello World");
app.use('/public',express.static(__dirname + '/public'));
app.get('/',myFunction);
function myFunction(req, res) {
  res.sendFile(__dirname +'/views/index.html') ;
}
//app.get('/json',myFunction2);
app.use(myFunction2)
function myFunction2(req, res, next) {
    //if (process.env.MESSAGE_STYLE=='uppercase'){
      //res.json({"message": "HELLO JSON"}) ;  
    //} else {
        //res.json({"message": "Hello json"}); 
    //}
    console.log(req.method,req.path,"-",req.ip);
      next();

}
app.get('/now', function myFunction2(req, res, next) {
    req.time = new Date().toString();
        
    next();

}, function myFunction2(req, res) {
    
  res.send({time: req.time});

})
app.get('/:word/echo', myFunction4)
function myFunction4(req, res) {
  res.send({echo: req.params.word});
}




























 module.exports = app;
