const express = require('express')

const app = express()
app.get((req, res) => {
    res.send("hello")
})

const PORT = 2000
app.listen(PORT, (req, res) => {
    try {
        console.log("")
    } catch (err) {
        console.log("")
    }
    console.log("listining on port 2000")
})