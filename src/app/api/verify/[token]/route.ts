import { connectDatabase } from "@/app/lib/db";
import { Influencer } from "@/app/lib/db/schemas/influencer";
import { verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ token: string }> }) {
    try {
        const p = await params;
        const token = p.token;
        if (!token) {
            return NextResponse.json({
                success: false,
                message: "No token found."
            }, { status: 404 })
        };
        const verifyToken: any = verify(token, process.env.NEXT_AUTH_SECRET  as string);
        if(verifyToken.length === 0 || !verifyToken._id) {
            return NextResponse.json({
                success: false, 
                message: 'Token invalid or expired'
            })
        };
        await connectDatabase();
        const update = await Influencer.updateOne({userId: verifyToken._id}, {
            'verification.isVerified': true, 
            'verification.token': ''
        });

        if(update.modifiedCount === 0) {
            return NextResponse.json({success: false, message: 'Token failed to update.'}, {status: 400})
        };

        return NextResponse.json({
            success: true,
            message: 'User verified successfully.'
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false, 
            message: 'ERROR_UPDATING_TOKEN'
        }, {status: 500})
    }
}