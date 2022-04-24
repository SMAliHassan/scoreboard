const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    scoreboard: {
        type: String
    }
});

var scoreboard = [
{
    "name": "saaaaaaa",
    "score": "120",
    "email" : "saaaaaaa@gmail.com"
},
{
    "name" : "musa",
    "score" : "220",
    "email" : "dcwcaaaaa@gmail.com"
},
{
    "name" : "fke",
    "score" : "225",
    "email" : "saaawcw@gmail.com"
}
];

const scoreboard = mongoose.model("scoreBoard", scoreSchema);

module.exports = scoreboard;





module.exports = scoreboard;