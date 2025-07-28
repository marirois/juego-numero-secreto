let listaGenerica = [];
let lenguajesProgramacion = ['JS', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLista() {
    for (i = 0; i < lenguajesProgramacion.length; i++) {
        console.log(lenguajesProgramacion[i]);

    }
}

function mostrarListaInv() {
    for (i = lenguajesProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesProgramacion[i]);
    }
}

// mostrarLista();
// mostrarListaInv();

//-------------------------------------------------
let listaNumeros = [3, 7, 5, 2, 1, 8];
let listaNumeros2 = [3, 7, 5, 2, 1, 8];

function promedio() {
    let suma = 0;
    let promedio = 1;

    for (i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i];
        promedio = suma / listaNumeros.length;
        console.log(suma)
    }
    console.log(`promedio = ${suma} / ${listaNumeros.length} = ${promedio}`);
}

// 6
//promedio();

//--------------------------------

function numMayorMenor() {
    let mayor = 0;
    let menor = 0;

    for (i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }
    }

    for (i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < mayor) {
            menor = listaNumeros[i];
        }
    }
    console.log(`El numero mayor es ${mayor}`);
    console.log(`El numero menor es ${menor}`);
}
numMayorMenor();

function posicion(elemento) {
    let posicionElemento = undefined;

    for (i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] == elemento) {
            posicionElemento = i;
            console.log(`La posición de ${elemento} es ${posicionElemento}`);
        }
    }
    if (posicionElemento == undefined) {
        console.log('El elemento no existe');
    }
}
posicion(9);

function sumaLista(lista1, lista2) {
    let suma = 0;
    let listaSuma = [];
    if (lista1.length == lista2.length) {
        for (i = 0; i < lista1.length; i++) {
            suma = lista1[i] + lista2[i];
            listaSuma.push(suma);
        }
    } else console.log('Las listas son de diferente tamaño');
    console.log(listaSuma);
}
sumaLista(listaNumeros, listaNumeros2);

function potenciaLista(lista) {
    let potencia = undefined;
    let listaPotencia = [];
    for (i = 0; i < lista.length; i++) {
        potencia = lista[i] * lista[i];
        listaPotencia.push(potencia);
    }
    console.log(listaPotencia);
}

potenciaLista(listaNumeros);
