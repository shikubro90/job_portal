// import
import color from "colors"
import express from 'express'
import dotenv from "dotenv"
import bdConnect from "./config/bd.js"
// Dot env
dotenv.config()



// rest object
const app = express();


// routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Job portal app</h1>")
})

app.post("")

const PORT = process.env.PORT;

// listen
app.listen(PORT, () => {
    console.log(`Application is under ${process.env.MODE} and server is running at ${PORT}`.bgCyan)
    bdConnect()
})


