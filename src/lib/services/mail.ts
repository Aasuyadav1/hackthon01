'use server';
import nodemailer from 'nodemailer';

export class MailService {
    private email: string;
    private password: string;
    private url = 'http://localhost:3000/'
    constructor() {
        this.email = process.env.EMAIL as string;
        this.password = process.env.PASSWORD as string
    }

    private createTransporter() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.email,
                pass: this.password,
            },
        });

    }

    async sendAuthorization({email, token}: {
        email: string, 
        token: string
    }) {
        const transporter = this.createTransporter();

        const mailOptions = {
            from: `"Fluent Match" <${this.email}>`,
            to: email,
            subject: 'Email Verification | Fluent Match',
            html: `
                <a href="${this.url}/api/verify/${token}">Verify</a>
            `,
        };
        const message = await transporter.sendMail(mailOptions);
        return message;
    }
}