const {transporter, mailOptions} = require("../services/zohoMailer");
const emailValidator = require('email-validator');
require("dotenv").config();

const sendEmail = async(recipientEmail) => {
    const options = await mailOptions(recipientEmail);
    if(emailValidator.validate(recipientEmail)) {
        transporter.sendMail(options, function (error, info) {
            if (error) {
                return res.json({status: "Email Failed"});
            } else {
                console.log("Email sent");
                return res.json({status: "Email sent"});
            }
        });
    }else{
        console.log("Invalid recipient email address");
    }
}

module.exports = {sendEmail};