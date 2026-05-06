let prompt = require('prompt-sync')();

function input(message) {
    return prompt(message);
}

// ======= Q1 =======

// let a = parseInt(input("Digite o valor de a: "));
// let b = parseInt(input("Digite o valor de b: "));
// let c = parseInt(input("Digite o valor de c: "));

// if (a === b && b === c) {
//     console.log("Triangulo Equilátero");
// }
// else if (a === b || b === c || a === c) {
//     console.log("Triangulo Isósceles");
// }
// else{
//     console.log("Triangulo Escaleno");
// }

// ======= Q2 =======

// let weight = parseFloat(input("Digite seu peso (kg): "));
// let height = parseFloat(input("Digite sua altura (cm): "));

// let imc = weight / ((height/100) ** 2);

// console.log("Seu IMC é: " + imc.toFixed(2));

// if (imc < 17) {
//     console.log("Muito abaixo do peso");
// }
// else if (imc >= 17 && imc < 18.49) {
//     console.log("Abaixo do peso");
// }
// else if (imc >= 18.5 && imc < 24.99) {
//     console.log("Peso normal");
// }
// else if (imc >= 25 && imc < 29.99) {
//     console.log("Acima do peso");
// }
// else if (imc >= 30 && imc < 34.99) {
//     console.log("Obesidade I");
// }
// else if (imc >= 35 && imc < 39.99) {
//     console.log("Obesidade II (severa)");
// }
// else if (imc >= 40) {
//     console.log("Obesidade III (mórbida)");
// }
// else{
//     console.log("Valor de IMC inválido");
// }

// ======== Q3 ========

// let km_per_liter = parseFloat(input("Digite a média de km por litro do seu carro: "));
// let distance = parseFloat(input("Digite a distância a ser percorrida (km): "));
// let restant_fuel = parseFloat(input("Digite a quantidade de combustível restante (litros): "));

// let fuel_needed = distance / km_per_liter;

// if (restant_fuel >= fuel_needed) {
//     console.log(`Você tem combustível suficiente para a viagem.`);
// } else {
//     console.log(`Você não tem combustível suficiente para a viagem. Você precisará de ${ (fuel_needed - restant_fuel).toFixed(2) } litros de combustível.`);
// }

// ======== Q4 ========

let age = parseInt(input("Digite sua idade: "));
let weight = parseFloat(input("Digite seu peso (kg): "));

if (age >= 18 && weight > 50){
    let tattoo_in_last_year = input("Você fez alguma tatuagem no último ano? (S/N): ").toUpperCase();
    let alchool_in_last_12_hours = input("Você consumiu álcool nas últimas 12 horas? (S/N): ").toUpperCase();
    if (tattoo_in_last_year === "N" && alchool_in_last_12_hours === "N") {
        console.log("Você pode doar sangue.");
    }
    else {
        console.log("Você não pode doar sangue.");
    }
}
else{
    console.log("Você não pode doar sangue.");
}