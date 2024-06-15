const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/Myschool`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected !!');
    } catch (err) {
        console.error("Mongodb connection Failed",err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
