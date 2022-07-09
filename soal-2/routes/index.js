const api = require('express')()
const v1 = require('./v1/parkingRoutes')


api.use('/v1',v1)


module.exports = api
