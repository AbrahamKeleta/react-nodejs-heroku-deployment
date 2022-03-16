const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userthree", , "userFour"]})
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => {
    console.log("server started on port 6000")
})

