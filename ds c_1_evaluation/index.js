const express = require("express");
const app = express();
app.use(logger);

app.get("/books", function(req, res){
    res.send({route: "/books"});
})


app.get("/libraries", checkPermission("librarian"), function(req, res){
    res.send( { route: "/libraries", permission:res.permission});
})

app.get("/authors", checkPermission("author"), function(req, res){
    res.send( { route: "/authors", permission:res.permission});
})

function logger(req, res, next){
    console.log(req.path);
    next();
}

function checkPermission(road){
   
     return function logger1(req, res, next){
         if(road=="librarian"){
             res.permission = true;
             return next();
         } 
         else if(road == "author"){
             res.permission = true;
             return next();
         }
         else{
             return res.send("not have permission");
         }
     }
    
}
app.listen(5000, ()=>{
    console.log("this will return data");
})

