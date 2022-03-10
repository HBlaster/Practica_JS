
var datos;
window.onload = function(){
 datos =[];
}

function agregar(){
    

    let dato = document.getElementById("Input1");
    let value = Number(dato.value);
    datos.push(value);
}

function mostrar(){ 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML='';

    for(const dato of datos){
        let datoParrafo = document.createElement('p');
        datoParrafo.innerText = dato;

        resultado.appendChild(datoParrafo);
    }

}