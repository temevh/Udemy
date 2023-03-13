const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    //console.log(weight);
    //console.log(height);

    var BMI =  weight / (height * height);
    res.send("Your BMI is  " + BMI);
});


app.listen(3000);