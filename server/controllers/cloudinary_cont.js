//cloudinary configuration
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud__name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


module.exports = {
    getGallery: (req, result) => {
        get('/resources/image', cloudinary.v2.api.resources({ type: 'upload', prefix: 'gallery/' },
         function(error, result){
             console.log(error)}
             .then(resp => {
                 res.status(200).send(resp);
            
        })))
    }
    
}