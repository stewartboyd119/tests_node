const express = require("express");

var app = express();

app.get("/", (req, res) => {

    res.status(404)
    .send({error: "Page not found",
            name: "Stewart Boyd"
    });
});

app.listen(3000);

module.exports.app = app;