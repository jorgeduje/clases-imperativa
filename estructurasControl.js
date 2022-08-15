

// ESTRUCTURAS DE CONTROL

// IF ELSE

// 50 es mayor
// con 30 o mas es menor
// con menos de 30 es muy menor


let edadUsuario = 30

const determinarEdad = (edad) => {
    if( edad >= 50 ){
        // BLOQUE DE CODIGO
        return "Disculpe usted es mayor"
    }else if(edad >= 30){
        //BLOQUE DE CODIGO
        return "es menor"
    }else{
        // BLOQUE DE CODIGO
        return "es muy menor"
    }
}
// const determinarEdad = (edad) => {
    
//     return edad >= 50 ? "Es mayor" : "No es mayor"

// }

let resultadoEdad = determinarEdad(edadUsuario)
console.log(resultadoEdad)

// TERNARIO

let clima = "lluvioso"

let mamaSalgoConParaguas = clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta"

console.log(mamaSalgoConParaguas)


// SWITCH

const obtenerSonido = ( animal ) => {

    
    switch( animal ){

        case "perro":
            console.log("guauu")
            break
        case "gato":
            console.log("miauu")
            break
        case "loro":
            console.log("lorooo")
            break
        default:
            console.log("no conozco el sonido") ;
        
    }

}

let resultadoAnimal = obtenerSonido("gato")
// console.log(resultadoAnimal)


/*

¿Puede subir?

 En un parque de diversiones nos piden un programa para verificar si los pasajeros de
 la montaña rusa pueden subir al juego.
 Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y 
 si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si
 la persona puede subirse o no, basado en las siguientes condiciones:
 Debe medir más o igual de 1,40m y menos de 2 metros.
 Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
 Si mide menos de 1,20m, no podrá subir ni acompañado.

*/


const puedeSubir = ( altura, vieneAcompañado )=>{

    if( altura >= 1.40 && altura < 2 ){

        return "Puede subir" // ( TRUE )

    }else if( altura < 1.40 && altura >= 1.20 && vieneAcompañado){
        return "Puede, solo si esta acompañado"
    }else{
        return "no puede subir"
    }

}

let resultadoSubir = puedeSubir(1.19 , true) 

console.log( resultadoSubir )




