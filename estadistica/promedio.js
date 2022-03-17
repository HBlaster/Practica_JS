const lista1 = [
    100,
    200,
    300,
    500
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