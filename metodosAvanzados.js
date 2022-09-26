

let numeros = [ 1, 5, 2, 12, 3] // 0 5 4 36 12

let indice = numeros.indexOf(12) // number 

// numeros.push("hola") // string

// numeros.metodos( function(){} )
// numeros.metodos( ()=>{} )
// CALLBACKS


// A PARTIR DEL ARREGLO NUMEROS NECESITO CREAR UN NUEVO
// ARREGLO CON TOD0S LOS ELEMENTOS DE MI ARREGLO ORGINAL
// PERO SUS NEGATIVOS

const creadorArr = arr =>{

    let nuevoArr = []

    for (let i = 0; i < arr.length; i++) {
        
        nuevoArr.push( arr[i] * (-1) )

    }

    return nuevoArr

}

let arrNegativos = creadorArr(numeros)

console.log( arrNegativos )

// MAP
// LO RECORRE AL ORIGINAL
// RETORNAR UN NUEVO ARREGLO DE LA MISMA LONGITUD QUE EL ORIGINAL
// EN CADA VUELTA DE ACCEDER AL ELEMETO QUE SE ESTA ITERANDO

let arrNegativosMap = numeros.map( (elemento, indice) => elemento * indice )

console.log(arrNegativosMap)