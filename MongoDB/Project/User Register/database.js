const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/acoeUsers');
        console.log('database on connected successfully!');
    } catch (error) {
        console.log('Connection failed');
        console.log(error);
        process.exit(1);
    }
}

dbConnect();

const LoginSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdOn:{
        type: Date,
        default: Date.now,
    }
});

const model = new mongoose.model("userList",LoginSchema);
module.exports = model;