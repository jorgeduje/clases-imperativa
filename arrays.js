
// ANCHOR: 
    // ARRAY, ARREGLOS, LISTAS, COLECCIONES, ETC, ETC, ETC 

    let nombre = "jorge"
    let edad = 12
    let esMayor = false

    let nombreHermanos = ["pepito", "maria", "juancito"]
    let mezcla = ["hola", 12, true, false, "chau", 12]

    // POSICIONES
    let numerosDeLaSuerte = [12, 22, 35] // 0, 1, 2, 3

    console.log( nombreHermanos[2] )
    console.log( numerosDeLaSuerte )

    nombre = "otra cosa"

    numerosDeLaSuerte[1] = 32
    numerosDeLaSuerte[0] = 32
    numerosDeLaSuerte[2] = 32

    console.log(numerosDeLaSuerte)

    // METODOS DE STRING

    let frase = "hola pepito como estas?"

    let fraseEnMayuscula = frase.toUpperCase()
    console.log( fraseEnMayuscula )

    let apellido = "Perez"

    console.log( apellido.indexOf("e") ) // DEVUELVE LA PRIMER COINCIDENCIA 

    // METODOS DE ARRAYS

    let array = [12, 15, 1]

    // array[0] = 22
    // array[1] = 12

    array.push(321, "hola") // AGREGA ELEMENTOS AL FINAL
    array.unshift("primero") // AGREGA ELEMENTO AL INICIO
    
    console.log(array)
    let eliminado = array.pop()
    let eliminado2 = array.pop()
    console.log(array)

    console.log(eliminado)
    console.log(eliminado2)
    


    let palabra = "hola"
    let array2 = [ 1, 4, 2, 6, 12]

    console.log( palabra.length)
    console.log( array2.length)

    console.log( array2.indexOf(6))

    let arrPalabras = ["hola", "como", "estas", "chau"]

    console.log(arrPalabras.indexOf("como"))

   





console.log("------------------")
console.log("------------------")
console.log("------------------")

let numeros = [ 12, 43, 15, 22, 123, 54]

// numeros[0]
// numeros[1]
// numeros[2]

for(let i = 0; i < numeros.length; i++){ // LENGTH = LA LONGITUD = 3

    console.log( numeros[i] )

}


console.log("-------------")
console.log("Ejercicio 1")



/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// LISTA DE CORREOS PENDIENTES

let arrayCorreosPendientes = [
    "iroman@digitalhouse.com",
    "loki%digitalhouse.com",
    "loki@digitalhouse.com",
    "thanosdigitalhouse.com",
    "thanos@digitalhouse.com",
];

// array de correos admitidos
let arrayCorreosAdmitidos = [
   
];

// array de correos descartados

let arrayCorreosDescartados = [
    
];

const verificadorDeCorreos = ( arreglo ) =>{

    for(let i = 0; i <  arreglo.length; i++){

       if( arreglo[i].includes("@") ){

        arrayCorreosAdmitidos.push( arreglo[i] )

       }else{

        arrayCorreosDescartados.push( arreglo[i] )

       }

    }

}

verificadorDeCorreos(arrayCorreosPendientes)
arrayCorreosPendientes = []

console.log("PENDIENTES", arrayCorreosPendientes)
console.log("ADMITIDOS",arrayCorreosAdmitidos)
console.log("DESCARTADOS",arrayCorreosDescartados)


