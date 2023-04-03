const {v4: uudv4} = require('uuid');
const users = [
    {
        id: uudv4(),
        username: "asif shahriar",
        email: "asifs.cse@gmail.com"
    },
    {
        id: uudv4(),
        username: "riya rahman",
        email: "riya.cse@gmail.com"
    }
];

module.exports = users;