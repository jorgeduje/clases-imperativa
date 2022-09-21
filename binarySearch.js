
// ANCHOR ALGORITMO BINARY SEARCH = BUSQUEDA BINARIA 



// LINK ----> ENCONTRAR LA POSICION DONDE SE ENCUENTRA EL NUMERO 12

// TODO : REALIZARLO DE FORMA VISUAL -- LISTO
// TODO : REALIZARLO CON BUSQUEDA LINEAL --

// TODO : REALIZARLO CON BUSQUEDA BINARIA

let numeros = [3, 5, 7, 12, 32] // 4 -

// PROGRAMACION FUNCIONAL
let indiceDe12 = numeros.indexOf(14) !== -1 ? numeros.indexOf(12) : "Lo siento no encontre el elemento"
console.log(indiceDe12)

const encontrarIndice = (arr, elemento)=>{

    for (let i = 0; i < arr.length; i++) {

        if( arr[i] === elemento ){
          
            return i
            
        }
        
    }

    return "Lo siento no encontre el elemento"


}

let indexLineal = encontrarIndice(numeros, 14)
console.log(indexLineal)

let numeros2 = [3, 5, 7, 12, 32] // 5

const encontrar = (arr, buscado)=>{ // 4

    let menor = 0 // 1
    let mayor = arr.length - 1 // 4 // 1 // 0
    let posicionMedio
    let elementoEncontrado

    while( menor <= mayor ){

        posicionMedio = Math.floor( (menor + mayor) / 2 )  // 2 // 0 // 1
        elementoEncontrado = arr[posicionMedio] // 7 // 3 // 5

        if(elementoEncontrado === buscado){

            return posicionMedio

        }

        if(elementoEncontrado > buscado){

            mayor = posicionMedio - 1

        }else {
            
            menor = posicionMedio + 1
            
        }



    }


    return "Lo siento no encontre el elemento"

}

let indiceBinary = encontrar(numeros2, 14)
console.log(indiceBinary) 