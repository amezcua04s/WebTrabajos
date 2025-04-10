
function inicio(){

    let URL= window.location.href;

    if(URL){

        URL = URL.split("/").slice(0, -1).join("/") + "/index.html";
        window.open(URL, "_self");

    }
    
}


let listaComentarios = [];

function agregarComentario() {
    let comentario = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        comentario: document.getElementById("comentario").value,
    };
    
    listaComentarios.push(comentario);
    actualizarTabla();
    document.getElementById("comentarioForm").reset();
}

function actualizarTabla() {
    let tabla = document.getElementById("tablaComentarios");
    let listaMovil = document.getElementById("listaComentariosMovil");

    tabla.innerHTML = "";
    listaMovil.innerHTML = "";
    listaComentarios.forEach((comentario) => {
        let fila = `<tr>
            <td>${comentario.nombre}</td>
            <td>${comentario.apellido}</td>
            <td>${comentario.comentario}</td>
        </tr>`;
        tabla.innerHTML += fila;
    
        let itemMovil = `<li class="list-group-item">
        <strong>Nombre:</strong> ${comentario.nombre}<br>
        <strong>Comentario:</strong> ${comentario.comentario}<br>
        </li>`
        ;

        listaMovil.innerHTML += itemMovil;

    
    });
}

