import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,   
        required : true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    names: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    age: {
        type: Number,
        required: true,
        trim: true
    },
    idTheme: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)