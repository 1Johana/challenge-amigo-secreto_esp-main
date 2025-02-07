// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let amigoGanador;

function agregarTexto(idElemento, texto) {
    let idElementoHTML = document.getElementById(idElemento, texto);
    idElementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    //Verificar que los nombres no se repitan en la lista
    if (listaDeAmigos.includes(nombre)) {
        alert('El nombre ya existe');

        //Verificar que  la caja de texto no esté vacía
    } else if (nombre === '') {
        alert('"Por favor, inserte un nombre."');
    } else {
        let nombre = document.getElementById('amigo').value;
        listaDeAmigos.push(nombre);
    }
    limpiarInput();
    //console.log(nombre);
    mostrarNombres();
}

function sortearAmigo() {
    //Verifica si hay elementos en el arreglo 
    if (listaDeAmigos.length === 0) {
        agregarTexto('listaAmigos', "No hay ningún nombre");
        return;
    } 
    let indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    amigoGanador = listaDeAmigos[indiceGanador];
    console.log(indiceGanador);
    agregarTexto('resultado', `El ganador del sorteo es: ${amigoGanador}`);
    //juegoInicial();
}

//Condiciones iniciales
function juegoInicial() {
    listaDeAmigos = [];
    agregarTexto('resultado', '');
    mostrarNombres();
}

function mostrarNombres() {
    const ul = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos nombres
    ul.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        //Crear el elemento "li"
        const li = document.createElement("li");
        //Agregar texto a "li"
        li.textContent = listaDeAmigos[i]; 
        // Agrega el "li" al "ul"
        ul.appendChild(li); 
    }
}

//limpiar la caja de texto
function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Reinicia el sorteo
function nuevoSorteo() {
    juegoInicial();
}
