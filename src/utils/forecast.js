const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=e5c1039da07e38e39adc4379923172f3&query=' + latitude + ',' + longitude + '&unists=f' 

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' +body.current.temperature + ' Celcius out. It feels like ' + body.current.feelslike + ' Celcius out. The humidiy is '+ body.current.humidity + " % ")
        }
    })
}

module.exports = forecast 

