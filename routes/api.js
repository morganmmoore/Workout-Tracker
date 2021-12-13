const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findOneAndUpdate(
        { id: params.id },
        { $push: { exercises: body }},
        { new: true }
    )
    .then((workout) => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;