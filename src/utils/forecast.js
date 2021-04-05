const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8e813b37b100266f3cce8004dc58ce65&query=' + latitude + "," + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log("Unable to connect to weather service");
        } else if (response.body.error) {
            //    console.log("Unable to find location");
            console.log(response.body);
        } else {
            // callback(undefined, response.body.current.weather_descriptions[0] + ".It is currently " + response.body.current.temperature + " degrees out.It feels like " + response.body.current.feelslike + " degrees out.")
            callback(undefined, response.body.current.weather_descriptions[0] + '.It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + ' % chance of rain.')
        }

    })

}

module.exports = forecast