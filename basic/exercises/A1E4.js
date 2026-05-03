let prompt = require("prompt-sync")();

function input(message) {
    let response = prompt(message);
    return response;
}

//  =========== Q1 ===========

// let celsius = parseFloat(input("Digite a temperatura em Celsius: "));
// let fahrenheit = (1.8 * celsius) + 32;
// let kelvin = celsius + 273;

// console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
// console.log(`A temperatura em Kelvin é: ${kelvin.toFixed(2)}K`);


let km_distance = parseFloat(input("Digite a distância em quilômetros: "));