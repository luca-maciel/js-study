"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lista_ordenavel = document.getElementById('lista-ordenavel');
const botao_checar = document.getElementById('checar');
const paisesMaisPopulosos = [
    "Índia",
    "China",
    "Estados Unidos",
    "Indonesia",
    "Paquistão",
    "Nigéria",
    "Brasil",
    "Bangladesh",
    "Russia",
    "México"
];
const itensDaLista = [];
let indice_inicio_arraste;
function criarLista() {
    [...paisesMaisPopulosos].map((item) => ({ valor: item, ordem: Math.random() })).sort((a, b) => a.ordem - b.ordem).map((a) => a.valor).forEach((pais, indice) => {
        const item = document.createElement("li");
        item.setAttribute("data-indice", indice);
        item.innerHTML = `
            <span class="numero">${indice + 1}</span>
            <div class="arrastavel" draggable="true">
                <p class="nome-pais">${pais}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;
        itensDaLista.push(item);
        lista_ordenavel?.appendChild(item);
    });
    adicionarDetectoresDeEventos();
}
;
criarLista();
function iniciarArraste(evento) {
    indice_inicio_arraste = +this.closest("li").getAttribute("data-indice");
    // indice_inicio_arraste = parseInt(this);     pode substituir o + na linha acima
}
function encostar() {
    this.classList.add("em-cima");
}
function desencostar() {
    this.classList.remove("em-cima");
}
function emCima(evento) {
    evento.preventDefault();
}
function soltar() {
    let indice_fim_arraste = +this.getAttribute("data-indice");
    trocarItens(indice_inicio_arraste, indice_fim_arraste);
    this.classList.remove("em-cima");
    checarOrdem();
}
function trocarItens(indiceOrigem, indiceDestino) {
    const itemUm = itensDaLista[indiceOrigem].querySelector(".arrastavel");
    const itemDois = itensDaLista[indiceDestino].querySelector(".arrastavel");
    itensDaLista[indiceOrigem].appendChild(itemDois);
    itensDaLista[indiceDestino].appendChild(itemUm);
}
function adicionarDetectoresDeEventos() {
    const arrastaveis = document.querySelectorAll(".arrastavel");
    const itens_lista_ordenavel = document.querySelectorAll(".lista-ordenavel li");
    arrastaveis.forEach((arrastavel) => {
        arrastavel.addEventListener("dragstart", iniciarArraste);
    });
    itens_lista_ordenavel.forEach((item) => {
        item.addEventListener("dragenter", encostar);
        item.addEventListener("dragleave", desencostar);
        item.addEventListener("dragover", emCima);
        item.addEventListener("drop", soltar);
    });
}
;
function checarOrdem() {
    itensDaLista.forEach((item, indice) => {
        const nome_pais = item.querySelector(".arrastavel").innerText.trim();
        if (nome_pais !== paisesMaisPopulosos[indice]) {
            //ordem incorreta
            item.classList.remove("correto");
            item.classList.add("incorreto");
        }
        else {
            // correta
            item.classList.remove("incorreto");
            item.classList.add("correto");
        }
    });
}
;
//# sourceMappingURL=app.js.map