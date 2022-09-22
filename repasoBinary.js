
// Dado un array con los datos de una encuesta realizada sobre las 
// canciones más populares
// Escribir un algoritmo que, dada una cancion, me informe cuántos votos obtuvo.
// Resolverlo aplicando búsqueda lineal.
// Resolverlo aplicando búsqueda binaria.

let canciones = [
    {
        cancion: "luna cautiva",
        votos: 2443,
        active: true
    },
    {
        cancion: "highway to hell",
        votos: 5000,
        active: true
    },
    {
        cancion: "infinity",
        votos: 6533,
        active: true
    },
    {
        cancion: "susanita",
        votos: 432222,
        active: true
    },
    {
        cancion: "running up that hill",
        votos: 65122,
        active: true
    }
]

const ordenarPorCancion = arr =>{

    let aux

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j].cancion > arr[j + 1].cancion ){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux

            }
            
        }
        
    }

}

ordenarPorCancion(canciones)

console.log(canciones)


const buscar = (arr, cancion) =>{

    for (let i = 0; i < arr.length; i++) {

        if(arr[i].cancion === cancion){

            return arr[i].votos

        }
        
    }
    
}

let votosSusanita = buscar(canciones, "infinity")
console.log(votosSusanita)

const buscarBinary = (arr, cancion)=>{


    let menor = 0
    let mayor = arr.length - 1
    let indiceMedio
    let encontrado

    while (menor <= mayor) {

        indiceMedio = Math.floor( (menor + mayor) / 2 )
        encontrado = arr[indiceMedio]
        
        if( encontrado.cancion  === cancion){

            return encontrado.votos

        }

        if (encontrado.cancion > cancion) {

            mayor = indiceMedio - 1
            
        }else{

            menor = indiceMedio + 1

        }
    }


}

let votosBinary = buscarBinary(canciones, "infinity")
console.log(votosBinary)

// backend.get(`http/:localhost:3001/${cancion === active === true}`)
// backend.post(`http/:localhost:3001/`, {
//     cancion: "no lo se",
//     votos: 2555
// })
// backend.put(`http/:localhost:3001/${2}`, {cancion: "otra cosa"} )
// backend.delete(`http/:localhost:3001/${2}`, {active: false} )


// FILTER

// DADO UN ARREGLO RETORNAR UN NUEVO ARREGLO CON TOD0S LOS NUMEROS IMPARES 

// CALLBACKS

let numeros = [ 54, 12, 35, 17, 3]


// DEVUELVE UN NUEVO ARREGLO CON TOD0S LOS ELEMENTOS QUE CUMPLAN LA CONDICION

let arrImpares = numeros.filter( elemento => elemento % 2 !== 0)

console.log( arrImpares )

// const retornarImpar = arr =>{

//     let arrVacio = []
//     for (let i = 0; i < arr.length; i++) {

//         if( arr[i] % 2 !== 0 ){

//             arrVacio.push(arr[i])

//         }
        
//     }
//     return arrVacio
// }

// let arrImpares = retornarImpar( numeros )

// console.log( arrImpares )


let numeros2 = [ 1, 2, 3, 4]

let arrMultiplicado2 = numeros2.map( elemento => elemento * 10)
console.log(arrMultiplicado2)

// [10, 20, 30, 40]

// QUIERO UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DE EL ARREGLO ORIGINAL
// PERO MULTIPLICACIOS POR 10


const multiplicar = (arr)=>{

    let nuevoArr = []

    for (let i = 0; i < arr.length; i++) {

        nuevoArr.push( arr[i] * 10)
        
    }

    return nuevoArr

}
// let arrMultiplicado = multiplicar(numeros2)
// console.log( arrMultiplicado )

