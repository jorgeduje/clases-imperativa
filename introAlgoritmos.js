
// LINK MODULO 3 => ALGORITMOS


// CREAR UN ALGORITMO EL CUAL DETERMINE CUAL
// ES EL MAYOR ENTRE 2 NUMEROS, SI SON IGUALES,
// RETORNAR CUALQUIERA DE LOS 2.

const miPrimerAlgoritmo = ( num1, num2 )=>{

    if(num1 > num2){
        return num1
    }else{
        return num2
    }

}

console.log( miPrimerAlgoritmo(122, 122) )

// CALCULAR EL MAYOR ENTRE 4 NUMEROS
// 15, 65, 121, 76

let mayorEntre4 = miPrimerAlgoritmo( miPrimerAlgoritmo(125,65), miPrimerAlgoritmo(76, 121) )

console.log(mayorEntre4)



// CREAR UN ALGORITMO EL CUAL RECORRA UN ARRAY
// Y RETORNE EN UN NUEVO ARREGLO EL NUMERO MINIMO y EL MAXIMO

// OBJETO Math.

let numeros = [12, 3, 2, 75, 4, 11, 56, 13]


// let minMax = []

// minMax.push( Math.min(...numeros), Math.max(...numeros) )

// console.log(minMax)

const determinarMinMax = ( arr )=>{

    let minMax = []
    let min = arr[0] // 12
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
      
        min > arr[i] ? min = arr[i] : null
        max < arr[i] ? max = arr[i] : null

    }

    minMax.push(min, max)
    return minMax

    // return [min, max]

}

let resultadoMinMax = determinarMinMax(numeros)
console.log(resultadoMinMax)

let mat = [ 
    ["hola", "chau"], 
    ["como", "hola"], 
    ["casa", "perro"] 
] // 3 x 2
