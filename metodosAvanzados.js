

let numeros = [ 1, 5, 2, 12, 3]

// console.log( numeros.indexOf(12) ) // number

// numeros.push("hola") // string

// numeros.metodo( function )

// CALLBACK = UNA FUNCION QUE SE PASA COMO ARGUMENTO A OTRA FUNCION

// DADO EL ARREGLO DE NUMEROS RETORNAR UN NUEVO ARREGLO CON LOS MISMOS
// NUMEROS PERO SUS NEGATIVOS

const numerosNegativos = ( arr )=>{

    let nuevoArr = []

    for (let i = 0; i < arr.length; i++) {
        
        nuevoArr.push( arr[i] * (- 1) )

    }

    return nuevoArr

}

let arrayNegativos = numerosNegativos(numeros)

console.log( arrayNegativos)

// MAP
// RECIBE UN ARREGLO Y DEVUELVE UN NUEVO ARREGLO DE LA MISMA LONGITUD
// CON NUEVOS ELEMENTOS
// EJECUTA TANTAS INSTRUCCIONES COMO ELEMENTOS TENGA

//  let nuevoArr = numeros.map( ( elemento )=>{
//     return elemento * ( -1 )
// } )

 let nuevoArr = numeros.map( elemento => elemento * (-1) )

console.log( nuevoArr )


let productos = [

    {
        nombre: "compu 1",
        precio: 50
    },
    {
        nombre: "compu 2",
        precio: 90
    },
    {
        nombre: "compu 3",
        precio: 150
    },

]

// const filtrarProd = (arr)=>{

//     let nuevoArr = []

//     for (let i = 0; i < arr.length; i++) {
        
//         if( arr[i].precio <= 100 ){

//             nuevoArr.push( arr[i] )

//         }

//     }

//     return nuevoArr

// }


// FILTER 
// RETORNA UN NUEVO ARREGLO PERO NO NECESARIAMENTE DE LA MISMA LONGITUD
let productosFiltrados = productos.filter( producto => producto.precio <= 100 )
console.log(productosFiltrados)

// elFiltroEstaDesactivado ? productos : productosFiltrados


let numeros2 = [ 12, 54, 6] // [0, 54, 12]

let nuevoArreglo = numeros2.map( ( num, indice )=> num * indice )

console.log( nuevoArreglo ) 
