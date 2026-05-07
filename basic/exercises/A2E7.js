let prompt = require("prompt-sync")();

function input(message){
    return prompt(message);
}

// ======= Q1 ========

// let max_street_speed = input("Qual a velocidade máxima da via? ");
// let driver_speed = input("Qual a velocidade do motorista? ");

// let mid_infraction = (driver_speed <= (max_street_speed * 1.2) && driver_speed > max_street_speed)
// let high_infraction = (driver_speed > (max_street_speed * 1.2) && driver_speed <= (max_street_speed * 1.5))
// let very_high_infraction = (driver_speed > (max_street_speed * 1.5))

// if(mid_infraction){
//     console.log("Infração média. Multa de R$85,00 + 4 pontos na carteira.");
// }
// else if(high_infraction){
//     console.log("Infração grave. Multa de R$127,00 + 5 pontos na carteira.");
// }
// else if(very_high_infraction){
//     console.log("Infração gravíssima. Multa de R$574,00 + 7 pontos na carteira.");
// }
// else{
//     console.log("Velocidade dentro do limite permitido. Sem infração.");
// }

// ======== Q2 ========

// const calendar = {
//     1: "Janeiro",
//     2: "Fevereiro",
//     3: "Março",
//     4: "Abril",
//     5: "Maio",
//     6: "Junho",
//     7: "Julho",
//     8: "Agosto",
//     9: "Setembro",
//     10: "Outubro",
//     11: "Novembro",
//     12: "Dezembro"
// }

// let month_number = input("Digite o número do mês (1-12): ");

// switch(month_number){
//     case "1":
//         console.log(calendar[1]);
//         break;
//     case "2":
//         console.log(calendar[2]);
//         break;
//     case "3":
//         console.log(calendar[3]);
//         break;
//     case "4":
//         console.log(calendar[4]);
//         break;
//     case "5":
//         console.log(calendar[5]);
//         break;
//     case "6":
//         console.log(calendar[6]);
//         break;
//     case "7":
//         console.log(calendar[7]);
//         break;
//     case "8":
//         console.log(calendar[8]);
//         break;
//     case "9":
//         console.log(calendar[9]);
//         break;
//     case "10":
//         console.log(calendar[10]);
//         break;
//     case "11":
//         console.log(calendar[11]);
//         break;
//     case "12":
//         console.log(calendar[12]);
//         break;
//     default:
//         console.log("Número do mês inválido. Por favor, digite um número entre 1 e 12.");
// }

// ======== Q3 ========

// let number_one = parseFloat(input("Digite o primeiro número: "));
// let number_two = parseFloat(input("Digite o segundo número: "));
// let number_three = parseFloat(input("Digite o terceiro número: "));

// let numbers = [number_one, number_two, number_three];

// for (number of numbers.reverse()){
//     console.log(number);
// }

// ======== Q4 ========

// let date_day_one = parseInt(input("Digite o dia da primeira data: "));
// let date_month_one = parseInt(input("Digite o mês da primeira data: "));
// let date_year_one = parseInt(input("Digite o ano da primeira data: "));

// let date_day_two = parseInt(input("Digite o dia da segunda data: "));
// let date_month_two = parseInt(input("Digite o mês da segunda data: "));
// let date_year_two = parseInt(input("Digite o ano da segunda data: "));

// if (date_year_one < date_year_two){
//     console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//     console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
// }
// else if (date_year_one > date_year_two){
//     console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//     console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
// }
// else{
//     if (date_month_one < date_month_two){
//         console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//         console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//     }
//     else if (date_month_one > date_month_two){
//         console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//         console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//     }
//     else{
//         if (date_day_one < date_day_two){
//             console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//             console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//         }
//         else if (date_day_one > date_day_two){
//             console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//             console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//         }
//         else{
//             console.log(`${date_day_one}/${date_month_one}/${date_year_one}`);
//             console.log(`${date_day_two}/${date_month_two}/${date_year_two}`);
//         }
//     }
// }

