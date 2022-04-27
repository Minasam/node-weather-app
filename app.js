const yargs = require('yargs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const argv = yargs(process.argv).argv
const city = argv._[2]

if (!city) {
    console.log('Please provide correct addresss')
} else {
    console.log(city)

    geocode(city, (error, geoData) => {
        if (error) {
            return console.log(error)
        }

        forecast(geoData.lat, geoData.long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(geoData.location)
            console.log(forecastData)
        })
    })
}
