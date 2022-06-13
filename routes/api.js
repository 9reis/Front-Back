const express = require('express'); 
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts')

const options = {
    origin: "https://9reis.github.io/Mural-de-Avisos/"
}
router.use(cors(options));

// Rora para pegar os Posts
router.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()))
});

// Rota para criar um novo Post
router.post("/new", bodyParser.json(), (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);
    
    res.send("Post adicionado com sucesso");
})

module.exports = router;