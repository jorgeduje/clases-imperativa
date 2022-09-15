// TODO : DADO EL SIGUIENTE ARREGLO DE MASCOTAS
    //    ORDENARLO DE FORMA DESCENDENTE POR EDAD

    
let mascotas = [
    {
        nombre: "lola",
        edad: 4
    },
    {
        nombre: "jack",
        edad: 3
    },
    {
        nombre: "firulais",
        edad: 2
    },
    {
        nombre: "mora",
        edad: 1
    },
]

const verificarOrden = arr =>{

    let estaOrdenado = true

    for (let j = 0; j < arr.length - 1; j++) {

        if( arr[j].edad < arr[j + 1].edad ){

            estaOrdenado = false

        }
        
    }
        

    if( estaOrdenado === true ){
        console.log( "esta ordenado")
        return
    }else{
        let aux
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if( arr[j].edad < arr[j + 1].edad ){
                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
                }
            }
        }
    }

}

verificarOrden( mascotas )

console.log( mascotas )



// const ordenar = ( arr )=>{

//     let aux
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if( arr[j].edad < arr[j + 1].edad ){
//                 aux = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = aux
//             }
//         }
//     }

// }

// ordenar(mascotas)

// console.log( mascotas )

// TODO : DADA LA SIGUIENTE MATRIZ REALIZAR LOS SIGUIENTES EJERCICIOS

let matrix = [
    [14, 12, 17, 41], // 14 / 2131 / 1231 / 12312312
    [55, 16, 61, 23],
    [13, 22, 13, 32],
    [12, 61, 18, 23],
]
// 4 X 4

// PARA RECORRER UNA COLUMNA
// PARA RECORRER LA DIAGONAL PRINCIPAL
// PARA RECORRER LA DIAGONAL SECUNDARIA
// UN SOLO CICLO FOR Y LE PIDO LA LONGITUD A LA MATRIZ


// PARA RECORRER UNA FILA
// UN SOLO CICLO FOR PERO LE PIDO LA LONGITUD A LA FILA

// PARA RECORRER LA MATRIZ COMPLETA 
// 2 CICLOS FOR  EL PRIMERO LE PIDE LA LONGITUD A LA MATRIZ
// Y EL SEGUNDO LE PIDE LA LONGITUD A LA FILA
// EL QUE MANEJA LAS FILAS ES EL PRIMER FOR OSEA LA VARIABLE I 

//TODO 1) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA COLUMNA.
    //    NUESTRA FUNCION DEBE REMPLAZAR TOD0S LOS ELEMENTOS DE ESA COLUMNA
    //    POR UN STRING QUE DIGA "hello"


    const recorreCol = (mat, posicionCol) =>{

        for (let i = 0; i < mat.length; i++) {

            mat[i][posicionCol] = "hello"
            
        }

    }

    // recorreCol(matrix, 2)

    console.table(matrix)


//TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y
    //    ADEMAS LA POSICION DE UNA FILA.
    //    NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR
    //    TOD0S LOS ELEMENTOS DE ESA FILA


    const recorrerFila = (mat, numFila)=>{

        let acc = 1

        for (let i = 0; i < mat[numFila].length; i++) {

           acc *= mat[numFila][i]
            
        }

        return acc

    }

    let resultadoFila = recorrerFila(matrix, 0)

    console.log( resultadoFila )


//TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE UN ARREGLO CON TOD0S LOS ELEMENTOS DE LA DIAGONAL SECUNDARIA

    const recorreSec = mat =>{

        let arr = []

        for (let i = 0; i < mat.length; i++) {
            
            arr.push(mat[i][[mat.length - i - 1]]) 

        }

        return arr

    }

    let arrSecundaria = recorreSec(matrix)

    console.log(arrSecundaria)



//TODO 4) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ 
    //    Y RETORNE LA SUMA DE TOD0S LOS ELEMENTOS DE LA MATRIZ
    //    TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES


    const recorrerMat = mat => {

        let acc = 0

        for (let i = 0; i < mat.length; i++) {
            
            for (let j = 0; j < mat[i].length; j++) {

               if( mat[i][j] % 2 !== 0 ){

                acc += mat[i][j]

               }
                
            }

        }

        return acc

    }

    let resultadoMat = recorrerMat(matrix)
    console.log(resultadoMat)