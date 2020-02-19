const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()


router.post('/send-message', (req, res) => {
    const data = req.body

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "leventcoding@gmail.com",
            pass: "1453.1453"
        }
    });

    const mailOptions = {
        to: "leventcoding@gmail.com",
        subject: data.subject,
        html: `
        <p> <b>İsim, Soyisim:</b> ${data.fullName}</p>
        <p> <b>Telefon:</b> ${data.phone}</p>
        <p> <b>Email:</b> ${data.email}</p>
        <p> <b>Konu:</b> ${data.subject}</p>
        <p> <b>Mesaj:</b> </p>
        <p>${data.message}</p>
        `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({ success: false })
        } else {
            mailOptions.to = data.email
            mailOptions.text = "mesajınız bize ulaştı en kısa zamanda size dönüş yapacağız"
            mailOptions.html = ""

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    res.json({ success: false })
                } else {
                    res.json({ success: true })
                }
            });
        }
    });
})


module.exports = router