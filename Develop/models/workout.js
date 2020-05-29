const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {

    day: {
      type: Date,
      default: Date.now
    },

    exercises: [
      {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      {
        name: String,
        trim: true,
        required: "Enter an exercise name"
      },
      {
        duration: Number,
        required: "Enter a duraction for the exercise"
      },
      {
        weight: Number
      },
      {
        reps: Number
      },
      {
        sets: Number
      },
      {
        distance: Number
      }
    ]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
