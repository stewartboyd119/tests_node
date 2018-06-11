var add = (a, b) =>  a + b ;
var asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        result = a + b;
        callback(result);
    }, 1000);
}
var square = (a) => a * a;
var asyncSquare = (a, callback) => {
    setTimeout(() => {
        result = a * a;
        callback(result);
    }, 1000);
}
var setName = (user, fullName) => {
    var splitName = fullName.split(" "); 
    user.firstName = splitName[0];
    user.lastName = splitName[1];
    return user;
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}