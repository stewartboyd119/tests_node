const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


describe("Server Tests", () => {
    describe("#Get/", () => {

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
    })

    describe("# Get /users", () => {
        it("should return a list of users", (done) => {
            request(app)
            .get("/users")
            .expect(200)
            .expect((res) => {
                expect(res.body).toContainEqual({name: "Stewart", age: 29});
            })
            .end(done);
        })
    })

})