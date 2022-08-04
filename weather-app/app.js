const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address =  process.argv[2]

geocode(address, (error, data) => {
    if(error){
        return console.log('Error', error)
    }
 
    forecast(data[0].location, (error, forecastData) => {
        if(error){
            return console.log('Error', error)
        }
        console.log(data[0].location)
        console.log(forecastData)
    })
})

