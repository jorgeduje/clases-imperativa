

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



console.log("-----------------")
console.log("-----------------")
console.log("-----------------")
console.log("-----------------")
console.log("-----------------")



// FIND / SORT / REDUCE / forEach

let nums = [ 11, 15, 2, 65, 12 ]

let numsReducidos = nums.reduce( ( acc , elemento )=>{
    return acc * elemento
} , 1 )

console.log(numsReducidos)

let productos = [
    {
        nombre: "televisor",
        precio: 10,
        cantidad: 120
    },
    {
        nombre: "celular",
        precio: 5,
        cantidad: 40
    },
    {
        nombre: "zapatilla",
        precio: 12,
        cantidad: 150
    },
]

let productoSeleccionado = productos.find( (elemento)=> elemento.nombre === "celular" )

console.log( productoSeleccionado )

let productos2 = [
    {
        nombre: "televisor",
        precio: 10,
        cantidad: 60
    },
    {
        nombre: "celular",
        precio: 5,
        cantidad: 40
    },
    {
        nombre: "zapatilla",
        precio: 12,
        cantidad: 50
    },
    {
        nombre: "televisor",
        precio: 14,
        cantidad: 4
    },
]

let arr = [ 1, 12, 2, 5, 3]
// arr.sort( (elemento, elementoSiguiente)=> elementoSiguiente - elemento )
arr.sort( (a, b)=> a - b )

productos2.sort( (a, b)=>{
    if( a.cantidad > b.cantidad){
        return -1
    }

    if(a.cantidad < b.cantidad){
       return  1
    }

    return 0

    // if( a.precio === b.precio){
    //     return 0
    // }    
    // return a.nombre >= b.nombre ? 1 : -1
} )

console.log(productos2)

let numeritos = [ 11, 12 ,23, 44]

let productosModificados = []

productos2.forEach( (elemento, idx) => {
    productosModificados.push( {...elemento, algo: numeritos[idx] } )
})

console.log(productosModificados)
console.log(productos2)