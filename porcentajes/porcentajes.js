
function CalcularDescuento (precio, descuento){
    const PorcentajeDescuento = 100 - descuento;
    const PrecioDescuento = (precio * PorcentajeDescuento)/100;

    return PrecioDescuento;

}

function CalcDescuento() {
    const l1 = document.getElementById("Input1"); 
    const value1 = Number(l1.value);

    const l2 = document.getElementById("Input2"); 
    const value2 = Number(l2.value);

    descuento = CalcularDescuento(value1, value2);

    alert ("El precio es de: $ " + descuento);
}