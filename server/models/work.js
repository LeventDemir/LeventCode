const mongoose = require('mongoose')


const Work = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Work', Work);