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
    let listaMovil = document.getElementById("listaContactosMovil");

    tabla.innerHTML = "";
    listaMovil.innerHTML = "";
    listaContactos.forEach((contacto, index) => {
        let fila = `<tr>
            <td>${contacto.nombre}</td>
            <td>${contacto.primerApellido}</td>
            <td>${contacto.segundoApellido}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.tipoTelefono}</td>
            <td>${contacto.fechaNacimiento}</td>
            <td><button class="btn btn-danger" onclick="eliminarContacto(${index})">Eliminar</button></td>
        </tr>`;
        tabla.innerHTML += fila;
    
        let itemMovil = `<li class="list-group-item">
        <strong>Nombre:</strong> ${contacto.nombre} ${contacto.primerApellido} ${contacto.segundoApellido}<br>
        <strong>Telefono:</strong> ${contacto.telefono} (${contacto.tipoTelefono})<br>
        <strong>Nacimiento:</strong> ${contacto.fechaNacimiento}<br>
        <button class="btn btn-danger" onclick="eliminarContacto(${index})">Eliminar</button>
        </li>`
        ;

        listaMovil.innerHTML += itemMovil;

    
    });
}

function eliminarContacto(indice) {
    listaContactos.splice(indice, 1);
    actualizarTabla();
}