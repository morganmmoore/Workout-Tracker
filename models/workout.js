const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: {
        name: {
            type: String,
            trim: true,
            required: "Enter a workout name"
        },
        type: {
            type: String,
            required: "Enter workout type"
        },
        duration: {
            type: Number,
            required: "Enter workout duration"
        },
        distance: {
            tytpe: Number,
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        weights: {
            type: Number
        },
    },
    day: {
        type: Date,
        default: Date.now
    },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;