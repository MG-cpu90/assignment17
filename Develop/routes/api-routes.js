const router = require("express").Router();
const express = require("express");
// const db = require("../models");
const Workout = require("../models/workout.js");
const app = express();

const currentDate = new Date()


module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        // db.Workout.find({})
        Workout.find({})
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

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
        
        let id = req.params.id;
        let newWorkout = new Workout({
            date: currentDate,
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
        });

        // db.Workout.insertMany(body)
        Workout.insertMany(body)
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        // db.Workout.create(body)
        Workout.create(body)
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        // db.Workout.find({})
        Workout.find({})
            // .sort({ day: -1 })
            .then(dbExercise => {
                res.json(dbExercise);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
};

module.exports = router;