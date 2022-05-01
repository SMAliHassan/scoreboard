const mongoose = require("mongoose");

const scoreBoardSchema = new mongoose.Schema({
  name: String,
  score: Number,
  email: String,
});

// var scoreboard = [
//   {
//     name: "saaaaaaa",
//     score: "120",
//     email: "saaaaaaa@gmail.com",
//   },
//   {
//     name: "musa",
//     score: "220",
//     email: "dcwcaaaaa@gmail.com",
//   },
//   {
//     name: "fke",
//     score: "225",
//     email: "saaawcw@gmail.com",
//   },
// ];

const Scoreboard = mongoose.model("scoreBoard", scoreBoardSchema);

// module.exports = scoreboard;

module.exports = Scoreboard;
