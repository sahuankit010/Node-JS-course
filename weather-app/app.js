const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=ba33bc1e49707c7a2215387137814e85&query=New%20York'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})