const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createAt');
        return res.json(posts);
    },
    async store(req, res){
        const { 
            author, 
            place, 
            description, 
            hashtags 
            } = req.body;
        const { 
            filename: image 
            } = req.file;

            const [name] = image.split('.');//Salvando img com extensão .jpg
            const fileName = `${name}.jpg`;


            await sharp(req.file.path)//Caminho relativo da img no dispositivo
                .resize(500)//Tamanho da imagen X
                .jpeg({ quality: 70 })//Formato e qualidade da imagem
                .toFile(
                    path.resolve(req.file.destination, 'resized', fileName)
                )
                fs.unlinkSync(req.file.path); //Apagando a img original

        const post = await Post.create({
            author, 
            place, 
            description, 
            hashtags,
            image: fileName, 
        });

        req.io.emit('post', post);
        return res.json(post);
    }
};