//Codigo del cuadrado
console.group("cuadrado");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrada(lado){
    return lado*lado;
}

console.groupEnd();



//Codigo del triangulo
console.group("Triangulo");

function alturaTriangulo (LadoA, LadoB){
    var h;
    if(LadoA != LadoB){
        console.error("Los lados A y B no son iguales");
    } else {
        h = Math.sqrt((LadoA*LadoA)-((LadoB*LadoB)/4))
        
    }

    return h;
}

function perimetrotriangulo (lado1, lado2, base){
    return (lado1 + lado2 + base);
}


function areaTriangulo(base, altura){
    return ((base*altura)/2);
}

console.groupEnd();




//Circulo
console.group("Circulo");

//Diametro
function Diametro(radio){
    return radio*2;
}

//PI
const PI = Math.PI;


//Circunferencia
function perimetroCirculo (diametro){
    return diametro * PI;
}

//Area
function AreaCirculo(radio){
    return ((radio*radio)*PI);
}
console.groupEnd();


//Calculo enlazado a html

function calcPercuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}

function calcAreacuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert (area);
}

function calcPerTri () {
    const l1 = document.getElementById("Input1"); 
    const value1 = Number(l1.value);

    const l2 = document.getElementById("Input2"); 
    const value2 = Number(l2.value);

    const b = document.getElementById("base"); 
    const valueb = Number(b.value);

    const perimetro= perimetrotriangulo (value1, value2, valueb);

    alert(perimetro);
}

function calcAreaTri () {
    const l1 = document.getElementById("Input1"); 
    const value1 = Number(l1.value);

    const l2 = document.getElementById("Input2"); 
    const value2 = Number(l2.value);

    const b = document.getElementById("base"); 
    const valueb = Number(b.value);

    const altura = alturaTriangulo (value1, value2);
    const area = areaTriangulo(valueb, altura);
    alert(area);

}







function calcDiaCirculo () {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = Diametro(value);
    alert (diametro);
}

function calcPerCirculo () {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = Diametro(value);
    const perimetro = perimetroCirculo(diametro);
    alert (perimetro);
}

function calcAreaCirculo () {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = AreaCirculo(value);

    const resul = document.getElementById("c");
    resul.innerText = area + " Metros";

    
}
//comentario para prueba


