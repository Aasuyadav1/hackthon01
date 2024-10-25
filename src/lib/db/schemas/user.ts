import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        required: true, 
        type: String, 
        unique: true
    },
    profile_image: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        enum: ['INFLUENCER', 'BRAND'],
        default: 'INFLUENCER'
    }
}, {timestamps: true})

export const User = models?.User || model("User", UserSchema)
