function blog(){

    let URL = window.location.href;

    if(URL){

        URL = URL.split("/").slice(0, -1).join("/") + "/blog.html";
        window.open(URL, "_self");

    } 
    
}

document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.getElementById('cards');
    const cards = 9;
  
    for (let i = 0; i < cards; i++) {
      const cardHTML = `
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-img-container"> 
              <img src="/img/1.jpg" class="img-fluid" alt="arreglo numemrpo ${i + 1}">
            </div>
            <div class="card-body">
              <h5 class="card-title">$${500 + (i * 100)}</h5>
              <p class="card-text">Arreglo flores rosas especial para regalos. Contiene ${12 + i} piezas.</p>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += cardHTML;
    }
  });