console.log("welcome to Github Testing")

import express from "express"

const app = express()

const PORT = process.env.PORT || 8080

app.listen =(PORT,() =>{
    console.log(`app is listening at port${PORT}`)
})