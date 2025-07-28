let intervaloMaximo = 10;
let numeroSecreto = 0;
let intentosRealizados = 1;
let maxIntentos = 15;
let listaNumerosSorteados = [];



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    if (intentosRealizados === maxIntentos) {
        asignarTextoElemento('p', "Has superado el máximo de aciertos");
        reiniciarJuego();
        alert('Has alcanzado el número máximo de intentos');

    } else {

        let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

        if (numeroUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste! Te tomó ${intentosRealizados} ${(intentosRealizados === 1) ? 'intento' : 'intentos'}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', "El número secreto es mayor");
            intentosRealizados++;
        } else if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', "El número secreto es menor");
            intentosRealizados++;
        }
    }
    //console.log(`IR: ${intentosRealizados}`);

    limpiarCaja();
    return intentosRealizados;
}

function numeroAleatorio(max) {
    let ns = Math.floor(Math.random() * max) + 1;
    return ns;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * intervaloMaximo) + 1;

    if (listaNumerosSorteados.length == intervaloMaximo) {
        listaNumerosSorteados = [];
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {        
        //Comprobación si ya se ha generado ese número
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            console.log(`ng: ${numeroGenerado}`);
            console.log(listaNumerosSorteados);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del Número Secreto");
    asignarTextoElemento('p', "Indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentosRealizados = 1;

    //console.log(`NS: ${numeroSecreto}`);
    //console.log(`ir: ${intentosRealizados}`);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();

    document.getElementById('reiniciar').setAttribute('disabled', true);

    //console.log(`IR: ${intentosRealizados}`);

}

condicionesIniciales();

