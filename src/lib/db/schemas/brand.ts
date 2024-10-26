import { Schema, models, model } from 'mongoose';


const BrandSchema = new Schema({
    product: {
        product_name: String,
        category: {
            main: String, 
            sub: String
        },
        target_demographics: {
            tier: String, 
            age_range: String,
            gender: String,
        },
        other: {
            color_scheme: [String],
            is_eco_friendly: String,
            interests: String
        },
        keywords: [String],
    },
    
})

export const Brand = models?.Brand || model("Brand", BrandSchema);