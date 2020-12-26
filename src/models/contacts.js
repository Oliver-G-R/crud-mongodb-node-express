const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contacts = new Schema({
    name: String,
    tel: String,
    email: String
})

module.exports = mongoose.model('contacts', contacts )