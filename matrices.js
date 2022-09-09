
// ANCHOR MATRICES

let numeros = [ 12, 54, 11]


// DETERMINAR DE CUANTO ES LA MATRIZ 3 x 2
let matrix = [
    [1, 5, 6], // FILA 0
    [3, 6, 12], // FILA 1
]

// console.log( matrix[0][0] )
// console.log( matrix[0][1] )
// console.log( matrix[0][2] )

// CALCULAR EL TOTAL DE LA FILA 

// LINK SIEMPRE LE PIDO LA LONGITUD A LA FILA

const recorrerFila = ( mat, numFila )=>{

    let acc = 0

    for (let i = 0; i < mat[numFila].length; i++) {

        acc += mat[numFila][i] 
        
    }

    return acc

}

console.log( recorrerFila( matrix, 0 ) )


let matrix2 = [
    [1, 5, 6], // FILA 0
    [3, 6, 12], // FILA 1
    [3, 6], // FILA 1
    [3, 6], // FILA 1
    [3, 6, 1], // FILA 1
]
// CALCULAR EL TOTAL DE LA COLUMNA 2

const recorrerCol = (mat)=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        
        if( mat[i][2] !== undefined){
            
            acc += mat[i][2]
        }

    }
    
    return acc

}

console.log( recorrerCol(matrix2) )


// CALCULAR EL TOTAL DE LA MATRIZ

console.log( "RECORRIENDO MATRIZ COMPLETA")

let matriz = [
    [2, 4, 1],
    [5, 2],
    [6, 5, 8, 54, 12]
]

const recorrerMat = (mat) =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        console.log( "estoy dando la vuelta de la fila " + i)

        for (let j = 0; j < mat[i].length; j++) {
            
            console.log( "Estoy en la columna " + j)
            acc += mat[i][j]

        }

    }

}

recorrerMat(matriz)

// RECORRER LA MATRIZ Y CAMBIAR TODOS LOS NUMEROS NEGATIVOS POR SUS POSITIVOS

let matrixRecargado = [
    [2, -5, 14],
    [-8, -4, 1],
    [6, -6, -12]
]

console.table( matrixRecargado )


const cambiarNegativos = (mat)=>{

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {

            if( mat[i][j] < 0 ){
                // mat[i][j] = mat[i][j] * -1
                mat[i][j] = 0
            }
        }
    }

}

cambiarNegativos( matrixRecargado )

console.table(matrixRecargado)
