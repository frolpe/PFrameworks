import mongoose, { mongo } from "mongoose";

const skillSchema = new mongoose.Schema({
    names: {
        type: String, 
        required: true,
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

export default mongoose.model('Skill', skillSchema)