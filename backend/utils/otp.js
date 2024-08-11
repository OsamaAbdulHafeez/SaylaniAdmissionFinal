import nodemailer from 'nodemailer'

export const otp = async(mail,otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.user,
            pass: process.env.Secret_Key,
        },
    });
    const mailOptions = {
        from: process.env.USER,
        to: mail,   //krazadev
        subject: "OTP Verification",
        // text: `Your OTP is: ${otp}`,
        html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                <h2 style="color: #333;">OTP Verification</h2>
                <p style="font-size: 16px;">Your OTP is: <strong>${otp}</strong></p>
            </div>`
    };
    try {
        await transporter.sendMail(mailOptions)
        return `OTP sent to ${mail} via email`;
    } catch (error) {
        console.log(error)
    }
}