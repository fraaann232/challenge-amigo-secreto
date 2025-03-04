// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (/^\d+$/.test(nombre)) {
        alert("El nombre no puede contener solo números. Por favor, ingrese un nombre válido.");
        return;
    }

    
    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ""; 
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}