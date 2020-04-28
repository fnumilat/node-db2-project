const express = require("express")
const carRouter = require("./routers/car-router")

const server = express()

server.use(express.json())
server.use("/api/cars", carRouter)

server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

server.listen(7080, () => {
    console.log("Server listening at port 7080")
})

module.exports = server

