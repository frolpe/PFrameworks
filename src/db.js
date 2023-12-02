import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/portafolios');
        console.log("DB connected")
    } catch (error) {
        console.log(error);
    }
}

