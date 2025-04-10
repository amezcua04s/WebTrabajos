let listaCitas = [];

function agregarCita() {
    let cita = {

        nombrePaciente: document.getElementById("nombrePaciente").value,
        fechaCita: document.getElementById("fechaCita").value,
        hora: document.getElementById("hora").value,
        razon: document.getElementById("razon").value

    };

    listaCitas.push(cita);
    actualizarCalendario();
    document.getElementById("citaForm").reset();

}


function actualizarCalendario() {
    let tabla = document.getElementById("listaCitas");
    tabla.innerHTML = "";
    listaCitas.forEach((cita, index) => {
        let fila = `<tr>
            <td>${cita.nombrePaciente}</td>
            <td>${cita.fechaCita}</td>
            <td>${cita.hora}</td>
            <td>${cita.razon}</td>
            <td>
                <button onclick="editarCita(${index})">Editar</button>
                <button onclick="eliminarCita(${index})">Eliminar</button>
            </td>
        </tr>`;
        tabla.innerHTML += fila;
    });

}

function editarCita(indice) {
    let cita = listaCitas[indice];
    document.getElementById("nombrePaciente").value = cita.nombrePaciente;
    document.getElementById("fechaCita").value = cita.fechaCita;
    document.getElementById("hora").value = cita.hora;
    document.getElementById("razon").value = cita.razon;
    listaCitas.splice(indice, 1);
    actualizarCalendario();
}

function eliminarCita(indice) {
    listaCitas.splice(indice, 1);
    actualizarCalendario();
}






