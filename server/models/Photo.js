const mongoose = require('mongoose')
const photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Photo', photoSchema)