// Requerimos mongoose

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    dni : {
        type: Number,
        require: true
    },
    name : {
        type: String,
        require: true
    },
    lastName : {
        type: String,
        require: true
    },
    age : {
        type: Number,
        require: true
    },
    roll : {
        type: String,
        require: true
    },
    tel : {
        type: Number,
        require: true
    },
    email : {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User',userSchema);