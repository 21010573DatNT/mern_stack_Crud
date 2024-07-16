import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    stt: {
        type: Number,
        required: true
    },
    ma: {
        type: String,
        required: true
    },
    giahientai: {
        type: Number,
        required: true
    },
    giangungmua: {
        type: Number,
        required: true
    },
    giacannhacban: {
        type: Number,
        required: true
    },
    cotuc: {
        type: Number,
        required: true
    },
    suatcotuc: {
        type: Number,
        required: true
    },
    tangtruonglnkyvong: {
        type: Number,
        required: true
    },
    muctangtruongtonghangnam: {
        type: Number,
        required: true
    },
    ghichu: {
        type: String
    }
}, { timestamps: true });

const userModel = mongoose.model('user', userSchema);

export default userModel;
