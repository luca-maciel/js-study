let prompt = require('prompt-sync')();

function input(message){
    let response = prompt(message);
    return response;
}

//  =========== Q1 ===========

// const price_per_square_meter = 850;

// let terrain_length = parseFloat(input("Digite o comprimento do terreno (em metros): "));
// let terrain_width = parseFloat(input("Digite a largura do terreno (em metros): "));

// let price = terrain_length * terrain_width * price_per_square_meter;

// console.log(`A construção do terreno custará R$ ${price.toFixed(2)}`);

//  =========== Q2 ===========

// let a = parseFloat(input("Digite o valor de a: "));
// let b = parseFloat(input("Digite o valor de b: "));
// let c = parseFloat(input("Digite o valor de c: "));

// let delta = (b**2) - (4*a*c);

// let x1 = (-b + Math.sqrt(delta)) / (2*a);
// let x2 = (-b - Math.sqrt(delta)) / (2*a);

// console.log(`As raízes da equação são: x1 = ${x1} e x2 = ${x2}`);


//  =========== Q3 ===========

// const afirmations = [
//     {
//         "afirmation": "O brasil é o país mais populoso do mundo.",
//         "answer": false
//     },
//     {
//         "afirmation": "2+2*2=6",
//         "answer": true
//     },
//     {
//         "afirmation": "Programar é divertido.",
//         "answer": true
//     },
// ]

// let answers = [];
// let score = 0;

// for (question of afirmations) {
//     let answer = input(`${question.afirmation} (V/F): `).toUpperCase();
//     answer = (answer === "V" || answer === "v") ? true : false;
//     if (answer === question.answer) {
//         score++;
//     }
//     answers.push(answer);
// }

// console.log("\nGabarito");

// for (question of afirmations){
//     console.log(`${question.answer}`);
// }

// console.log("\nSuas respostas");
// for (answer of answers){
//     console.log(`${answer}`);
// }
// console.log(`\nSua pontuação: ${score}/${afirmations.length}`);


//  =========== Q4 ===========

// products = [];
// let total = 0;
// const descount = 0.2;

// for (let i = 0; i < 3; i++) {
//     let product_price = parseFloat(input(`Digite o preço do ${i+1}° produto: `));   
//     products.push({"price": product_price});
// }

// for (product of products) {
//     total += product.price;
// }

// let final_price = total * (1 - descount);

// console.log(`O total das compras foi ${total.toFixed(2)}`);
// console.log(`O desconto será de ${total * descount} reais`);
// console.log(`O cliente deve pagar ${final_price.toFixed(2)} reais`);