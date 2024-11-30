const {transporter, mailOptionsUser,mailOptionsCompany} = require("../services/zohoMailer");
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

module.exports = {sendEmailUser,sendEmailCompany};