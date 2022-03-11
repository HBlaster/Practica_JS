
function MediaAritmetica(lista){

    //Se realiza la suma de los numeros dentro del array,
    //se realiza por medio de un ciclo for o del metodo reduce
    //para ir recorriendo el arreglo

    /*let sumalista = 0;
    for (let i =0; i < lista.length; i++){
        sumalista = sumalista + lista[i];
    } 
    */
    
    const sumalista = lista.reduce (
        function (ValorAcumulado = 0, nuevoEelemento){
            return ValorAcumulado + nuevoEelemento;
        }
    );
    
    
    let promedio = (sumalista)/lista.length;
    
    return promedio;
    
}
//Se ordena el arreglo de mayor amenor con la funcion .sort
function ordenarArray(listadesordenada){
    let array_ordenado = listadesordenada.sort();
    return array_ordenado;

}

function calcularmediana (lista){

    let Ordenado = ordenarArray(lista);
    const mitadLista1 = parseInt(Ordenado.length / 2);


    function esPar(numerito) {
    if (numerito % 2 ===0 ){
        return true;
    }
    else{
        return false;
    }
    }

    let mediana ; 

    if ( esPar(Ordenado.length) ){

        const elemento1 = Ordenado[mitadLista1 - 1];
        const elemento2 = Ordenado[mitadLista1 ];

        const promedio = MediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
        


    } else {
        mediana = Ordenado[mitadLista1];
        
    } 
    return mediana;
}