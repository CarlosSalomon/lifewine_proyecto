let tinto = 0;
let blanco = 0;
let precio1 = 250;
let precio2 = 180;
let descuento = 150;
let iva = 1.21;
let edad = 0;

function compra(num1, p1, num2, p2) {
    let subtotal1 = tinto * precio1;
    let subtotal2 = blanco * precio2;
    let sumaTotal = (subtotal1 + subtotal2 * iva - descuento);
    alert(`el total de tu compra es $${sumaTotal.toFixed(2)}`)
}


alert(`Bienvenido/a a Nuestra tienda Online de Vinos Lifewine`);

let nombre = prompt("ingrese su nombre por favor").toLowerCase();

if (nombre != "") {
    alert(`Hola ${nombre}, gracias por visitarnos!!!`);
}
else {
    alert("el nombre es requerido");
    nombre = prompt('Introducir su Nombre:');
}

edad = parseInt(prompt('Verificaremos tu edad, cuantos años tienes?'));

if (edad < 18) {
    alert(` Para continuar debe ser mayor de edad`);
    edad = parseInt(prompt(`Ingrese su Edad`));
}
else {
    alert(`Perfecto, continuemos`);
};

let respuesta = prompt(`Deseas comprar vinos? \n SI \n NO`).toLowerCase();

while (respuesta == "si") {
    tinto = parseInt(prompt(`Cuantos vinos Tintos`));
    blanco = parseInt(prompt(`Cuantos vinos Blancos`));
    let resultado = (tinto + blanco);
    alert(`Compraras ${resultado} Vinos, ${tinto} Tintos y ${blanco} Blancos`);
    compra();
    alert(`Felicitaciones por tu compra, recibiste un descuento de  $${descuento} pesos`);
    break;
}
while (respuesta === "no") {
    alert(`igualmente Gracias, te esperamos pronto!!!`);
    break;
}

alert(`Antes que te retires nos gustaria realizarte una breve encuesta para conocer tu gustos y ofrecerte todas las novedades`);

let gusto = prompt("Cual de estas variedades de Vinos te gusta mas?");

switch (gusto) {

    case "chardonay":
        alert(`Excelente eleccion, Gracias`);
        break;

    case "malbec":
        alert(`Excelente eleccion, Gracias`)
        break;

    case "mabernet sauvignon":
        alert(`Excelente eleccion, Gracias`)
        break;

    case "pinot noir":
        alert(`Excelente eleccion, Gracias`)
        break;

    case "merlot":
        alert(`Excelente eleccion, Gracias`)
        break;

    case "syrah":
        alert(`Excelente eleccion, Gracias`)
        break;

    case "carmenere":
        alert(`Excelente eleccion, Gracias`)
        break;

    default:
        alert(`Gracias estaremos atentos a nuevas incorporaciones para informarte`)
}