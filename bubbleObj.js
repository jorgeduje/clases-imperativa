
//TODO : BUBBLE SORT CON ARRAY DE OBJETOS

const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 2,
        edadTitular: 33,
        tipoCuenta: "sueldo",
    },
    {
      titular: "Roslyn Torres",
      saldo: 5,
      estaHabilitada: false,
      edadTitular: 27,
      tipoCuenta: "sueldo",
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1,
      edadTitular: 34,
      tipoCuenta: "corriente",
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: 3,
      edadTitular: 30,
      tipoCuenta: "sueldo",
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 10,
      edadTitular: 34,
      tipoCuenta: "sueldo",
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 8,
      edadTitular: 25,
      tipoCuenta: "corriente",
    },
];

const ordenarObjetos = (arr, tipo, prop) =>{

    if( tipo !== "DESC" && tipo !== "ASC"){
        console.log("El tipo o instruccion no es correcta")
        return 
    }

    let aux

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if(tipo === "ASC"){

                if( arr[j][prop] > arr[j + 1][prop] ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
            
                }

            }else if( tipo === "DESC"){

                if( arr[j][prop] < arr[j + 1][prop] ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
            
                }

            }
            
        }
        
    }

}

ordenarObjetos(arrayCuentas, "ASC", "saldo")
console.log(arrayCuentas)

// console.log(arrayCuentas)

// let persona = {
//     nombre: "pepito",
//     edad: 29
// }

// console.log( persona.edad )
// console.log( persona["edad"] ) 


//TODO : RECORRER DIAGONALES DE UNA MATRIZ CUADRADA

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


// SE RECORREN CON UN SOLO CICLO FOR

const recorrerPrincipal = mat =>{

    let arr = []

    for (let i = 0; i < mat.length; i++) {
        
        // acc += mat[i][i]
        // mat[i][i] = 0
        arr.push( mat[i][i] )

    }

    return arr

}

let resultadoPrincipal = recorrerPrincipal(matriz)

console.log(resultadoPrincipal)


let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [1, 8, 9],
]

console.log( matriz[0][2] )
console.log( matriz[1][1] )
console.log( matriz[2][0] )

const recorrerSec = mat =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        // mat[i][ mat.length - (i + 1) ] // i = 0 [0][2]
        // mat[i][ mat.length - i - 1 ] // i = 1 [1][1]
        // mat[i][ mat.length - i - 1 ] // i = 2 [2][0]
        acc += mat[i][ mat.length - (i + 1) ]
        
    }

    return acc

}

let resultadoSec = recorrerSec(matriz2)
console.log(resultadoSec)
