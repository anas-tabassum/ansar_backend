const {transporter, mailOptions} = require("../services/zohoMailer");
const emailValidator = require('email-validator');
require("dotenv").config();

const sendEmail = async(recipientEmail,name) => {
    const options = await mailOptions(recipientEmail,name);
    if(emailValidator.validate(recipientEmail)) {
        transporter.sendMail(options, function (error, info) {
            if (error) {
                console.log("Email Failed");
            } else {
                console.log("Email sent");
            }
        });
    }else{
        console.log("Invalid recipient email address");
    }
}

module.exports = {sendEmail};