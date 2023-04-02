
function somar (x,y){
    return x+y;
}

function subtrair(x,y){
    return x-y;
}

function multiplicar(x,y){
    return x*y;
}

function dividir(x,y){
    return x/y;
}

let continuar = true;

while(continuar){

let operacao = prompt("Escolhar uma operação");

let num1;
let num2;
if(operacao != "sair"){
num1 = Number(prompt("Digite um numero"));
num2 = Number(prompt("Digite outro numero"));
}else{
    continuar = false
}

switch(operacao){
    case 'somar':
        alert(`O resultado é ${somar(num1,num2)}`);
        break;
    case 'subtrair':
        alert(`O resultado é ${subtrair(num1,num2)}`);
        break;
    case 'multiplicar':
        alert(`O resultado é ${multiplicar(num1,num2)}`);
        break;
    case 'dividir':
        alert(`O resultado é ${dividir(num1,num2)}`)
        break;
    case 'sair':
        alert("até a proxima");
        break;

}
}