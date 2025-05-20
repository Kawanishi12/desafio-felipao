//Declarando as variaveis juntamente com o XP como foi solicitado
let nome_XP = ["JuninGameplay", 0]
let categoriaSelecionada = ""

//Utilizando o laço de repetição e estrutura de decisão
while (nome_XP[1] <= 10000){
    if(nome_XP[1] <= 1000){
        categoriaSelecionada = "Ferro"
    }
    else if(nome_XP[1] <+ 2000){
        categoriaSelecionada = "Bronze"
    }
    else if(nome_XP[1] <+ 5000){
        categoriaSelecionada = "Prata"
    }
    else if(nome_XP[1] <+ 7000){
        categoriaSelecionada = "Ouro"
    }
    else if(nome_XP[1] <+ 8000){
        categoriaSelecionada = "Platina"
    }
    else if(nome_XP[1] <+ 9000){
        categoriaSelecionada = "Ascendente"
    }
    else if(nome_XP[1] <+ 10000){
        categoriaSelecionada = "Imortal"
    }
    console.log("O Guerreiro " + nome_XP[0] + " esta no nivel " + nome_XP[1] + " calssificado como: " + categoriaSelecionada)
    nome_XP[1] += 500
}
//Caso ele ultrapasse o valor de 10000
categoriaSelecionada = "Radiante"
console.log("O Guerreiro " + nome_XP[0] + " esta no nivel " + nome_XP[1] + " calssificado como: " + categoriaSelecionada)