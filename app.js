const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

//Rota /soma
app.post('/soma', (req, res) => {
    try {
        //
        const { valores } = req.body;
    
        //O comando "!Array.isArray(valores)" verificara se valores será uma array, se for retorna com true, caso contrário retorna como false 
        // Verifica se o campo existe e se é um array
        if (!Array.isArray(valores)) {
            return res.status(400).json("Campos obrigatótios não respondidos corretamnentes!");
        }
    
        // Verifica se todos os valores são numéricos
        //".filter" verifica se cada item é uma array 
        //"valores => typeof valores !== number" verifica o item é um número 
        //"isNaN(valores)" verificara se valores é um número válido
        const invalidos = valores.filter(valores => typeof valores !== "number" || isNaN(valores));
    
        //O comando "invalidos.length > 0 " verifica se a array invalidos nao esta vazio, caso esteja retornará uma mensagem no json dizendo que as informações colocadas pelo usuários é inválida
        if (invalidos.length > 0) {
            return res.status(400).json("Valores inválidos. Verifique os itens colocados são válidos!");
        }
    
        //"valores.reduce" pega a array e o tranforma em apenas um unico valor 
        // Realiza o cálculo utilizando reduce
        let resultado = 0;
        for (let i = 0; i < valores.length; i++) {
            resultado += valores[i];
        }

        //Se tudo ocorrer corretamente aparecerá para o usuário o resultado do cálculo em formado de JSON
        return res.status(200).json(`Resultado:${resultado}`);  

    } catch (error) {
        console.log("Erro:", error);
        res.status(500).json({errorMessage: error});
    }
});  

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});
