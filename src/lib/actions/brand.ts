'use server';

import { IProduct, IUpdateBrand } from "@/globals";
import { connectDatabase } from "../db";
import { Brand } from "../db/schemas/brand";
import { Influencer } from "../db/schemas/influencer";

export const createBrand = async (product: IProduct) => {
    try {
        await connectDatabase();
        const response = await Brand.create({ product });
        if (!response) {
            throw new Error("Failed to create brand");
        };
        return { success: true, message: 'Brand created successfully.' }
    } catch (error) {
        throw new Error("CREATE_BRAND_ERROR")
    }
};
export const updateBrand = async (product: IUpdateBrand) => {
    try {
        await connectDatabase();
        const brand = await Brand.findOne({_id: product._id});
        const update = syncObjects(brand, product);
        const update_product = await Brand.updateOne({_id: product._id
        }, update);

        if(update_product.modifiedCount === 0) {
            throw new Error("Updating failed for brand.")
        }

        return { success: true, message: 'Brand updated successfully.' }
    } catch (error) {
        throw new Error("CREATE_BRAND_ERROR")
    }
};

export const findInfluencer = async ({category, subCategory}: {
    category: string, 
    subCategory: string
}) => {
    try {
        await connectDatabase();
        const search = await Influencer.find({})    
    } catch (error) {
        throw new Error("FIND_INFLUENCER_ERROR")
    }
}