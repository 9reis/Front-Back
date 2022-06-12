module.exports = {
  posts: [
        {id:"0",
        title:"Teste do mural",
        description:"Descrição teste"
        },
    ],

    //Função GET retorna todos os posts 
    getAll(){
        return this.posts;
    },

    //Função POST cia um novo Post
    newPost(title,description){
        this.posts.push({id:generateID(),title,description})
    },
    
}

    function generateID(){
        return Math.random().toString(36).substr(2,9);
    }