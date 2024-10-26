'use server'
import { Influencer as ICreateInfluencer, IUpdateInfluencer } from "@/globals"
import { connectDatabase } from "../db"
import { Influencer } from "../db/schemas/influencer";
import { sign } from "jsonwebtoken";
import { MailService } from "../services/mail";
import { auth } from "../../../auth";

export const create_influencer = async (data: ICreateInfluencer) => {

    const session = await auth()

    if(!session){
        return{
            success: false,
            message: "not auth"
        }
    }

    const userId = session?.user?.id;

    try {
        await connectDatabase();
        
        if(!userId) {
            throw new Error("User Id not provided.")
        }


        const token = sign({_id: userId}, process.env.NEXT_AUTH_SECRET as string);

      
        
        await Influencer.create({
            ...data, 
            verification: {
                token: token, 
                isVerified: false
            }
        });

        // const mail = new MailService();
         
        // const message = await mail.sendAuthorization({
        //     email: data.email, 
        //     token
        // }) 
        return {
            success: true, 
            message: `: Verification mail sent successfully.`
        };
    } catch (error) {
        console.log(error)
        throw new Error("CREATE_INFLUENCER_ERROR")
    }
}

export const update_influencer = async (data: IUpdateInfluencer) => {
    try {
        await connectDatabase();

        if(!data.userId) {
            throw new Error("User Id not provided.")
        };

        const previous_influencer = await Influencer.find({userId: data.userId});

        const updated_influencer = syncObjects(previous_influencer, data);

        const update = await Influencer.updateOne({userId: data.userId}, updated_influencer)
        
        if(update.modifiedCount === 0) {
            throw new Error("Updation failed.")
        };

        return update;

    } catch (error) {
        console.log(error)
        throw new Error("UPDATE_INFLUENCER_ERROR")
    }
}