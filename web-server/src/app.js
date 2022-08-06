const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


//Setup static directory to use, which is not in use currently
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Ankit Sahu'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Ankit Sahu'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        message: 'How can I help you?',
        title: 'Help',
        name: 'Ankit Sahu'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Hot',
        location: 'Dallas'
    })
})
  

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
