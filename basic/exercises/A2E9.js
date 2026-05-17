let prompt = require("prompt-sync")();

function input(message){
    return prompt(message);
}

// ======= Q1 ========

// const valores = {
//     "Bebida": 80,
//     "Comida": 60,
//     "Transporte": 15
// }

// let afirmativas = ["sim", "s", "y", "yes", "positivo", "afirmativo", "verdadeiro", "verdade", "true", "v", "1"];
// let negativas = ["não", "n", "no", "negativo", "falso", "falsidade", "false", "f", "0"];

// let bebida = input("Você planeja beber? (sim/não): ").toLowerCase();
// let comida = input("Você planeja comer? (sim/não): ").toLowerCase();
// let transporte = input("Você planeja usar transporte? (sim/não): ").toLowerCase();

// let total = 0;

// if (afirmativas.includes(bebida)) {
//     total += valores["Bebida"];
// }
// if (afirmativas.includes(comida)) {
//     total += valores["Comida"];
// }
// if (afirmativas.includes(transporte)) {
//     total += valores["Transporte"];
// }

// let quantidade_pessoas = parseInt(input("Quantas pessoas vão participar? "));

// total *= quantidade_pessoas;

// console.log(`O custo total para o evento é: R$ ${total.toFixed(2)}`);


// ======= Q2 ========

// const questoes = {
//     1: {pergunta: "4*12?", resposta: "48"},
//     2: {pergunta: "5*8?", resposta: "40"},
//     3: {pergunta: "6*7?", resposta: "42"},
//     4: {pergunta: "9*9?", resposta: "81"},
//     5: {pergunta: "10*10?", resposta: "100"},
//     6: {pergunta: "159/3?", resposta: "53"},
//     7: {pergunta: "144/12?", resposta: "12"},
//     8: {pergunta: "81/9?", resposta: "9"},
//     9: {pergunta: "100/25?", resposta: "4"},
//     10: {pergunta: "72/8?", resposta: "9"}
// }

// let qtd_acertos = 0;
// let numero_questao;
// let questao_usada = [];

// for (let i = 1; i <= 4; i++) {
//     numero_questao = Math.floor(Math.random() * 10) + 1;
//     if (questao_usada.includes(numero_questao)) {
//         i--;
//         continue;
//     }  

//     let resposta_usuario = input(`Questão ${i}: ${questoes[numero_questao].pergunta} `);
//     if (resposta_usuario === questoes[numero_questao].resposta) {
//         console.log("Resposta correta!");
//         qtd_acertos++;
//     } else {
//         console.log("Resposta incorreta.");
//     }
//     questao_usada.push(numero_questao);
// }

// console.log(`Você acertou ${qtd_acertos} de 4 perguntas.`);


// ====== Q3 ========

let sexo = input("Digite o seu sexo (M/F): ").toUpperCase();
let idade_inicio_contribuicao = parseInt(input("Digite a idade em que começou a contribuir: "));

idade_aposentadoria_M = 65;
idade_aposentadoria_F = 62;

tabela_contribuicao = {
    25: 70,
    30: 77.5,
    35: 87.5,
    40: 100
}

if (sexo === "M") {
    if (idade_inicio_contribuicao >=25 && idade_inicio_contribuicao < 30) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_M} anos e terá direito a ${tabela_contribuicao[25]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=30 && idade_inicio_contribuicao < 35) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_M} anos e terá direito a ${tabela_contribuicao[30]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=35 && idade_inicio_contribuicao < 40) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_M} anos e terá direito a ${tabela_contribuicao[35]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=40) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_M} anos e terá direito a ${tabela_contribuicao[40]}% do benefício.`);
    }
    else {
        console.log("Você ainda não tem idade suficiente para se aposentar.");
    }
}

else if (sexo === "F") {
    if (idade_inicio_contribuicao >=25 && idade_inicio_contribuicao < 30) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_F} anos e terá direito a ${tabela_contribuicao[25]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=30 && idade_inicio_contribuicao < 35) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_F} anos e terá direito a ${tabela_contribuicao[30]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=35 && idade_inicio_contribuicao < 40) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_F} anos e terá direito a ${tabela_contribuicao[35]}% do benefício.`);
    }
    else if (idade_inicio_contribuicao >=40) {
        console.log(`Você pode se aposentar aos ${idade_aposentadoria_F} anos e terá direito a ${tabela_contribuicao[40]}% do benefício.`);
    }
    else {
        console.log("Você ainda não tem idade suficiente para se aposentar.");
    }
}
else {
    console.log("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.");
}