let tempo;
let timeLeft;
let timeTotal;


function ovenTime(){
    let inputOvenTime = Number(document.getElementsByTagName('input')[0].value);
    
    if(inputOvenTime != 0){
        timeLeft= 30-inputOvenTime; 

        if (timeLeft==0) {
            alert("Retire sua lasanha do forno imediatamente")
        }
        else if(timeLeft < 0){
            alert("Sua lasanha passou do tempo de forno, provavelmente está queimado")
        }
        else if(timeLeft > 0){
            alert("Ainda falta " + timeLeft + " minuto(s)")
        }
    }
}

function LayerNumber(){
    let inputLayerNumber = Number(document.getElementsByTagName('input')[1].value)

    if(inputLayerNumber != 0){
        timeLeft= 2*inputLayerNumber;
        alert("Você vai levar " + timeLeft + " minuto(s)" )
    }
}

function totalTime(){
    let inputOvenTimeTotal = Number(document.getElementsByTagName('input')[2].value)

    let inputLayerNumberTotal = Number(document.getElementsByTagName('input')[3].value)

    timeTotal= (inputLayerNumberTotal * 2) + inputOvenTimeTotal
    
    if (inputOvenTimeTotal != 0 && inputLayerNumberTotal != 0){
        if(inputOvenTimeTotal > 30) {
            alert("O tempo de forno já excedeu retire a sua lasanha do forno!")
            alert("Você trabalhou " + timeTotal + " minutos")
        }
        else{
            alert("Você trabalhou " + timeTotal + " minutos")
        }
    } 
}


/*
Preciso pegar o que a pessoa digitou no input como um argumento de preferência, tratar de acordo com o que o card pede, retorna o resultado final e assim que a pessoa clicar no botão esse valor vai para o alert junto com alguma mensagem.

 Vai ser três functions diferentes, para cada function ele vai receber a mesma estrutura, parâmetros que receberam como argumento o valor que o usuário inseriu (ver como funciona o fluxo dos parâmetros no word que eu escrevi, se eu consegui usar variáveis, ai eu coloco nas variáveis o value do que a pessoa digitou), vai tratar esse argumento de acordo com o que o card pede, e no fim eu coloco um return resultado sendo que tem que ser nomes diferentes para cada card.

 Criar mais 3 funções que terão um evento de click no botão, que dependendo do card vai retornar um alert, só que esse alerts terão que está dentro de um if e else pois dependendo da condição vai aparecer uma mensagem ou outra.
*/