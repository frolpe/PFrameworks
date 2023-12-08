import mongoose, { mongo } from "mongoose";
import { number } from "zod";

const experienceSchema = new mongoose.Schema({
    names: {
        type: String, 
        required: true,
    },
    positon: {
        type: String,
        requierd: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    }, 
    idUser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Experience', experienceSchema)