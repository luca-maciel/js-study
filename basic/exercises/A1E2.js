const prompt = require('prompt-sync')();

function input(message){
    let response = prompt(message);
    return response;
}

/* =========== Q1 ===========
Escreva um programa que leia o primeiro nome do usuário e depois que leia o último
nome. Ao final, o programa deve imprimir no console o último nome seguido do primeiro e
separados por vírgula.
*/

// let first_name = input("What is your first name? ");
// let last_name = input("What is your last name? ");

// console.log(`${last_name}, ${first_name}.`);


/* =========== Q2 ===========
Escreva um programa que leia o ano de nascimento de uma pessoa e calcula e imprime
no console a idade dela
*/

// let birth_year = input("Digite seu ano de nascimento: ");
// let actual_year = new Date().getFullYear();
// let age = actual_year - birth_year;

// console.log(`Sua idade é ${age} anos.`);

/* =========== Q3 ===========
 Escreva um programa que leia as três notas do aluno e calcula e imprime no console a
média que ele obteve na disciplina.
*/

// let score_one = parseFloat(input("Digite a primeira nota: "));
// let score_two = parseFloat(input("Digite a segunda nota: "));
// let score_three = parseFloat(input("Digite a terceira nota: "));
// let average = (score_one + score_two + score_three) / 3;

// console.log(`Sua média foi: ${average.toFixed(2)}`);

/* =========== Q4 ===========
 Escreva um programa que leia o salário total de uma pessoa e quantas horas ela
trabalha por dia. Em seguida, calcule e imprima quanto essa pessoa recebe por hora.
*/

// let total_salary = parseFloat(input("Digite o salário total: "));
// let hours_per_day = parseFloat(input("Digite o número de horas trabalhadas por dia: "));

// let salary_per_hour = total_salary / (hours_per_day * 30);

// console.log(`Considerando um mês de 30 dias, você recebe ${salary_per_hour.toFixed(2)} por hora.`);