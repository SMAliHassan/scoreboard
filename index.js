const express = require('express');
var app = express();
const port = process.env.PORT || '3000'

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

 const scoreboardGet = require('./routes/getScoreboard.js')
 app.use('/api/scoreboard', scoreboardGet)
 const scoreboardPost = require('./routes/updateScoreboard.js')
 app.use('/api/scoreboard', scoreboardPost)
 const adminGet = require('./routes/getPlayerInfo.js')
 app.use('/api/admin', adminGet)
 const adminPost = require('./routes/postPlayerInfo.js')
 app.use('/api/admin', adminPost)

app.listen(port, () => {
    console.log('running on port - '+port+'');
})