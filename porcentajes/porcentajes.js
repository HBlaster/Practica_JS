
function CalcularDescuento (precio, descuento){
    const PorcentajeDescuento = 100 - descuento;
    const PrecioDescuento = (precio * PorcentajeDescuento)/100;

    return PrecioDescuento;

}

/*function CalcDescuento() {
    const l1 = document.getElementById("Input1"); 
    const value1 = Number(l1.value);

    const l2 = document.getElementById("Input2"); 
    const value2 = Number(l2.value);

    descuento = CalcularDescuento(value1, value2);

    const resul = document.getElementById("respuesta");
    resul.innerText = "El PRECIO CON DESCUENTO SON: $ " + descuento + " PESOS";
} */

const cupones = ["FIRST", "SECOND", "THIRD"];



function CalcDescuento() {
    const precio = document.getElementById("Input1");
    const precio1 = Number(precio.value);

    const cupon = document.getElementById("Input2");
    const cuponValue = cupon.value;

    switch (cuponValue){
        case cupones [0]:
            descuento = 50;
        break;
        case cupones [1]:
            descuento = 30;
        break;
        case cupones [2]:
            descuento = 10;
        break;
    }

    preciofinal= CalcularDescuento (precio1, descuento);

    const aplicado = document.getElementById("c");
    aplicado.innerText = "El CUPON DE DESCUENTO QUE SE APLICO ES: '" + cuponValue + "' CON " + descuento + " % DE DESCUENTO!";

    const resul = document.getElementById("respuesta");
    resul.innerText = "El PRECIO CON DESCUENTO SON: $ " + preciofinal + " PESOS";
    
}
