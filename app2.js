function holaMundo() {
    console.log("Hola Mundo!");
}

function nombre(nombre) {
    console.log(`¡Hola ${nombre}!`)
}

function doble(numero) {
    return numero * 2;
}

function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function mayor(num1, num2) {
    if (num1 > num2) console.log(`${num1} es el mayor`);
    else if (num2 > num1) console.log(`${num2} es el mayor`);
    else console.log("Ambos números son iguales");
}

function potencia2(num1) {
    return num1 * num1;
}

// Desafío 2

function imc() {
    let estatura = parseFloat(prompt('Ingresa tu estatura: '));
    let peso = parseFloat(prompt('Ingresa tu peso: '));

    let imcCalculado = peso / (estatura * estatura);
    return imcCalculado;
}

function factorial(){
    let numero = parseInt(prompt('Ingresa un número:'));
    let numerof = numero-1;
    let resultado = numero; //5

    while (numerof>0){
        resultado = resultado * numerof;
        numerof--;
        console.log(resultado);
    }
    console.log(`El factorial de ${numero} = ${resultado}`)
}

function factorial2(){
    let numero = parseInt(prompt('Ingresa un número:'));
    let resultado=numero;

    for (i=1; i<numero; i++){
        resultado=resultado*(numero-i);
        console.log(resultado);
    }
    console.log(`El factorial de ${numero} = ${resultado}`)
} 

function tablaMultiplicar(numero){
    let resultado = 1;
    for(i=0; i<=numero; i++){
        resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}


function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

