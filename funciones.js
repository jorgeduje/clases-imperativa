
// LINK FUNCIONES: 

// DECLARADAS VS EXPRESADAS


//DECLARADA
function sumar ( num1, num2 ){
    // BLOQUE DE COFIGO
    console.log( num1 + num2 )

}

// EXPRESADAS / ANONIMAS

//COMUN
const saludar = function( nombre ){
    // BLOQUE DE COFIGO
    console.log(`Hola ${nombre} como estas?`)

}


// ARROW FUNCTION
const multiplicar = ()=>{
    // BLOQUE DE COFIGO
    console.log("multiplicar")

}


// EJECUTAR LA FUNCION O INVOCAR 
let nombreUsuario = "maria"
let nombreUsuario2 = "jorge"

saludar(nombreUsuario)
saludar(nombreUsuario2)


// PARAMETROS

const restar = (a, b)=>{

    console.log(a - b) 

}

restar(22, 10)

// BACKSTICKS

let nombre = prompt("ingrese su nombre")


const saludarUsuario = ( usuario )=>{

    return parseInt(usuario)

}

const saludoFinal = saludarUsuario(nombre)
console.log( typeof saludoFinal )


// RETURN 