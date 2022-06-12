const PORT = 3000; 
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express( );


let posts = [
    {id:"0",
    title:"Teste do mural",
    description:"Descrição teste"
    },
    
]

// Rora para pegar os Posts
app.get("/all", (req,res)=>{
    res.json(JSON.stringify(posts))
});

// Rota para criar um novo Post
app.post("/new", bodyParser.json(), (req,res)=>{
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({id,title,description})

    res.send("Post adicionado com sucesso");
})

app.listen(PORT, ( )=> {
    console.log("Server rodando na porta" , PORT)
})

function generateID(){
    return Math.random().toString(36).substr(2,9);
}















