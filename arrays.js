
// ANCHOR: 
    // ARRAY, ARREGLOS, LISTAS, COLECCIONES, ETC, ETC, ETC 


    let nombre = "jorge"
    let edad = 29
    let esMayorDeEdad = false

    // array

    let numerosDeLaSuerte = [12, 34, 134, 52, 29, 32] // ARREGLOS

    let nombresMascotas = ["jack", "lole", "rojo"] // posiciones empiezan en 0
   
    console.log( nombresMascotas[1] )
    console.log( nombresMascotas[0] )

    console.log( nombre[0] )


    let nombreModificado = nombre.toUpperCase()

    console.log( nombreModificado )

    edad = 121

    nombresMascotas[1] = "lola"

    console.log( nombresMascotas[3] )



    console.log("hola genteeee")


    nombresMascotas[3] = "firulais"
    nombresMascotas[4] = "manuelita"


    nombresMascotas.push("coco")
    nombresMascotas.push("hector", "morenita", 12, true, false, 21)

    console.log(nombresMascotas)

    nombresMascotas.pop()
    nombresMascotas.pop()
    nombresMascotas.pop()
    nombresMascotas.pop()
    nombresMascotas.pop()
    nombresMascotas.pop()


    console.log(nombresMascotas)


   let eliminado = nombresMascotas.pop()
   

   console.log(nombresMascotas)

   console.log(eliminado)


    let numeros2 = [ 1, 2, 3]

    let inverso = [] // [ 3, 2, 1]

    inverso.push( numeros2.pop() )
    inverso.push( numeros2.pop() )
    inverso.push( numeros2.pop() )

    console.log(inverso)


    // FOR Y LOS ARRAYS

    let numerosAleatorios = [5, 12, 3, 6, 11]

    // console.log( numerosAleatorios[0] )
    // console.log( numerosAleatorios[1] )
    // console.log( numerosAleatorios[2] )
    // console.log( numerosAleatorios[3] )
    // console.log( numerosAleatorios[4] )


    numerosAleatorios.push(36)
    numerosAleatorios.push(136)
    numerosAleatorios.push(326)

    // ITERAR 
    for(let i = 0 ; i < numerosAleatorios.length ; i++){

        console.log( numerosAleatorios[i] )

    }













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

console.log("------------------------")
console.log("------------------------")
console.log("------------------------")

// LISTA DE CORREOS PENDIENTES

let nombreee = "mari@m"

console.log( nombreee.includes("@") ) // booleano
console.log( nombreee.indexOf("@") !== -1 ) // un (-1)

console.log("--------------------")
console.log("--------------------")
console.log("--------------------")

// PARA SER VALIDO DEBE CONTENER UN @
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

const verificador = ( arr )=>{


    for(let i = 0; i < arr.length; i++){

        if( arr[i].includes("@") ){
            arrayCorreosAdmitidos.push( arr[i] )
        }else{
            arrayCorreosDescartados.push( arr[i] )
        }
    }


}

verificador(arrayCorreosPendientes)

arrayCorreosPendientes = []

console.log( "ADMITIDOSSSSS", arrayCorreosAdmitidos)
console.log( "DESCARTADOS", arrayCorreosDescartados)
console.log("PENDIENTES", arrayCorreosPendientes)


