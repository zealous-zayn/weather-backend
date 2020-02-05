const axios = require('axios')
const appConfig = require('./../../config/appConfig')
const response = require('./../libs/responseLib');

const getWeather = async (zipCode)=>{
    if(zipCode){
        if(appConfig.appId != null && appConfig.appId != undefined){
       let data =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${appConfig.appId}`)
       return data.data
        } else {
            return response.generate(true, "App Id is not valid", 401, null)
        }
    } else {
        return response.generate(true, "Zip Code is unavailable", 401, null)
    }
}

module.exports = {
    getWeather : getWeather
}