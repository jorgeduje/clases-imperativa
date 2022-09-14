
// ALGORITMO BUBBLE SORT

let numeros = [ 12, 4, 51, 32, 7]

// EL ELEMENTO > SIGUIENTE 

// 

// [ 4 - 12- 32- 7 - 51 ] // 1

// [ 4 - 12 - 7 - 32 - 51 ] // 2

//  [ 4 - 7 - 12 - 32 - 51] // 3

//  [ 4 - 7 - 12 - 32 - 51] // 4

//  [ 4 - 7 - 12 - 32 - 51] // 5

let numeros2 = [ 12, 4, 51, 32, 7]

let palabras = [ "hola", "Zebra", "abridor", "Abra", "ABra" ]

const ordenar = (arr, orden)=>{

    let aux // CAJA QUE VA CONTENER EL ELEMENTO PROVISORIAMENTE

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if( arr[j] > arr[j + 1] ){

                // INTERCAMBIAR
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux

                // SWAPPING de Variables
                // [ arr[j] , arr[ j+1 ] ] = [ arr[j + 1], arr[j] ]

            }
            
        }

        
    }

}
ordenar(numeros2)
console.log( numeros2 )

