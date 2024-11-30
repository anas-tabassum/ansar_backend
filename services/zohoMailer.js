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

const mailOptionsUser = async (recipientEmail,name)=> {
const templatePath = path.join(__dirname, '..','views', 'user-email-template.ejs');
const htmlContent = await ejs.renderFile(templatePath, {name});
    return {
        from: process.env.ZOHO_USER,
        to: recipientEmail,
        subject: 'Request submitted successfully.',
        html: htmlContent
    }
};

const mailOptionsCompany = async (data)=> {
const templatePath = path.join(__dirname, '..','views', 'company-email-template.ejs');
const htmlContent = await ejs.renderFile(templatePath, {data});
    return {
        from: process.env.ZOHO_USER,
        to: "i_bacar22@hotmail.com, nouhou@ansarvoyage.com",
        subject: 'Request submitted successfully.',
        html: htmlContent
    }
};


module.exports = { transporter,mailOptionsUser,mailOptionsCompany };
