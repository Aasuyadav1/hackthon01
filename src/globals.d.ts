import { Schema } from "mongoose";

enum USER_ENUM {
    INFLUENCER = 'INFLUENCER',
    BRAND = 'BRAND'
}

interface Influencer {
    name: string, 
    userId: any,
    email: string, 
    instagram: {
        username: string, 
        details: {
            meta: {
                isVerified: boolean,
                username: string,
                account_name: string, 
                bio: string
            }, 
            stats: {
                posts: string, 
                followers: string,
                following: string
            },
            posts: {
                title: string, 
                imageUrl: string
            }[]
        }
    } 
}

interface IUpdateInfluencer extends Partial<Influencer> {

}

interface User {
    name: string, 
    email: string, 
    profile_image: string, 
    role: USER_ENUM
}
interface IUpdateUser extends Partial<User> {
    _id: string
}
interface DeleteUser {
    _id: string
}
interface IProduct {
    product: {
        product_name: string,
        category: {
            main: string, 
            sub: string
        },
        target_demographics: {
            tier: string, 
            age_range: string,
            gender: string,
        },
        other: {
            color_scheme: string[],
            is_eco_friendly: string,
            interests: string
        },
        keywords: string[],
    }
}

interface IUpdateBrand extends Partial<IProduct> {
_id: string
}