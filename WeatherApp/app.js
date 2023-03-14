const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");

})


app.post("/", function(req, res){
    //console.log(req.body.cityName);
    
    const query = req.body.cityName;
    const apiKey = "6937b22e5c159338e8f51e2e097ded9b"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+" &appid="+apiKey+"&units=" + unit;
    https.get(url, function(response) {
        //console.log(response);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            //console.log(icon);
            //console.log(imageUrl);

            res.write("<h1>The temperature in " + query + " is " + temp +" degrees celcius</h1>");
            res.write("<p>The weather is currently " + desc + "<p>");
            res.write("<img src="+imageUrl+">");
            res.send();
        })
    })
})




app.listen(3000, function() {
    console.log("Server running at port 3000");
})