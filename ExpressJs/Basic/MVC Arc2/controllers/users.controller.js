const path = require('path');

exports.getAbout = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../views/about.html'));
}

exports.getContact = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../views/contact.html'));
}

exports.getSkill = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../views/skill.html'));
}