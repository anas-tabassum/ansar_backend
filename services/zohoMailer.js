const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user:  process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD
    }
});

const mailOptions = async (recipientEmail)=> {
const templatePath = path.join(__dirname, '..','views', 'email.ejs');
const htmlContent = await ejs.renderFile(templatePath, {});
    return {
        from: process.env.ZOHO_USER,
        to: recipientEmail,
        subject: 'Request submitted successfully.',
        html: htmlContent
    }
};


module.exports = { transporter,mailOptions };
