const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const massive = require('massive');
const nodemailer = require('nodemailer');
const cloudinary_controller = require('./controllers/cloudinary_cont');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use( cors() )

//cloudinary endpoints

app.get('/api/cloudinary', cloudinary_controller.getGallery) //get the whole gallery
app.get('/api/shop', cloudinary_controller.getShop) //get the whole shop

//nodemailer shtuff
app.post('/api/sendEmail', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "login",
                user: process.env.MY_EMAIL,
                pass: process.env.MY_LOCK
            }
        });

        let mailOptions = {
            from: `${req.body.name} <${req.body.from}>`, 
            to: process.env.MY_EMAIL,
            subject: "website communication", 
            html:`<div><p> Email: ${req.body.from}<br/><br/>${req.body.message}</p></div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.send('done')
        });
    });
})

const port = 5432
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})