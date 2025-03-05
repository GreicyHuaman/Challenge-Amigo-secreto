
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    if (!lista) {
        console.error("Por favor, inserte un nombre.");
        return;
    }
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const lis = document.createElement('lis');
        lis.textContent = amigo;
        lista.appendChild(lis);
    });
}

function agregarAmigo(){
    const input = document.getElementById('amigo');
    if (!input) {
        console.error('"amigo" no encontrado.');
        return;
    }
    const nombreAmigo = input.value.trim();
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        atualizarLista();
        input.value = '';
    } else {
        alert('Por favor, ingresa un nombre valido.');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos esta vacia.');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`El amigo secreto  sorteado es: ${amigoSorteado}`);
}
