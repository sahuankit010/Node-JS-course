const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=ba33bc1e49707c7a2215387137814e85&query=40,-75'


const request = http.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data+=chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

    request.on('error', (error)=> {
        console.log('An error', error)
    })
})

request.end()