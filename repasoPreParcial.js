
// TODO : DADO EL SIGUIENTE ARREGLO DE MASCOTAS
    //    ORDENARLO DE FORMA DESCENDENTE POR EDAD

    
let mascotas = [
    {
        nombre: "lola",
        edad: 2
    },
    {
        nombre: "jack",
        edad: 3
    },
    {
        nombre: "firulais",
        edad: 4
    },
    {
        nombre: "mora",
        edad: 1
    },
]

const ordenar = (arr, orden) =>{

    let aux

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( orden === "ascendente"){
                if( arr[j].edad > arr[j + 1].edad  ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
    
                }
            }else if(orden === "descendente"){
                if( arr[j].edad < arr[j + 1].edad  ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
    
                }
            }
            
        }
        
    }

}

ordenar( mascotas, "ascendente" )
console.log( mascotas )

let numeros = [1, 2, 3, 5]

// VERIFICAR SI ESTA ORDENADO DE FORMA ASCENDETE

const verificar = (arr)=>{

    let estaOrdenado = true
    
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j] > arr[j + 1] ){

                estaOrdenado = false
                
            }
            
        }
    }
    
    if( estaOrdenado ){
        console.log( "el arreglo ya estaba ordenado")
        return
    }
    

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j] > arr[j + 1] ){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux

            }
            
        }
    }


}

verificar(numeros)
console.log( numeros )




// ANCHOR
// PARA RECORRER UNA COLUMNA
// PARA RECORRER LA DIAGONAL PRINCIPAL
// PARA RECORRER LA DIAGONAL SECUNDARIA
// UN SOLO CICLO FOR Y LE PIDO LA LONGITUD A LA MATRIZ

// ANCHOR
// PARA RECORRER UNA FILA
// UN SOLO CICLO FOR PERO LE PIDO LA LONGITUD A LA FILA

// ANCHOR
// PARA RECORRER LA MATRIZ COMPLETA 
// 2 CICLOS FOR  EL PRIMERO LE PIDE LA LONGITUD A LA MATRIZ
// Y EL SEGUNDO LE PIDE LA LONGITUD A LA FILA
// EL QUE MANEJA LAS FILAS ES EL PRIMER FOR OSEA LA VARIABLE I 

// TODO : DADA LA SIGUIENTE MATRIZ REALIZAR LOS SIGUIENTES EJERCICIOS

let matrix = [
    [12, 31, 14, 21], 
    [55, 16, 61, 23],
    [13, 22, 13, 32],
    [12, 61, 18, 23],
]


//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
    //    POR UN STRING QUE DIGA "hello"

    const recorrerCol = ( mat, posicionCol )=>{

        for (let i = 0; i < mat.length; i++) {
            
            mat[i][posicionCol] = "hello"

        }

    }

    // recorrerCol( matrix, 2)
    // console.table( matrix )



//TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA FILA.
    //    NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR
    //    TOD0S LOS ELEMENTOS DE ESA FILA


    const recorrerFila = ( mat, posicionFila )=>{

        let acc = 1

        for (let i = 0; i < mat[posicionFila].length; i++) {
            
            acc *= mat[posicionFila][i]

        }

        return acc

    }

    let resultadoFila = recorrerFila(matrix, 0)
    console.log(resultadoFila)



    let matrix2 = [
        [12, 31, 14, 21], 
        [55, 16, 61, 23],
        [13, 22, 13, 32],
        [12, 61, 18, 23],
    ]

//TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA


    const recorrerSec = mat =>{

        let arr = []

        for (let i = 0; i < mat.length; i++) {
            
            // mat[i][i] // ASI ACCEDO A LA DIAGONAL PRINCIPAL
            arr.push(mat[i][ mat.length - 1 - i ])  // col = 3 - 2 - 1 - 0

        }

        return arr

    }
    let arrSecundaria = recorrerSec(matrix2)
    console.log( arrSecundaria )



//TODO 4) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE LA SUMA DE TOD0S LOS ELEMENTOS DE LA MATRIZ
    //    TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES


    const recorreMat = mat =>{

        let acc = 0

        for (let i = 0; i < mat.length; i++) {

            for (let j = 0; j < mat[i].length; j++) {

                if( mat[i][j] % 2 !== 0){
                    
                    acc += mat[i][j]
                }
                
            }
            
        }

        return acc

    }

    let resultadoMat = recorreMat(matrix2)
    console.log( resultadoMat )