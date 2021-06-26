import express, { response } from "express";         //importa os scets do express local


const app = express();

app.use(express.json());                             //converte as do express para json


app.get("/",(req,res) => {                           //pega o codigo que seria o request e response
    return res.json({message:"hello word"});         //e envia a mensagem em formato json
});


app.post("/user",(req,res) => {                      //posta na url /user o req e res
    const user = req.body;                           //recebe do body as informações e envia para a variavel user
    console.log(user)
    return res.json({message:"success",user});       //retorna quando tudo certo a mensagem e o user
});



app.listen(3333, () => console.log("server star run🙌👌")); //se o server estiver funcionando manda a menssagem
