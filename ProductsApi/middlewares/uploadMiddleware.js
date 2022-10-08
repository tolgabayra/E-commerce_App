const multer = require('multer')
 
let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        let f = Date.now() + '_';
        cb(null, f + file.originalname);
    }
})
 

module.exports = multer({storage: storage})