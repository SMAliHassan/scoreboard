const Scoreboard = require("../model/scoreboardModel.js");

module.exports = {
  post: (req, res) => {
    // scoreboard.splice(0,scoreboard.length)
    // scoreboard = req.body
    res.send("use the scoreboard route this is for getting email data only!");
  },

  get: (req, res) => {
    res.send(scoreboard);
  },
};
