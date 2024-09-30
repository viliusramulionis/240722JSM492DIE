import mongoose, { Schema } from 'mongoose';

// Users modelis
export default mongoose.model('User', new Schema({
    name: String,
    email: String,
    password: String,
    coverPhoto: String,
    userThumbnail: String,
    description: String,
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));