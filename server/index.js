const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const admin = require('./routes/admin')
const work = require('./routes/work')
const contact = require('./routes/contact')


mongoose.connect(process.env.DB || 'mongodb://localhost/levent-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", err => console.log(err));


app.use(bodyParser.json({ limit: '5mb' }))
app.use('/admin', admin)
app.use('/work', work)
app.use('/contact', contact)


module.exports = app;