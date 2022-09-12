const express = require('express');
const path = require('path');
var app = express();

app.get("/helloworld", (req, res) => {
    res.sendFile(path.join(__dirname,"./hello.html"))        
})

app.get("*", (req, res) => {                                               
    res.status(404)                                                         
                                                                                
    res.send("<h3>Error 404</h3>")
});

app.listen(5000, () => console.log("server Started...!"));