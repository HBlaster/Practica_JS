//Por medio del arreglo reduce se puede hacer un histograma con los elementos de un objeto
// Ejemplo 1:
/***********/
// const items = [1, 3, 2, 3];

// const rta = items.reduce((obj, item) => {

//     if (!obj[item]) {
//         obj[item] = 1;
//     } else {
//         obj[item] = obj[item] + 1;
//     }
//     return obj;

// }, {});

// console.log(rta); 

//ejemplo 2:
/***********/
const data = [
    {
        name:"Nicolas",
        level:"low"
    },
    {
        name:"Alfredo",
        level: "medium"
    },
    {
        name:"Karla",
        level:"hight"
    },
    {
        name:"Martha",
        level: "medium"
    }
];

// Map crea un nuevo arreglo con el valor especificado
const ans= data
.map(item => item.level)
.reduce((obj, item) => {

        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] = obj[item] + 1;
        }
        return obj;
    
    }, {});;

console.log(ans);