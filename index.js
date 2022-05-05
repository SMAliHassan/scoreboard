require("dotenv").config({ path: "./config.env" });

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
var app = express();
const port = process.env.PORT || "3000";

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("Connection made successfully with database."))
  .catch((err) => console.log("Error connection to the database", err.message));

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const scoreboardGet = require("./routes/getScoreboard.js");
app.use("/api/scoreboard", scoreboardGet);

const scoreboardPost = require("./routes/updateScoreboard.js");
app.use("/api/scoreboard", scoreboardPost);

const adminGet = require("./routes/getPlayerInfo.js");
app.use("/api/admin", adminGet);

const adminPost = require("./routes/postPlayerInfo.js");
app.use("/api/admin", adminPost);

app.listen(port, () => {
  console.log("running on port - " + port + "");
});
