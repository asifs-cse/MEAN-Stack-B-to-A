let users = require('../models/user.model');
const {v4: uudv4} = require('uuid');

exports.getUser = (req, res)=>{
    res.status(200).json({users});
}

//add users
exports.postUser = (req, res)=>{
    const newUser = {
        id: uudv4(),
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(200).json(users);
};

//update user
exports.updatetUser = (req, res)=>{
    const id = req.params.id;
    res.status(200).json({message: id});
}