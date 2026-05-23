const lista_ordenavel:HTMLElement|null = document.getElementById('lista-ordenavel');

const botao_checar:HTMLElement|null = document.getElementById('checar');

const paisesMaisPopulosos:String[] = [
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

const itensDaLista:any[] = [];

let indice_inicio_arraste:number;

function criarLista(){
    [...paisesMaisPopulosos].map((item:String) => (
        {valor:item, ordem:Math.random()}
        )
    ).sort((a:any, b:any) => a.ordem - b.ordem).map((a:any) => a.valor).forEach((pais:any, indice:any)=>{
        const item:HTMLElement|null = document.createElement("li");
        item.setAttribute("data-indice", indice);

        item.innerHTML = `
            <span class="numero">${indice+1}</span>
            <div class="arrastavel" draggable="true">
                <p class="nome-pais">${pais}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        itensDaLista.push(item);

        lista_ordenavel?.appendChild(item);
    });

    adicionarDetectoresDeEventos();
};

criarLista();

function iniciarArraste(this: HTMLElement|any, evento:String){
    indice_inicio_arraste = +this.closest("li").getAttribute("data-indice");
    // indice_inicio_arraste = parseInt(this);     pode substituir o + na linha acima
}

function encostar(this:HTMLElement){
    this.classList.add("em-cima");
}

function desencostar(this:HTMLElement){
    this.classList.remove("em-cima");
}

function emCima(this:HTMLElement, evento:any){
    evento.preventDefault();
}

function soltar(this:any){
    let indice_fim_arraste = +this.getAttribute("data-indice");
    trocarItens(indice_inicio_arraste, indice_fim_arraste);
    this.classList.remove("em-cima");
    checarOrdem();
}

function trocarItens(indiceOrigem:any, indiceDestino:any){
    const itemUm = itensDaLista[indiceOrigem].querySelector(".arrastavel");
    const itemDois = itensDaLista[indiceDestino].querySelector(".arrastavel");

    itensDaLista[indiceOrigem].appendChild(itemDois);
    itensDaLista[indiceDestino].appendChild(itemUm);
}

function adicionarDetectoresDeEventos(){
    const arrastaveis = document.querySelectorAll(".arrastavel");
    const itens_lista_ordenavel = document.querySelectorAll(".lista-ordenavel li");

    arrastaveis.forEach((arrastavel:any) =>{
        arrastavel.addEventListener("dragstart", iniciarArraste);
    });

    itens_lista_ordenavel.forEach((item:any) => {
        item.addEventListener("dragenter", encostar);
        item.addEventListener("dragleave", desencostar);
        item.addEventListener("dragover", emCima);
        item.addEventListener("drop", soltar);
    });

};

function checarOrdem(){
    itensDaLista.forEach((item:any, indice:any) =>{
        const nome_pais:String = item.querySelector(".arrastavel").innerText.trim();

        if (nome_pais !== paisesMaisPopulosos[indice]){
            //ordem incorreta
            item.classList.remove("correto");
            item.classList.add("incorreto");
        }
        else{
            // correta
            item.classList.remove("incorreto");
            item.classList.add("correto");
        }
    });
};

