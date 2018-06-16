var db = require('./db.js');
module.exports.handleSignup = (email, password) => {

    //check if user exists
    //save user database
    db.saveUser({email, password});
    //send email
}