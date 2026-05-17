"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    tatuagens = false;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
let pessoa1 = new Pessoa("Lucas", 19);
pessoa1.tatuagens = 4;
console.log(`Nome: ${pessoa1.nome} - ${pessoa1.idade}`);
if (pessoa1.tatuagens) {
    console.log(`${pessoa1.tatuagens} tatuagens.`);
}
else {
    console.log(`nenhuma tatuagem`);
}
//# sourceMappingURL=aula03.js.map