require('dotenv').config()
const express = require("express")



const router = require("./src/routes")


const app = express()

const port = 4000
const cors = require('cors')


app.use(express.json())



app.use(cors())
//router api
app.use("/api/v1/", router)

//router serving static file
app.use('/uploads', express.static('uploads'))



app.listen(port, ()=> console.log(`Api Listener on port ${port}! `))