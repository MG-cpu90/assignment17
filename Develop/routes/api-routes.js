const router = require("express").Router();
const express = require("express");
const Workout = require("../models/workout.js");
const app = express();

// router.get("/api/workouts", (req, res) => {
//     Workout.find({})
//       .sort({ day: -1 })
//       .then(dbExercise => {
//         res.json(dbExercise);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

app.post("/api/workouts/:id", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;