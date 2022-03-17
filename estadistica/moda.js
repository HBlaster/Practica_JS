const lista1 =[1,2,3,4,2,2,2,3,5,9,1,1,1,2] ;

function calcularmoda (lista){
    const lista1count = {};

    lista.map(
        function (elemento){
            if(lista1count[elemento]){
                lista1count[elemento] +=1;

            }else{
                lista1count[elemento] =1;
            }
        }
    );

    const lista1Array = Object.entries(lista1count).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]; 
        }
    );

    const moda = lista1Array[lista1Array.length -1]; //entrar a la ultima posicion del array

    console.log(moda);
}

