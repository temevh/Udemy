const express = require("express");
const https = require("https");


const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6937b22e5c159338e8f51e2e097ded9b&units=metric";
    https.get(url, function(response) {
        //console.log(response);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            res.send("<h1>The temperature in London is " + temp +" degrees celcius</h1>");

        })
    })

})


app.listen(3000, function() {
    console.log("Server running at port 3000");
})