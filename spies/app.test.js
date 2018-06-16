//const expect = require('expect');;
const expect = require('expect');
const sinon = require('sinon');
const rewire = require('rewire');

const app = rewire('./app.js');



describe("app test", () => {
    var db = {
        saveUser: sinon.spy()
    }
    app.__set__('db', db);
    it("this is the first test", (done) => {
        //var spy = expect.createSpy
        var spy = sinon.spy();
        spy("Andrew", 23);
        sinon.assert.calledOnce(spy);   
        sinon.assert.calledWith(spy, "Andrew", 23);
        done();
    })

    it("make sure saveUser is called", (done) => {
        const email = "email@gmail.com"
        const password = "password";
        app.handleSignup(email, password);
        sinon.assert.calledWith(db.saveUser, {email, password});
        done();
    })
})







