const lista1 = [
    100,
    200,
    300,
    500000000,
    5

];

const mitadLista1 = parseInt(lista1.length / 2);


function esPar(numerito) {
    if (numerito % 2 ===0 ){
        return true;
    }
    else{
        return false;
    }
}

let mediana = lista1[mitadLista1]; 

 if ( esPar(lista1.length) ){

    console.log("Es par");
} else {
    mediana = lista1[mitadLista1];
    console.log(mediana);
} 