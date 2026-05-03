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

//  =========== Q2 ===========

// let km_distance = parseFloat(input("Digite a distância em quilômetros: "));

// let steps_distance = km_distance * 1000 / 0.82;

// console.log(`A distância em passos é: ${steps_distance.toFixed(2)} passos`);

//  =========== Q3 ===========

// let disponible_workers = parseInt(input("Digite o número de trabalhadores disponíveis: "));
// let total_hours_wall = 576

// let hours_by_total_workers = total_hours_wall / disponible_workers;

// console.log(`O número de horas necessárias para concluir a parede com ${disponible_workers} trabalhadores é: ${hours_by_total_workers.toFixed(2)} horas`);

//  =========== Q4 ===========

let normal_people_percentage = 55;
let students_percentage = 45;
let trip_cost_by_person = 30;

let total_accumulated_day = parseFloat(input("Digite o total acumulado do dia: "));

let trips_students = total_accumulated_day * students_percentage / 100 / (trip_cost_by_person/2);
let trips_normal_people = total_accumulated_day * normal_people_percentage / 100 / trip_cost_by_person;

console.log(`O número de viagens realizadas por estudantes é: ${trips_students.toFixed(2)} viagens`);
console.log(`O número de viagens realizadas por pessoas normais é: ${trips_normal_people.toFixed(2)} viagens`);