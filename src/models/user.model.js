import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        type: Int16Array,
        required: true,
        trim: true
    },
    idTheme: {
        type: Int16Array,
        required: true,
        trim: true
    }
})

export default mongoose.model('User', userSchema)