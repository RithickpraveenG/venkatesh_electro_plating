import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { db } from '@/lib/db';

const schema = z.object({
    company: z.string().min(2),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    service: z.string().min(1),
    message: z.string().min(10),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = schema.parse(body);


        // 1. Save to Database (Optional: Don't fail the request if DB fails)
        let enquiryId = null;
        try {
            const enquiry = await db.enquiry.create({
                data: {
                    company: validatedData.company,
                    name: validatedData.name,
                    email: validatedData.email,
                    phone: validatedData.phone,
                    service: validatedData.service,
                    message: validatedData.message,
                },
            });
            enquiryId = enquiry.id;
        } catch (dbError) {
            console.error("Database Error (Skipping save):", dbError);
            // Proceed to send email even if DB fails
        }

        // 2. Send Email Notification
        // 2. Send Email Notification
        const smtpHost = process.env.SMTP_HOST || 'smtp.ethereal.email';
        const smtpPort = Number(process.env.SMTP_PORT) || 587;
        const smtpUser = process.env.SMTP_USER || 'ethereal_user';
        const smtpPass = process.env.SMTP_PASS || 'ethereal_pass';

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Admin Notification
        await transporter.sendMail({
            from: `"VENKATESH ELECTRO PLATING" <${smtpUser}>`, // Sender address must match authenticated user
            to: process.env.SMTP_USER || 'venkateshelectroplating@gmail.com', // Send to self/admin
            subject: `New Enquiry from ${validatedData.company}`,
            html: `
        <h2>New Service Enquiry</h2>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Contact Person:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Service Interest:</strong> ${validatedData.service}</p>
        <br/>
        <h3>Message:</h3>
        <p>${validatedData.message}</p>
      `,
        });

        return NextResponse.json({ success: true, id: enquiryId });
    } catch (error) {
        console.error("API Error:", error); // Log error for debugging
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Invalid data', details: error.issues }, { status: 400 });
        }
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error("SMTP Config Check:", {
            host: smtpHost,
            port: smtpPort,
            user: smtpUser, // Log usage (server logs only)
            passLength: smtpPass ? smtpPass.length : 0
        });

        return NextResponse.json({
            error: 'Email Send Failed',
            details: errorMessage,
            debug: {
                user: smtpUser, // Return user to frontend to verify env var is loaded
                host: smtpHost,
                status: 'AUTH_FAILED_OR_CONNECT_ERROR'
            }
        }, { status: 500 });
    }
}
