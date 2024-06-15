const express = require('express');
const router = express.Router();
const Student = require('../Models/Student');

router.post('/', async (req, res) => {
    const { studentId, name, dateOfBirth } = req.body;

    try {
        let student = new Student({ studentId, name, dateOfBirth });
        await student.save();
        res.status(201).send('Student created');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
