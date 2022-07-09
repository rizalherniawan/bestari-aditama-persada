const v1 = require('express')()
const Parking = require('../../controller/parking')

v1.post('/park', Parking.createSlot)
v1.get('/park', Parking.lookSlot)
v1.put('/park', Parking.carIn)
v1.put('/park-out', Parking.carOut)


module.exports = v1