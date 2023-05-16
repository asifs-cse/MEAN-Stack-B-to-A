const mongoose = require('mongoose');
const encryp = require('mongoose-encryption'); 

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdOn:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(userSchema);