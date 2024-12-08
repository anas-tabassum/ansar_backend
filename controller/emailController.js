const {transporter, mailOptionsUser,mailOptionsCompany, mailOptionsContact} = require("../services/zohoMailer");
const emailValidator = require('email-validator');
require("dotenv").config();

const sendEmailUser = async(recipientEmail,name) => {
    const options = await mailOptionsUser(recipientEmail,name);
    if(emailValidator.validate(recipientEmail)) {
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log("Email Failed");
            } else {
                console.log("Email sent to User");
            }
        });
    }else{
        console.log("Invalid recipient email address");
    }
}

const sendEmailCompany = async(data) => {
    const options = await mailOptionsCompany(data);
    if(emailValidator.validate(data.email)) {
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log("Email Failed");
            } else {
                console.log("Email sent to Company");
            }
        });
    }else{
        console.log("Invalid recipient email address");
    }
}

const sendEmailContact = async(data,res) => {
    const options = await mailOptionsContact(data);
    if(emailValidator.validate(data.email)) {
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log("Email Failed");
                return res.status(500).json({ success: false, message: "Email sending failed." });
            } else {
                console.log("User email sent to Contact");
                return res.status(200).json({ success: true, message: "Email sent successfully." });
            }
        });
    }else{
        console.log("Invalid recipient email address");
    }
}

module.exports = {sendEmailUser,sendEmailCompany,sendEmailContact};