const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true }
},{timestamps : true})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;