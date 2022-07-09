const { parking_spot } = require('../models')

class Parking {
    // untuk mendaftarkan block dan slot parkir ke database
    static async createSlot(req,res,next) {
        try {
            /**
             * validasi apakah slot parkir sudah ada di database atau belum 
             */
            const lookSlot = await parking_spot.findOne({where:{block:req.body.block.toUpperCase().trim(),slot:req.body.slot}})
            if(lookSlot) return res.status(409).json({message: "block and slot already existed"})
            const createdSlot = await parking_spot.create({
                block: req.body.block,
                slot: req.body.slot,
                status: "empty"
            })
            return res.status(201).json({message: "OK", data: createdSlot})
        } catch (error) {
            /**
             * memunculkan error dari validasi database jika terjadi kesalahan input
             */
            next(error)
        }
    }
    // melihat kesedian tempat parkir yang slot nya belum terisi
    static async lookSlot(req,res,next) {
        try {
            const emptySlot = await parking_spot.findAll({attributes:["block","slot","status"],order:[["block","ASC"]],where:{status:"empty"}})
            return res.status(200).json({data: emptySlot})
        } catch (error) {
            next(error)
        }
    }
    // skema saat kendaraan memasuki tempat parkir
    static async carIn(req,res) {
        try {
            /**
             * validasi apakah slot tempat parkir sudah terisi atau belum 
             */
            const checkSpot = await parking_spot.findOne({where:{block:req.body.block,slot:req.body.slot}})
            if(!checkSpot) return res.status(400).json({message: "Parking spot does not exist"})
            else if(checkSpot.status === "occupied") return res.status(409).json({message: "Parking spot already occupied"})
            /**
             * validasi apakah kendaraan sudah terpakir di suatu slot parkir
             */
            const vehicleExist = await parking_spot.findOne({where:{vehicle_number: req.body.vehicle_number}})
            if(vehicleExist) return res.status(409).json({message: `Vehicle with vehicle number ${vehicleExist.vehicle_number} already parked`})
            await parking_spot.update({vehicle_number: req.body.vehicle_number, status: "occupied"},{where:{block:req.body.block, slot:req.body.slot}})
            const occupied = await parking_spot.findOne({where:{block:req.body.block, slot:req.body.slot}})
            return res.status(200).json({message: `Vehicle with ${occupied.vehicle_number} successfully occupied ${occupied.block}${occupied.slot}`})
        } catch (error) {
            /**
            * memunculkan error dari validasi database jika terjadi kesalahan input
            */
            next(error)
        }
    }
    // skema saat kendaraan keluar dari tempar parkir
    static async carOut(req,res,next) {
        try {
            /**
            * validasi apakah terdapat kendaraan di parkir slot"
            */
            const checkVehicle = await parking_spot.findOne({where:{vehicle_number: req.body.vehicle_number}})
            if(!checkVehicle) return res.status(409).json({message: `Car with vehicle number ${req.body.vehicle_number} is not in parking spot`})
            await parking_spot.update({vehicle_number: null, status: "empty"},{where:{vehicle_number:req.body.vehicle_number}})
            return res.status(200).json({message: `Vehicle with vehicle number ${checkVehicle.vehicle_number} successfully checked out`})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = Parking