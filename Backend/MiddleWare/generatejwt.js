const jwt = require('jsonwebtoken');     

function generateJWT(person) {

    return jwt.sign(person.username, process.env.JWT_SECRET);     
}


module.exports = generateJWT;    