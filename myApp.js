let express = require('express');
let app = express();
var bodyParser = require('body-parser')
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

app.get('/name', myFunction5)
function myFunction5(req, res) {
    fullname = req.query.first+" "+req.query.last;
  res.send({ name: fullname});
    console.log(fullname)
}
app.use(bodyParser.urlencoded({extended: false}))

app.post('/name', myFunction6)
function myFunction6(req, res) {
  fullname = req.body.first+" "+req.body.last;
    res.send({name: fullname});
    console.log(fullname)
}























 module.exports = app;
