var scoreBoard = require('../model/scoreboard.js')

module.exports = {

    post : (req, res) => {
        scoreBoard.insertMany(arr, function(error, docs) {
            if (error) {
                res.send(error)
            }
            else res.send('success' + docs)
        });

    },

    get : (req, res) => {
        res.send(scoreBoard)
    }

}