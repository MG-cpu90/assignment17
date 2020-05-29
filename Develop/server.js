const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout.js");
// const db = require("./models");

const app = express();

// const databaseUrl = process.env.MONGODB_URI || "exercisedb";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  console.log("Server listening on: http://localhost:" + PORT);

});