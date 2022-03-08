var precioOriginal = 100;
const descuento = 15;
const PrecioConDescuento = 100 - descuento;

const calculo = ((precioOriginal * PrecioConDescuento)/100); 

console.log("El precio original es " + precioOriginal);
console.log("El descuento es de: " + descuento + "%");
console.log("El precio con descuento es " + calculo);
