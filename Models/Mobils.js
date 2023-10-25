const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mobilSchema = new Schema({
    nama : {
        type:String,
        required : true
    },
    
    sewa : {
        type:String,
        required : true
    },
})