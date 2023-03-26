let numeroRadom = Math.round((Math.random() *5));
let tentativa = 3;

while(tentativa > 0){
    let input = prompt("Tente adivinhar o numero : ");
    if(numeroRadom === Number(input)){
        alert("Parabéns, você acertou !!!")
        break;
    }else{
        tentativa = tentativa -1;
        alert(`Não foi dessa vez, você ainda tem ${tentativa} tentavias.`)
    }

   
}

alert(`O numero sorteado era ${numeroRadom}`)

