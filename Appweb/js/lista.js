let arreglo = [];

function actualizarLista(){

    let lista = document.getElementById("listaElementos");
    let mostrar = document.getElementById("mostrarElementos"); 

    lista.innerHTML = "";
    mostrar.innerHTML = "";

    arreglo.forEach((elemento, index) => {

        let opcion = document.createElement("option");
        opcion.value = index;
        opcion.textContent = `${index + 1} : ${elemento}`;
        lista.appendChild(opcion);
    });


    mostrar.textContent = JSON.stringify(arreglo);

}

function agregarElemento(){

    let nuevoElemento = document.getElementById("nuevoElemento").value;
    if(nuevoElemento){
        arreglo.push(nuevoElemento);
        document.getElementById("nuevoElemento").value = "";
        actualizarLista();
    }
}


function modificarElemento(){

    
    let valor = document.getElementById("nuevoValor").value;

    let indice  = parseInt(document.getElementById("valorModificar").value);

    if(!isNan(indice) && indice >= 0 && indice < arreglo.length && valor){

        arreglo[indice] = valor;
        document.getElementById("nuevoValor").value = "";
        document.getElementById("valorModificar").value = "";
        actualizarLista();

    }

}


function eliminarElemento(){
    let lista = document.getElementById("listaElementos");
    let indice = parseInt(lista.value);
    if(!isNaN(indice) && indice >= 0 && indice < arreglo.length){
        arreglo.splice(indice, 1);
        actualizarLista();
    }
}