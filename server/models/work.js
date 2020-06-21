const mongoose = require('mongoose')


const Work = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Work', Work);