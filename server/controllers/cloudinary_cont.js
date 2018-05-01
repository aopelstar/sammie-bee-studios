//cloudinary configuration
const cloudinary = require('cloudinary');
const dotenv = require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


module.exports = {
    getGallery: (req, res) => {
        cloudinary.v2.api.resources({ type: 'upload', prefix: 'gallery/', max_results: 100 },
        function(error, result){console.log(error)})
        .then( response => res.status(200).send(response) )
    },

    getShop: (req, res) => {
        cloudinary.v2.api.resources({ type: 'upload', prefix: 'shop/', max_results: 100, tags: true },
        function(error, result){console.log(error)})
        .then( response => res.status(200).send(response) )
    }
    
}