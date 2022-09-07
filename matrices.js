
// ANCHOR MATRICES


let matrix = [ [12, 4, 5],[5, 11],[6, 13] ] // 3 x 3

// SIEMPRE LA MATRIZ SE DICE QUE ES DE TANTAS FILAS X TANTAS COLUMNAS
let matriz = [
    [4, 7, 14], // FILAAAAAA
    [1, 3, 15], // FILAAAAAA
    [6, 9] // FILAAAAAAA
]


// CREAR UNA MATRIZ de 2 X 5 // FILA - COLUMNA

// console.log( matriz[2][0] )
// console.log( matriz[2][1] )
// console.log( matriz[2][2] )

// ANCHOR RECORRER UNA FILA ESPECIFICA DE LA MATRIZ 

// LINK PARA RECORRER UNA FILA ( LA FILA ES ESTATICA Y LA COLUMNA DINAMICA )
// LINK PARA RECORRER UNA FILA LE PIDO LA LONGITUD A LA FILA

// EJEMPLO RECORRER FILA 2
const recorrerFila = ( mat )=>{

    for (let i = 0; i < mat[2].length; i++) {
        
        console.log( mat[2][i] )
        console.log("--------")
        
    }

}
recorrerFila( matriz )


let matriz2 = [
    [4, 2, 6], // FILAAAAAA
    [1, 3, 15], // FILAAAAAA
    [6, 9, 54], // FILAAAAAAA
    [1, 8, 12 ], // FILAAAAAAA
]

// ANCHOR RECORRER UNA COLUMNA

// LINK PARA RECORRER UNA COLUMNA LE VOY A PEDIR LA LONGITUD A LA MATRIZ
// LINK LAS FILAS SON DINAMICAS Y LAS COLUMNAS ESTATICAS


console.log("RECORRIENDO COLUMNA 1")
// ANCHOR EJEMPLO RECORRER COLUMNA 1

const recorrerCol = ( mat ) =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        
        if( mat[i][1] !== undefined){

            if( mat[i][1] % 2 === 0){

                acc += mat[i][1]
            }

        }

    }
    return acc

}

 let resultadoCol = recorrerCol( matriz2 )
 console.log(resultadoCol)


 let matriz3 = [
    [4, 2, 6, 6], // FILAAAAAA
    [1, 3, 15], // FILAAAAAA
    [6, 9, 54, 15, 644], // FILAAAAAAA
    [1], // FILAAAAAAA
]

// CALCULAR EL TOTAL DE LA MATRIZ
console.log("RECORRER MATRIZ COMPLETE")

const recorrerMat = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) { // i = FILA
        
        for (let j = 0; j < mat[i].length; j++) { // j = COLUMNA
            
            console.log("-----------------")
            console.log( mat[i][j] ) // 4 - 2 - 6 - 1 - 3 -15

        }



    }

}

recorrerMat( matriz3 )