const express = require("express");

var app = express();

app.get("/", (req, res) => {

    res.status(404)
    .send({error: "Page not found",
            name: "Stewart Boyd"
    });
});

app.get("/users", (req, res) => {
    res.send([{name: "Stewart", age: 29},
                {name: "Lydia Chalek", age: 27},
            {name: "Mike", age: 29}])
})

app.listen(3000);

module.exports.app = app;