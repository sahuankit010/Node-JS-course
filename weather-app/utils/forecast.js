const request = require('postman-request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ba33bc1e49707c7a2215387137814e85&query=' + encodeURIComponent(address)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect!', undefined)
        } else if (response.body.error) {
            callback(response.body.error.info, undefined)
        }
        else {
            const outsideTemp = response.body.current.temperature
            const feelsLike = response.body.current.feelslike
            callback(undefined,{
                outsideTemp: outsideTemp, feelsLike: feelsLike,
                description: response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast