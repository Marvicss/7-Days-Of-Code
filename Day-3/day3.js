let pergunta1 = prompt("Se deseja seguir para frontend digite 1 para backend digite 2");


if(pergunta1 === "1"){
    let perguntaFront = prompt("para React digite 1 para vue digite 2");

}
if(pergunta1 === "2"){
    let perguntaBack = prompt("Para Csharp digite 1 , para Java digite 2");

}


let pergunta2 = prompt("Para se especializar digite 1, para fullstack digite 2");

if(pergunta2 === "1"){
    alert("Parabéns, continue se especializando");
}
if(pergunta2 === "2"){
    alert("Parabéns, boa sorte na jornada");
}

let pergunta3 = prompt("Quais são as tecnologias que você deseja se especializar ?");
const listaAprendizado = [];


let booleanvalidation = "S"
for(let i = 0 ; booleanvalidation === "S" ;i++){
    let pergunta3 = prompt("Quais são as tecnologias que você deseja se especializar ?");
    listaAprendizado.push(pergunta3);
    booleanvalidation = prompt("Deseja Inserir mais tecnologia ? S ou N");
}

console.log(listaAprendizado);