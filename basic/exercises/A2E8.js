let prompt = require("prompt-sync")();

function input(message){
    return prompt(message);
}

// ======= Q1 ========

// const calendar = {
//     1: { nome: "Janeiro", qtd_dias: 31 },
//     2: { nome: "Fevereiro", qtd_dias: 28 },
//     3: { nome: "Março", qtd_dias: 31 },
//     4: { nome: "Abril", qtd_dias: 30 },
//     5: { nome: "Maio", qtd_dias: 31 },
//     6: { nome: "Junho", qtd_dias: 30 },
//     7: { nome: "Julho", qtd_dias: 31 },
//     8: { nome: "Agosto", qtd_dias: 31 },
//     9: { nome: "Setembro", qtd_dias: 30 },
//     10: { nome: "Outubro", qtd_dias: 31 },
//     11: { nome: "Novembro", qtd_dias: 30 },
//     12: { nome: "Dezembro", qtd_dias: 31 }
// }

// let month_number = input("Digite o número do mês (1-12): ");

// switch(month_number){
//     case "1":
//         console.log(`O mês de ${calendar[1].nome} tem ${calendar[1].qtd_dias} dias.`);
//         break;
//     case "2":
//         console.log(`O mês de ${calendar[2].nome} tem ${calendar[2].qtd_dias} dias.`);
//         break;
//     case "3":
//         console.log(`O mês de ${calendar[3].nome} tem ${calendar[3].qtd_dias} dias.`);
//         break;
//     case "4":
//         console.log(`O mês de ${calendar[4].nome} tem ${calendar[4].qtd_dias} dias.`);
//         break;
//     case "5":
//         console.log(`O mês de ${calendar[5].nome} tem ${calendar[5].qtd_dias} dias.`);
//         break;
//     case "6":
//         console.log(`O mês de ${calendar[6].nome} tem ${calendar[6].qtd_dias} dias.`);
//         break;
//     case "7":
//         console.log(`O mês de ${calendar[7].nome} tem ${calendar[7].qtd_dias} dias.`);
//         break;
//     case "8":
//         console.log(`O mês de ${calendar[8].nome} tem ${calendar[8].qtd_dias} dias.`);
//         break;
//     case "9":
//         console.log(`O mês de ${calendar[9].nome} tem ${calendar[9].qtd_dias} dias.`);
//         break;
//     case "10":
//         console.log(`O mês de ${calendar[10].nome} tem ${calendar[10].qtd_dias} dias.`);
//         break;
//     case "11":
//         console.log(`O mês de ${calendar[11].nome} tem ${calendar[11].qtd_dias} dias.`);
//         break;
//     case "12":
//         console.log(`O mês de ${calendar[12].nome} tem ${calendar[12].qtd_dias} dias.`);
//         break;
//     default:
//         console.log("Número do mês inválido. Por favor, digite um número entre 1 e 12.");
// }

// ======= Q2 ========

// let people_age = input("Digite a idade da pessoa: ");
// let base_price = 100;

// if (people_age < 10){
//     console.log(`Sua mensalidade será de R$${base_price + 80}.`);
// }
// else if (people_age >= 10 && people_age < 30){
//     console.log(`Sua mensalidade será de R$${base_price + 50}.`);
// }
// else if (people_age >= 30 && people_age < 60){
//     console.log(`Sua mensalidade será de R$${base_price + 95}.`);
// }
// else if (people_age >= 60){
//     console.log(`Sua mensalidade será de R$${base_price + 130}.`);
// }
// else{
//     console.log("Idade inválida. Por favor, digite uma idade válida.");
// }

// ======= Q3 ========

// let number_one = parseFloat(input("Digite o primeiro número: "));
// let number_two = parseFloat(input("Digite o segundo número: "));

// let operation = input("Digite a operação desejada (+, -, *, /): ");

// switch(operation){
//     case "+":
//         console.log(`O resultado da soma é: ${number_one + number_two}`);
//         break;
//     case "-":
//         console.log(`O resultado da subtração é: ${number_one - number_two}`);
//         break;
//     case "*":
//         console.log(`O resultado da multiplicação é: ${number_one * number_two}`);
//         break;
//     case "/":
//         if (number_two !== 0 && number_one !== 0){
//             console.log(`O resultado da divisão é: ${(number_one / number_two).toFixed(2)}`);
//         }
//         else{
//             console.log("Não é possível dividir por zero. Por favor, digite um número diferente de zero para a divisão.");
//         }
//         break;
//     default:
//         console.log("Operação inválida. Por favor, digite uma operação válida (+, -, *, /).");
// }

// ======= Q4 ========

// let products = {
//     1: { codigo: 1, nome_produto: "Coxinha", preco_uni: 0.5 },
//     2: { codigo: 2, nome_produto: "Pastel", preco_uni: 0.75 },
//     3: { codigo: 3, nome_produto: "Pão de queijo", preco_uni: 0.4 },
//     4: { codigo: 4, nome_produto: "Enroladinho", preco_uni: 0.8 }
// };

// let product_code = input("Qual o código do salgado? ");

// if (products[product_code]){
//     let quantity = parseInt(input("Qual a quantidade desejada? "));
//     switch(product_code){
//         case "1":
//             console.log(`O total a pagar é: R$${(products[1].preco_uni * quantity).toFixed(2)}`);
//             break;
//         case "2":
//             console.log(`O total a pagar é: R$${(products[2].preco_uni * quantity).toFixed(2)}`);
//             break;
//         case "3":
//             console.log(`O total a pagar é: R$${(products[3].preco_uni * quantity).toFixed(2)}`);
//             break;
//         case "4":
//             console.log(`O total a pagar é: R$${(products[4].preco_uni * quantity).toFixed(2)}`);
//             break;
//         default:
//             console.log("Código do produto inválido. Por favor, digite um código válido (1-4).");
//     }
// }
// else{
//     console.log("Código do produto inválido. Por favor, digite um código válido (1-4).");
// }