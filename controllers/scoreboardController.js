const Scoreboard = require("../model/scoreboardModel.js");

module.exports = {
  post: async (req, res) => {
    try {
      await Scoreboard.deleteMany({}); //// Delete all previous scoreboards

      const data = await Scoreboard.insertMany(req.body.data); //// Create new scoreboards

      res.status(201).json({
        status: "success",
        message: "Successfully created scoreboards!",
        data,
      });
    } catch (err) {
      console.log(err.message);

      res.status(400).json({
        status: "failed",
        message: "Could not create the scoreboards!",
      });
    }
  },

  get: async (req, res) => {
    try {
      const data = await Scoreboard.find().select("-__v");

      res.status(200).json({ status: "success", data });
    } catch (err) {
      console.log(err.message);

      res.status(404).json({
        status: "fail",
        message: "Could not get the scoreboards!",
        data,
      });
    }
  },
};
