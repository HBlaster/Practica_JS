// filter:
// 	filtra elementos de un array con base a una condicion.
// 	filter es inmutable por lo que no cambia los elementos del array, crea uno nuevo

const words = ['papas', 'hamburgeusas', 'hot dog', 'refresco'];

const filtro = words.filter(item => item.length >=6);
console.log('words: ', words);
console.log('filter; ', filtro); 

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

const search = (query)=>{
    return orders.filter(item =>{ 
        return item.customerName.includes(query);
    });
} 

console.log(search('Vale'));