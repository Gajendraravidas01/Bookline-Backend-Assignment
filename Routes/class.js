const express = require('express');
const Class = require('../Models/Class');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, year, classTeacher, subjectList, students } = req.body;

    try {
        let schoolClass = new Class({ name, year, classTeacher, subjectList, students });
        await schoolClass.save();
        res.status(201).send('Class created');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.get('/scores', async (req, res) => {
    const { className, subject } = req.query;

    try {
        const schoolClass = await Class.findOne({ name: className });
        if (!schoolClass) {
            return res.status(404).send('Class not found');
        }

        const studentScores = [];
        for (const [roll, student] of schoolClass.students) {
            if (student.marks.has(subject)) {
                studentScores.push({ studentId: student.studentId, marks: student.marks.get(subject) });
            }
        }

        res.status(200).json(studentScores);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;

