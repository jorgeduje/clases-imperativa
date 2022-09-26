
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


const buscar = (arr, cancion)=>{

    for (let i = 0; i < arr.length; i++) {

        if(arr[i].cancion === cancion ){
            return arr[i].votos
        }
        
    }

    return "La cancion no se encontro"

}

let resultadoLineal = buscar(canciones, "susanita")
console.log( resultadoLineal )


const ordenar = arr => {

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

ordenar(canciones)

// console.log(canciones)


const encontrar = (arr, cancionBuscada)=>{

    let menor = 0 // left
    let mayor = arr.length - 1 // rigth
    let posicionMedio // mid
    let cancionEncotrada // guess

    while( menor <= mayor ){

        posicionMedio = Math.floor( (menor + mayor) / 2 )
        cancionEncotrada = arr[posicionMedio]

        if( cancionEncotrada.cancion === cancionBuscada ){

            return cancionEncotrada.votos

        }

        if( cancionEncotrada.cancion > cancionBuscada){

            mayor = posicionMedio - 1

        }else{

            menor = posicionMedio + 1

        }
    }

}

let resultadoBinary = encontrar(canciones, "susanita")
console.log( resultadoBinary )

console.log( canciones )