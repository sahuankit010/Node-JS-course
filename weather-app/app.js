const geocode = require('./utils/geocode')
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

geocode('Dallas', (error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
    console.log('Response\n', data)
})

geocode('Delhi', (error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
    console.log('Response\n', data)
})