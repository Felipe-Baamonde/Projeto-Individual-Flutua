var escolha = 0
    function mostrarPreco(){
        if (tipo_basico.value == "diario") {
            div_basico.innerHTML = "R$10.00"
        }else if (tipo_basico.value == "semanal") {
            div_basico.innerHTML = "R$25.00"
        }else{
            div_basico.innerHTML = `R$50.00`
        }

        if (tipo_gamer.value == "diario") {
            div_gamer.innerHTML = "R$20.00"
        }else if (tipo_gamer.value == "semanal") {
            div_gamer.innerHTML = "R$35.00"
        }else{
            div_gamer.innerHTML = `R$70.00`
        }

        if (tipo_avancado.value == "diario") {
            div_avancado.innerHTML = "R$30.00"
        }else if (tipo_avancado.value == "semanal") {
            div_avancado.innerHTML = "R$45.00"
        }else{
            div_avancado.innerHTML = `R$90.00`
        }



    }

    function queroBasico(){
        if (tipo_basico.value == "diario") {
            escolha = 1
        }else if (tipo_basico.value == "semanal") {
            escolha = 2  
        }else if(tipo_basico.value == "mensal"){
            escolha = 3
        }
        window.location = "Cadastro.html";
        
    }

    function queroGamer(){
        if (tipo_gamer.value == "diario") {
            escolha = 4
        }else if (tipo_gamer.value == "semanal") {
            escolha = 5
        }else if(tipo_gamer.value == "mensal"){
            escolha = 6
        }
        window.location = "Cadastro.html";
    }

    function queroAvançado(){
        if (tipo_avancado.value == "diario") {
            escolha = 7
        }else if (tipo_avancado.value == "semanal") {
            escolha = 8
        }else if(tipo_avancado.value == "mensal"){
            escolha = 9
        }
        window.location = "Cadastro.html";
    }


var plano = 0
function select_cadastro() {
    plano = plano_cadastro.value
    tipo = tipo_cadastro.value
    if (plano == 'basico') {
        if (tipo == 'diario') {
            plano = 1
        } else if (tipo == 'semanal') {
            plano = 2
        } else if (tipo == 'mensal') {
            plano = 3
        }
    }

    if (plano == 'gamer') {
        if (tipo == 'diario') {
            plano = 4
        } else if (tipo == 'semanal') {
            plano = 5
        } else if (tipo == 'mensal') {
            plano = 6
        }
    }

    if (plano == 'avancado') {
        if (tipo == 'diario') {
            plano = 7
        } else if (tipo == 'semanal') {
            plano = 8
        } else if (tipo == 'mensal') {
            plano = 9
        }
    }
    console.log(plano)

}

function Cadastrar() {
    mensagem_erro.innerHTML = ""
    aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_cadastro.value;
    var emailVar = email_cadastro.value;
    var dataVar = data_cadastro.value;
    var senhaVar = senha_cadastro.value;
    var confirmacaoSenhaVar = ConfirmarSenha_cadastro.value;
    var confirmacaoEmailVar = ConfirmarEmail_cadastro.value;
    if (nomeVar == "" || nomeVar.length < 1) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "O nome deve ter pelo menos 1 letra<br>";

        finalizarAguardar();
        return false;
    }
    else if (emailVar == "" || emailVar.indexOf('@') < 0 || emailVar.indexOf('.com') < 0) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "Email precisa ter @ e .com <br>";

        finalizarAguardar();
        return false;
    }
    else if (dataVar == "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "Digite uma data válida";

        finalizarAguardar();
        return false;
    }
    else if (senhaVar == "" || senhaVar.length < 6) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "A senha precisa ter pelo menos 6 caracteres <br>";

        finalizarAguardar();
        return false;
    }
    else if (confirmacaoSenhaVar == "" || confirmacaoSenhaVar.length < 6 || confirmacaoSenhaVar != senhaVar) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "As duas senhas precisam ser iguais <br>";

        finalizarAguardar();
        return false;
    }
    else if (confirmacaoEmailVar == "" || confirmacaoEmailVar != emailVar) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "Os dois emails precisam ser iguais";

        finalizarAguardar();
        return false;
    }
    else if (plano <= 0 || plano > 9) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML +=
            "Selecione um plano";

        finalizarAguardar();
        return false;
    }

    else {
        setInterval(sumirMensagem, 5000);
    }
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            dataServer: dataVar,
            senhaServer: senhaVar,
            planoServer: plano
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "Login.html";
                }, "2000");

                limparFormulario();
                finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}