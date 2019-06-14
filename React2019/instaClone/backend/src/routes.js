const express = require ('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
//Controller
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'),PostController.store);
routes.post('/posts/:id/like', LikeController.store);



// routes.get('/posts', (req, res) => {
//     return res.send('Heloooo mané!!!!!!!!');
// });

//Post http://localhost:3333/posts

module.exports = routes; 