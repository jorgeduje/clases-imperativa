

// ESTRUCTURAS DE CONTROL

// ELSE IF / TERNARIO / SWITCH 


const probandoIf = ( numero ) =>{

    if( numero >= 50 ){
        // BLOQUE
        return "el numero es mayor que 50"
    }else if( numero > 30){
        // BLOQUE 
        return "el numero es mayor que 30 pero menor que 50"
    }else{
        //BLOQUE
        return "el numero no es mayor que 50 ni mayor que 30"
    }


}

let resultadoIf = probandoIf(2)
console.log( resultadoIf )



// TERNARIO

// CONDICION / LO VERDADERO / LO FALSO

let clima = "lluvioso"

let mamaSalgoConParaguas = clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta"

console.log(mamaSalgoConParaguas)


const probarTernario = ( str ) =>{

    return str === "hola" ? "se cumplio el ternario" : "no se cumplio el ternario"


}

console.log( probarTernario("dasdasdasdas") )



// SWITCH


const obtenerSonido = (animal)=>{

    switch( animal ){

        case "perro":
            return "guauu guauu"
        case "loro":
            return "repiten todooo"
        case "jirafa":
            return "jirafaaaaaaaa"
        case "gato":
            return "miauuuu"
        default:
            return "Lo siento, no conozco el sonido de ese animal"

    }


}

let sonido = obtenerSonido("jirafa")
console.log( sonido )


const probandoSwitch = ( auto ) => {

    let precio = 100

    switch (auto) {

        case "ford":
            precio += 500
            break
        case "fiat":
            precio += 400 // 500
            break
        case "vw": 
            precio += 1000 // 1500
            break
        default:
            precio += 100 // 1600
        
    }

    return precio


}

console.log( probandoSwitch("fiat"))



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
