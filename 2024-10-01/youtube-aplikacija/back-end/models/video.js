import mongoose, { Schema } from 'mongoose';

// Video modelis
export default mongoose.model('Video', new Schema({
    title: String,
    description: String,
    videoId: String,
    thumbnail: String,
    views: {
        type: Number,
        default: 0
    },
    categoryId: Schema.ObjectId,
    userId: Schema.ObjectId,
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}));
