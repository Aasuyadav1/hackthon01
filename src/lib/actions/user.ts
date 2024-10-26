'use server';

import { DeleteUser, IUpdateUser, User as IUser } from "@/globals";
import { connectDatabase } from "../db";
import { User } from "../db/schemas/user";
import { Influencer } from "../db/schemas/influencer";

export const createUser = async (data: IUser) => {
    try {
        await connectDatabase();
        const response = await User.create(data);
        return {success: true, message: 'User created successfully', data: response}
    } catch (error) {
        console.log(error)
        throw new Error("ERROR_CREATE_USER")
    }
}
export const updateUser = async (data: IUpdateUser) => {
    try {
        await connectDatabase();
        const previous_data = await User.findOne({_id: data._id});
        const updated_object = syncObjects(previous_data, data);
        const update = await User.updateOne({_id: data._id}, updated_object);
        if(update.modifiedCount === 0) {
            throw new Error("User failed to update.");
        };
        return {success: true, message: 'User updated successfully.'}
    } catch (error) {
        console.log(error)
        throw new Error("ERROR_UPDATE_USER")
    }
}
export const deleteUser = async (data: DeleteUser) => {
    try {
        await connectDatabase();

        const delete_user = await User.deleteOne({_id: data._id});
        if(delete_user.deletedCount === 0) {
            throw new Error("User failed to delete.")
        };
        const delete_influencer = await Influencer.deleteOne({userId: data._id});

        if(delete_influencer.deletedCount === 0) {
            throw new Error("Influencer failed to delete.")
        }
        
        // Update this function after adding Request Schema;

        return {success: true, message: 'User deleted successfully.'}

    } catch (error) {
        console.log(error)
        throw new Error("ERROR_DELETING_USER")
    }
}