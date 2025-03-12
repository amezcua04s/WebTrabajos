let listaContactos = [];

function agregarContacto() {
    let contacto = {
        nombre: document.getElementById("nombre").value,
        primerApellido: document.getElementById("primerApellido").value,
        segundoApellido: document.getElementById("segundoApellido").value,
        telefono: document.getElementById("telefono").value,
        tipoTelefono: document.getElementById("tipoTelefono").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value
    };
    
    listaContactos.push(contacto);
    actualizarTabla();
    document.getElementById("contactoForm").reset();
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaContactos");
    tabla.innerHTML = "";
    listaContactos.forEach((contacto, index) => {
        let fila = `<tr>
            <td>${contacto.nombre}</td>
            <td>${contacto.primerApellido}</td>
            <td>${contacto.segundoApellido}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.tipoTelefono}</td>
            <td>${contacto.fechaNacimiento}</td>
            <td><button onclick="eliminarContacto(${index})">Eliminar</button></td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}

function eliminarContacto(indice) {
    listaContactos.splice(indice, 1);
    actualizarTabla();
}