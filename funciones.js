
// ANCHOR FUNCIONES: 

// LINK DECLARADAS VS EXPRESADAS

// DECLARADAS ( TIENEN NOMBRE )

// CREAR
function sumar ( num1, num2, num3 ){
    // BLOQUE DE CODIGO

    return num1 - num2 
    
}

// EJECUTAR / INVOCAR / MANDAR A LLAMAR

let resultado = sumar(3, 4, 12)

console.log( resultado )


// EXPRESADA ( COMUNES O LAS DE TIPO FLECHA ) (ANONIMAS)

// EXPRESADA COMUN
const restar = function(){
    // BLOQUE DE CODIGO

    console.log("Estoy restando")

}

// restar()


// EXPRESADA DE TIPO FLECHA O ARROW FUNCTION

const multiplicar = () => {
    // BLOQUE DE CODIGO

    return "hola como estas"

}

let resultado2 = multiplicar()


const saludar = ( nombreUsuario ) => {

    return "Hola " + nombreUsuario

}

let saludoFinal = saludar("pepito")