//Reduce
// toma un array y lo reduce a un solo valor
const totals = [1,2,3,4];
const rta = totals.reduce((sum, element)=> sum + element, 0);
console.log('rta: ', rta ); 