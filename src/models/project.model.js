import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema({
    names: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true
    },
    link:{
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

export default mongoose.model('Project', projectSchema)