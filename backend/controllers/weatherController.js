const fetch = require("node-fetch");
require('dotenv').config();

/**
 * Get city and weather parameter from the client,
 * then retrive lat and lon of passed city.
 * Now having the city's geolocation data,
 * get weather data based on weather paramater and return it to client
*/
module.exports.get_Weather = async (req, res) => {
    const {city, weather} = req.body;
    try{
        const cordResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`);
        const cordData = await cordResponse.json();
        const lat = cordData[0].lat;
        const lon = cordData[0].lon;
        const weatherDataResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${process.env.API_KEY}&units=metric`);
        const weatherData = await weatherDataResponse.json();
        res.status(200).json({
            data: weatherData[weather]
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            data: {}
        })
    }
}



console.log(process.env.API_KEY)