const service = require('./../service/service')
const response = require('./../libs/responseLib');

module.exports.setRouter = (app) =>{
    app.get('/', (req,res)=>{
        service.getWeather(req.query.zipCode).then(data =>{
            let responseData = response.generate(false, "Details", 200, data)
            res.send(responseData)
        }).catch(err=>{
            res.send(err)
        })
        
    }) 

    app.get('/zip-array', (req,res)=>{
        let promise = []
        JSON.parse(req.query.zipCode).forEach(zipcode => {
            promise.push(service.getWeather(zipcode))
        });

        Promise.all(promise).then(data=>{
            let responseData = response.generate(false, "Details", 200, data)
            res.send(responseData)
        }).catch(err=>{
            res.send(err)
        })
        
    })
}