const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Dallas', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    console.log('Response\n', data)
})

geocode('Delhi', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    console.log('Response\n', data)
})

forecast('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast('Delhi', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})