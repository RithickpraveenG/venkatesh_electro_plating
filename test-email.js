require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

console.log('Attempting to send test email...');
console.log('Host:', process.env.SMTP_HOST);
console.log('User:', process.env.SMTP_USER);
console.log('Pass Length:', process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0);

transporter.verify(function (error, success) {
    if (error) {
        console.error('------------------------------------------');
        console.error('CONNECTION FAILED');
        console.error(error);
        console.error('------------------------------------------');
    } else {
        console.log('------------------------------------------');
        console.log('SUCCESS! Connection established.');
        console.log('Server is ready to take our messages');
        console.log('------------------------------------------');
    }
});
