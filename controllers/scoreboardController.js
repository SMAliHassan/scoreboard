var scoreboard = require('../model/scoreboard.js')

module.exports = {

    post : (req, res) => {
        scoreboard = req.body
        res.send(scoreboard)
    },

    get : (req, res) => {
        res.send(scoreboard)
    }

}