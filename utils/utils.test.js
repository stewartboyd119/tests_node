const utils = require('./utils');
it('should add two numbers' , () => {
    var result = utils.add(2, 3);
    var expectedResult = 5;
    if (result != expectedResult) {
        throw new Error(`${result} != ${expectedResult}`);
    }
})
it('should square a number' , () => {
    var result = utils.square(3);
    var expectedResult = 9;
    if (result != expectedResult) {
        throw new Error(`${result} != ${expectedResult}`);
    }
})