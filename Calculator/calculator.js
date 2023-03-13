const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("poopy");
})

app.listen(3000);