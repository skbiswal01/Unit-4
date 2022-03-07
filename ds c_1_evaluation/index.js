const express = require("express");
const app = express();
app.use(logger);

app.get("/books", function(req, res){
    res.send({route: "/books"});
})

app.use(checkPermission);
app.get("/libraries", function(req, res){
    res.send( { route: "/libraries", permission: true});
})

app.get("/authors", function(req, res){
    res.send( { route: "/authors", permission: true});
})

function logger(req, res, next){
    console.log(req.path);
    next();
}

function checkPermission(req,res,next){
    
    console.log(req.path);
    next();
    
}
app.listen(5000, ()=>{
    console.log("this will return data");
})

