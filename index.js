
const express = require('express');
const connectDB = require('./database/db');

const bodyParser = require('body-parser');


require('dotenv').config()
const app = express();

connectDB();

app.use(bodyParser.json());

app.get("/" ,(req,res) => {
    res.json({
        username : "gajendrakumar",
        rollno : 32
    })
})
app.use('/api/users', require('./Routes/user'));
app.use('/api/students', require('./Routes/student'));
app.use('/api/classes', require('./Routes/class'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
