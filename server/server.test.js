const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


it('should return hello world', (done) => {
    request(app)
    .get("/")
    .expect(404)
    .expect((res) => {
        //console.log(res);
        //var responseText = JSON.parse(res.body);
        expect(res.body).toEqual({error: "Page not found",
    name: "Stewart Boyd"});

    })
    .end(done);
})