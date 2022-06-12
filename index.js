const PORT = 3000; 
const express = require('express'); 
const bodyParser = require('body-parser');
const posts = require('./model/posts')

const app = express( );

// Rora para pegar os Posts
app.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts.getAll()))
});

// Rota para criar um novo Post
app.post("/new", bodyParser.json(), (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title,description);
    
    res.send("Post adicionado com sucesso");
})

app.listen(PORT, ( )=> {
    console.log("Server rodando na porta" , PORT)
})

















