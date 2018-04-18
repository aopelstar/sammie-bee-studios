require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const massive = require('massive');
const nodemailer = require('nodemailer');
const cloudinary_controller = require('./controllers/cloudinary_cont')

const app = express();
app.use(bodyParser.json());

//cloudinary endpoints

//app.get('/api/cloudinary', cloudinary_controller.getGallery) //get the whole gallery

//nodemailer shtuff
app.post('api/getemail', (req, res)=> {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_LOCK
            }
    });
})

const port = 5432
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})