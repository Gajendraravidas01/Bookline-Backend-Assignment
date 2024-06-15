const mongoose = require('mongoose');


const ClassSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        unique : true
    },
    Year : {
        type : Number,
        require : true,
    },
    ClassTeacher : {
        type : String,

    },
    Subjectlist :{
        type : [String], 
        required : true
    },
    students: {
        type: Map,
        of: new mongoose.Schema({
            studentId: { type: String, required: true },
            marks: {
                type: Map,
                of: Number
            }
        }),
        default: {}
    }
},{timestamps : true})

// export const Class = mongoose.model("Class",ClassSchema);
const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;