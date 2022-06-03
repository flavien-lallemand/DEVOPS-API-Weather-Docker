const https = require('https')
require('dotenv').config();


console.log("ENv var :", process.env.LONG, process.env.LAT, process.env.API_KEY)
const long = process.env.LONG;
const lat = process.env.LAT;
const appId = process.env.API_KEY
const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + appId + "&units=metric";
https.get(url, (response) => {
    if (response.statusCode === 200) {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    } else {
        console.log("Error, try again later & verify your internet connexion")
    }
})
