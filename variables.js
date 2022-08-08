
//ANCHOR Llego el dia... Bienvenid@s a Javascript 💪 😃 🎉

// VARIABLES = UNA CAJITA QUE GUARDA ALGO / ESPACIO EN MEMORIA

// DECLARAR UNA VARIABLE 
    // LET / LES PUEDO RE-ASIGNAR EL VALOR
    // CONST / NO LES PUEDO RE-ASIGNAR EL VALOR

// LA PALABRA RESERVADA
// UN NOMBRE A LA VARIABLE
// EL SIGNO = 
// EL VALOR DE LA VARIABLE

let edad = 29
    edad = 30
    
const APELLIDO = "Duje"
    //   APELLIDO = "Perez"
      
console.log( edad )
console.log( APELLIDO )

// TIPOS DE DATOS

// NUMBER = 14
let numero = 14.51

// STRINGS
let frase = "Hola como estas?"
    frase = 'Muy bien, gracias!'

// BOOLEANOS
let mayorDeEdad = true
    mayorDeEdad = false

let mascota = undefined
    mascota = "Jack"

let casa = null

let nan = NaN // NOT A NUMBER

// OPERADORES MATEMATICOS
// + - * / %

console.log( ( 11 % 2 ) === 0 )

// OPERADORES DE COMPARACION / SIMPLES O ESTRICTOS

let num1 = "21"
let num2 = 21

console.log( num1 === num2 )
console.log( num1 >= num2 )
console.log( num1 !== num2 )

// OPERADORES LOGICOS
    // AND &&
    // OR ||

// PERMITIR AL USUARIO QUE SE LOGEE UNICAMENTE SI ES MAYOR DE 20 Y MENOR DE 40

let edadUsuario = 22

let sePuedeLogear = true && true && false && true // IGUAL A TRUE - IGUAL FALSE

// PERMITIR AL USUARIO LOGEARSE SI LLAMA PEPE O JUAN O MARIA
let nombreUsuario = "algo"

let sePuedeLogear2 = (nombreUsuario === "pepe" || nombreUsuario === "juan")  && edadUsuario > 18

console.log(sePuedeLogear2)











