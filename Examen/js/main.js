function mostrar() {

    let contacto ={
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    }

    console.log(JSON.stringify(contacto));


}