const express = require("express")
const db = require("../database/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db.select("*").from("cars")
        res.json(cars)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
        }

        const car = await db("cars").insert(payload)
        res.json(car)

    } catch(err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
        }

        await db("cars").where("id", req.params.id).update(payload)
        const car = await db("cars").where("id", req.params.id).first()
        res.json(car)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        await db("cars").where("id", req.params.id).del()
        res.status(204).end()
    } catch(err) {
        next(err)
    }
})


module.exports = router