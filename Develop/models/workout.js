const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
  day: {
    type: Date  
  },

  exercises: [
    {
      type: String,
      required: "Required"
    },
    {
      name: String,
      required: "Required"
    },
    {
      duration: Number
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
  ],

  // email: {
  //   type: String,
  //   unique: true,
  //   match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  // },

  // userCreated: {
  //   type: Date,
  //   default: Date.now
  // }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
