const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./config/config')
const path = require('path')
//dotenv.config()
dotenv.config()
//db config
connectDb();
//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

//routes
app.use('/api/items', require('./routes/itemRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use("/api/bills", require("./routes/billsRoute"));

//static files
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})
const PORT = process.env.PORT || 8080


//listen
app.listen(PORT, () => {
    console.log(`Server running on port no.${PORT}`.bgBlue);
})