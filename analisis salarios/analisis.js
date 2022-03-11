// Los datos que se necesitan para el analisis son unicamente los salarios de cada persona
// entonces, se va a hacer un nuevo arreglo que solo guarde los salarios sin el nombre de cada persona

const SalariosMx = mexico.map(
    function (persona){
        return persona.salary;
    }
);

//Para hacer un calculo correcto de la mediana se ordena el arreglo de menor a mayor

const SalarioOrdenado = SalariosMx.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// Se necesita saber si la cantidad de datos es par o inpar
function esPar (numero){
    return (numero % 2 == 0 );
}

function MediaAritmetica(lista){
  
    const sumalista = lista.reduce (
        function (ValorAcumulado = 0, nuevoEelemento){
            return ValorAcumulado + nuevoEelemento;
        }
    );
    
    
    let promedio = (sumalista)/lista.length;
    
    return promedio;
    
}

//se hace el calculo de la mediana en funcion de si es par o inpar el numero de datos

function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2);
    
    if(esPar(lista.length)){
        const personaMitad = lista[mitad - 1];
        const personaMitad1 = lista[mitad];
        const mediana = MediaAritmetica([personaMitad, personaMitad1]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

console.log(medianaSalarios(SalarioOrdenado));
