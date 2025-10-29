const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

//Criar rota 
app.post("/usuario/novo", (req, res) =>{
    try {
        //Criar as informções que será necessaria para criar um novo usuário
        const {usuario :{nome, email, senha}} = req.body;

        //"!" = "nome == undefined"
        //Verificar se o Nome será valido 
        if (! nome || nome.length < 3) {
            return res.status(400).json("Erro: Nome inválido! Necessário mais de 3 carateres!");
        }//"nome.length > 3" Esse comando verificará se a Variável "Nome" será maior que 3 caracteres;
        //".lenght" comando que retorna a quantidade de caracteres cadastrado dentro da string;

        //Verificar se email é valido
        if (! email || !email.includes("@")){
            return res.status(400).json("Erro: Email não inválido!");
        }//"email.includes(@)" Comando que verificará se "Email" terá "@"
        //".includes(@)" Comando que verificará que na string ou na array contém "@"

        if (! senha || rssenha.length < 8) {
            return res.status(400).json(`Erro: Senha inválida! Necessário ter menos de 8 caracteres! `);
        }//"senha.length < 8 " Verificará se "Senha" vao ser maior que 8 caracteres  

        res.status(200).json("Usuário cadastrado com sucesso!");

    } catch (error) {
        console.log("Erro:", error);
        res.status(500).json({errorMessage: error});
    }
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando em localhost:${PORT}`);
});