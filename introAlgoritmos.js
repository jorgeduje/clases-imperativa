
// LINK MODULO 3 => ALGORITMOS


// CREAR UN ALGORITMO EL CUAL DETERMINE CUAL
// ES EL MAYOR ENTRE 2 NUMEROS, SI SON IGUALES,
// RETORNAR CUALQUIERA DE LOS 2.

// const miPrimerAlgoritmo = (num1, num2) => num1 > num2 ? num1 : num2

const miPrimerAlgoritmo = (num1, num2) =>{

   if(num1 > num2){
    return num1
   }else{
    return num2
   }

}

// 14, 12, 36, 28


let mayorEntre4 = miPrimerAlgoritmo( miPrimerAlgoritmo(14, 12) , miPrimerAlgoritmo(36, 28) )

console.log(mayorEntre4)


// CREAR UN ALGORITMO EL CUAL RECIBA UN ARRAY
// Y RETORNE EN UN NUEVO ARREGLO EL NUMERO MINIMO y EL MAXIMO

let numeros = [54, 65, 12, 15, 29, 32, 89, 17] // [12, 89]

let arr = []
arr.push( Math.min(...numeros), Math.max(...numeros))

console.log(arr)

let numeros2 = [542, 1265, 12, 15, 29, 32, 89, 17] // [12, 89]


const determinarMinMax = ( arr )=>{

    let mayor = arr[0]
    let menor = arr[0]

    let minMax = []

    for (let i = 0; i < arr.length; i++) {
        
        if( mayor < arr[i] ){
            mayor = arr[i]
        }

        if( menor > arr[i]){
            menor = arr[i]
        }

    }

    minMax.push(menor, mayor)

    return minMax

}

let resultadoArr =  determinarMinMax(numeros)
console.log(resultadoArr)



// let edades = [ 12, 54, 22, 65, 86, 65]
let edades2 = [ 43, 22, 31, 14, 32, 21, 31, 14]

const verificar = (array)=>{

    let edadesRepetidas = []

    for (let i = 0; i < array.length; i++) {

        if( !edadesRepetidas.includes(array[i]) ){
            edadesRepetidas.push(array[i])
        }else{
            console.log("Se encontro una edad repetida: ", array[i])
        }
        
    }

}

verificar(edades2)


const verificarRepetidos = (array) =>{

    let n1 = 0
    let n2 = 0

    let edadesRepetidas = [] // [31, 14]

    for (let i = 0; i < array.length; i++) {

        n1 = array.indexOf(array[i])
        n2 = array.lastIndexOf(array[i])
        
        if(n1 !== n2){
            
            edadesRepetidas.push(array[i])

        }


    }

    return edadesRepetidas

}

let repetidas = verificarRepetidos(edades2)
console.log(repetidas)

let edades1 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] /// índice x
      

