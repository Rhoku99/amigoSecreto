let amigos = [];
let sorteado = false;

function validarNombre(nombre) {
    
    if (nombre === "") {
        return "Por favor, ingresa un nombre válido.";
    }
    
    
    const regex = /^[A-Za-z\s]+$/;  
    if (!regex.test(nombre)) {
        return "El nombre solo debe contener letras y espacios.";
    }
    
        if (nombre.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    }
    
    if (amigos.includes(nombre)) {
        return "Este nombre ya ha sido agregado. Por favor, ingresa uno diferente.";
    }
        return null;

    
}

function agregarAmigo() {
       
    if (sorteado) {  
        alert("Para agregar un nuevo amigo, debes realizar un nuevo sorteo.");
        return;
    }
    
    let nombre = document.getElementById('amigo').value.trim();

        let error = validarNombre(nombre);
        if (error) {
            alert(error);
            return;
        }

        amigos.push(nombre);

       mostrarLista();

        document.getElementById('amigo').value = "";
}

function mostrarLista() {
    let listaHTML = "";

        for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`;
    }

        document.getElementById('listaAmigos').innerHTML = listaHTML;
}

function sortearAmigo() {
        if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let amigoSeleccionado = amigos[indiceAleatorio];

        document.getElementById('resultado').innerText = `¡El amigo secreto es: ${amigoSeleccionado}!`;

        sorteado = true;

       }
