const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB sucessfully");
    } catch (error) {
        console.log("Error in connecting to MongoDB: ", error);
    }
}

module.exports = connectDB;    