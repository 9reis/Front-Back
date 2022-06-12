const PORT = 3000; 
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express( );


let posts = [
    {id:"0",
    title:"Teste do mural",
    description:"Descrição teste"
    },
    {id:"0",
    title:"Teste do mural",
    description:"Descrição teste"
    },
    {id:"0",
    title:"Teste do mural",
    description:"Descrição teste"
    },
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
app.post("/new", (req,res)=>{
})

app.listen(PORT, ( )=> {
    console.log("Server rodando na porta" , PORT)
})

















