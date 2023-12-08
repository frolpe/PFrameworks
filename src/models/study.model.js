import mongoose, { mongo } from "mongoose";

const studySchema = new mongoose.Schema({
    names: {
        type: String, 
        required: true,
    },
    /*
    time: {
        type: String, 
        required: true
    }, */
    idUser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Study', studySchema)