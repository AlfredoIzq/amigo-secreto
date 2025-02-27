let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo); // Agregar el nombre al array
        actualizarLista(); // Actualizar la lista en el HTML
        input.value = ""; // Limpiar el input después de agregar el nombre
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de volver a llenarla

    amigos.forEach(nombre => {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        lista.appendChild(listItem);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado antes de mostrarlo

    if (amigos.length === 0) {
        const listItem = document.createElement("li");
        listItem.textContent = "No hay amigos para sortear.";
        resultado.appendChild(listItem);
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const listItem = document.createElement("li");
    listItem.textContent = `Amigo Secreto: ${amigoSorteado}`;
    resultado.appendChild(listItem);
}
