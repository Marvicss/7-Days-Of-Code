
let listaFrutas = [];
let listaDoces = [];
let listaLaticinios = [];
let listaCongelados = [];

let verificador = "Sim"
while(verificador == "Sim"){
    let inputComida = prompt("Qual comida você deseja inserir ?");
    let inputCategoria = prompt("Em qual categoria essa comida se encaixa (Frutas, Doces, Laticinios,Congelados)");
    verificador  = prompt("Deseja continuar ?");
   
    if(inputCategoria === "Frutas"){
        listaFrutas.push(inputComida);
    }
    if(inputCategoria === "Doces"){
        listaDoces.push(inputComida);
    }
    if(inputCategoria === "Laticinios"){
        listaLaticinios.push(inputComida);
    }
    if(inputCategoria === "Congelados"){
        listaCongelados.push(inputComida);
    }

}

console.log(`Lista de Compras: \n Frutas: ${listaFrutas} \n Doces : ${listaDoces} \n Laticinios: ${listaLaticinios} \n Congelados: ${listaCongelados}`)

