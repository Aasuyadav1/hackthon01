import { Schema, models, model } from 'mongoose';


const InfluencerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowerCase: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value);
            },
            message: (props: {value: string}) => `${props.value} is not a valid email.`
        }
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    instagram: {
        username: {
            type: String, 
            required: true
        },
        details: {
            meta: {
                isVerified: Boolean,
                username: String, 
                account_name: String, 
                bio: String
            },
            stats: {
                posts: String, 
                followers: String,
                following: String
            },
            posts: [{
                title: String, 
                imageUrl: String
            }]
        }
    },
    search: {
        keywords: [String]
    },
    verification: {
        token: String, 
        isVerified: Boolean
    }
})

export const Influencer = models?.Influencer || model("Influencer", InfluencerSchema);