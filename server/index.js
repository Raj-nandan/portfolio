const PORT = 5000
const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json("server is on...")
})


app.post('/send-email', async(req, res) => {
    console.log("Received data:", req.body);
    const {name, email, message} = req.body

    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: 'nandanr532@gmail.com',
            pass: '@Raj12345'
        }
    })

    const mailOptions = {
        from: email,
        to: 'nandanr53@gmail.com',
        subject: `New message from ${name}`,
        text: message,

    }

    try{
        await transporter.sendMail(mailOptions)
        res.status(200).json({message: 'Email sent successfully'})
    }
    catch(error){
        console.error("Error sending email:", error);
        res.status(500).json({message: 'failed to send mail'})
    }
    
})





























app.listen(PORT, () =>{
    console.log("server is running on port " + PORT)
})