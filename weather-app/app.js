const request = require('postman-request')
// const url = 'http://api.weatherstack.com/current?access_key=ba33bc1e49707c7a2215387137814e85&query=New%20York'

// request({url: url, json: true}, (error, response) => {

//     if(error){
//         console.log("Unable to connect!")
//     } else if(response.body.error){
//         console.log(response.body.error.info)
//     } else {
//         const outsideTemp = response.body.current.temperature
//         const feelsLike = response.body.current.feelslike
//         console.log("It is currently "+ outsideTemp+" degress out. It feels like "+ feelsLike+" degrees out.")
//         console.log(response.body.current.weather_descriptions[0])
//     }
    
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FodWFua2l0MDEwIiwiYSI6ImNsNjBpNzdhMzFvNTkzZG8xd3R6MW44ZG0ifQ.63WtWLaGQdiRUA4zugFUwg'

request({url: geocodeURL, json: true}, (error, response) =>{

    if(error){
        console.log("Unable to connect!")
    } else if(!response.body.features.length){
        console.log('No place available!')
    } else {
        const data = response.body
        data.features.forEach(element => {
            element.center.forEach(ele =>{
                console.log(ele)
            })
            console.log("Next Coordinate")
        });
    }

})