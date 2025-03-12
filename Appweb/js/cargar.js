document.addEventListener('DOMContentLoaded', () => {

const imagenApi = document.getElementById('imagen-api');
const botonCargar = document.getElementById('cargar-imagen-btn');
const apiUrl = "https://picsum.photos/800/600";

botonCargar.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error("No se pudo cargar la imagen");
            }
            return response.url;
        })
        .then(imagenUrl => {
            imagenApi.src = imagenUrl;
            imagenApi.style.display = "block";
            
        })
        .catch(error => {
            console.error("Error: ", error);
        });

    });

});