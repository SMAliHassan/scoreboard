const Scoreboard = require("../model/scoreboardModel.js");

module.exports = {
  post: async (req, res) => {
    try {
      console.log(req.body);
      const data = await Scoreboard.insertMany(req.body.data);

      console.log(data); // DELETE ME PLEASE!

      res.status(201).json({
        status: "success",
        message: "Successfully created scoreboards!",
        data,
      });
    } catch (err) {
      console.log(err.message, err);

      res.status(400).json({
        status: "failed",
        message: "Could not create the scoreboards!",
      });
    }
  },

  get: async (req, res) => {
    try {
      const data = await Scoreboard.find();

      console.log(data); // DELETE ME PLEASE!

      res.status(200).json({ status: "success", data });
    } catch (err) {
      console.log(err, err.message);

      res.status(404).json({
        status: "fail",
        message: "Could not get the scoreboards!",
        data,
      });
    }
  },
};
