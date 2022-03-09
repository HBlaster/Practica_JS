const lista1 = [
    100,
    200,
    300,
    500,

];

function MediaAritmetica(lista){
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


function calcularmediana (lista){
    const mitadLista1 = parseInt(lista.length / 2);


    function esPar(numerito) {
    if (numerito % 2 ===0 ){
        return true;
    }
    else{
        return false;
    }
    }

    let mediana ; 

    if ( esPar(lista.length) ){

        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1 ];

        const promedio = MediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
        console.log(mediana);


    } else {
        mediana = lista[mitadLista1];
        console.log(mediana);
    } 
}