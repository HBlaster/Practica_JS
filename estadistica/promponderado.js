const notes = [
  {
      curso: "educacion fisica",
      nota: 10,
      creditos: 3
  },
  {
    curso: "Español",
    nota: 8,
    creditos: 5
  },
  {
    curso: "matematicas",
    nota: 10,
    creditos: 5,
  }

];

//la formula para calcular el promedio ponderado es la siguiente: 

/*
    ((n1*c1) + (n2*c2) + (n3* c3))/(c1+c2+c3)
*/

//se multiplica la nota por los creditos de la misma
const notasConCredito = notes.map(
    function(noteObject){
        return noteObject.nota * noteObject.creditos;
    }
);

//Metodo reduce se usa para recorrer el arreglo 
//se suman los valores obtenidos de la multiplicacion de la nota y los creditos
const sumaNotasConCreditos = notasConCredito.reduce(
    function (sum = 0, newVal){
        return sum+newVal;
    }
);

//se crea un nuevo arreglo en el cual guardamos unicamente los creditos 
//para posteriormente sumar sus elementos

const creditos = notes.map (
    function (noteObject){
        return noteObject.creditos;
    }
);

const sumaCreditos = creditos.reduce(
    function (sum=0, newVal1){
        return sum + newVal1;
    }
);
//Se divide el resultado de las notas multiplicadas por los creditos entre la suma de los creditos
const resultado = sumaNotasConCreditos/sumaCreditos;
console.log(resultado);
