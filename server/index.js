require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const massive = require('massive');
const cloudinary_controller = require('./controllers/cloudinary_cont')

const app =express();
app.use(bodyParser.json());

//cloudinary endpoints

app.get('/api/cloudinary', cloudinary_controller.getGallery) //get the whole gallery
