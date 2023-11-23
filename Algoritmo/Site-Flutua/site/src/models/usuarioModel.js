var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, dataNasc, email, fk_idPlanoUsuario as planoId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, dataNasc, senha, planoId) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, dataNasc, email, senha, fk_idPlanoUsuario) VALUES ('${nome}', '${dataNasc}', '${email}', '${senha}', '${planoId}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Função para cadastrar a avaliacao no banco -- DESENVOLVER!
function cadastrarAvaliacao(qtdEstrelas, mensagem_avaliacao, idUsuario){
    var instrucao = `
            INSERT INTO avaliacao (qtdEstrelas, mensagem, fk_idUsuario) values (${qtdEstrelas}, '${mensagem_avaliacao}', ${idUsuario})
    `;
    return database.executar(instrucao);
}

function VerAvaliacao(){
    var instrucao = `
    SELECT usuario.nome, qtdEstrelas, mensagem from Avaliacao join usuario on fk_idUsuario = idUsuario;
    `;
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarAvaliacao,
    VerAvaliacao
};