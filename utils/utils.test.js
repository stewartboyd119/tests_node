const expect = require('expect');
const utils = require('./utils');
it('should add two numbers' , () => {
    var result = utils.add(2, 3);
    var expectedResult = 5;
    expect(result).toBe(expectedResult);
})
it('should square a number' , () => {
    var result = utils.square(3);
    var expectedResult = 9;
    var z = {dog: 2};
    expect(result).toBe(expectedResult);
})
it('should be that correct first name and las name comes from fullname', () => {
    var result = utils.setName({}, "Stewart Boyd");
    expect(result).toEqual({firstName: "Stewart", lastName: "Boyd"});

})

it("async square a number", (done) => {
    utils.asyncSquare(3, (result) => {
        expect(result).toBe(9);
        done();
    })
})

it("async add two numbers", (done) => {
    utils.asyncAdd(3, 7, (result) => {
        expect(result).toBe(10);
        done();
    })
})