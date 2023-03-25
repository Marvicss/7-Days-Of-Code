
let nome = prompt("Qual o seu nome ");
let idade = prompt("Qual a sua idade");
let linguagemProgramacao = prompt("Qual linguagem você está apredendo");


console.log(`O seu nome é ${nome} , sua idade é ${idade} e você está aprendendo ${linguagemProgramacao}`);

let gostaLinguagem = prompt(`Você gosta de estudar a linguagem ${linguagemProgramacao} ? Digite 1 para sim e 2 para não.`)

if(gostaLinguagem == 1){
 console.log("Parabéns, continue estudando.")
}
if(gostaLinguagem == 2){
    console.log("Que pena. Já pensou em estudar outra linguagem ?")
}
