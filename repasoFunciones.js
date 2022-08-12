

// ANCHOR SCOPE O ALCANZE

// LET Y CONST TIENEN UN SCOPE LOCAL



// SUMAR 2 NUMEROS y DIVIDIRLO POR 2
const sumar = (a, b)=>{
    // BLOQUE DE CODIGO
    
    let apellido = "hola"
    const restar = ()=>{
        
        let nombre = "pepito"

    }
 
}

// console.log(nombre)

sumar(12, 2)

const restar = ()=>{

    let apellido = "dasd"
    let nombre = "pepito"

}

// let arr2 = arr.map( x =>  x * 2 )



const decirEdad = ( edad )=>{

    return "termino la funcion"

    // EL CONSOLE LOG NO SE EJECUTRARA
    console.log("hola")

}

 let resultadoEdad = decirEdad(5)

 console.log(resultadoEdad)

// CREAR UNA FUNCION QUE DEVUELVA EL ANTERIOR DE UN NUMERO
// UNA QUE RETORNE EL TRIPLE DE UN NUMERO
// UNA QUE RETORNE EL ANTERIOR DEL TRIPLE


// const anterior = ( numero )=>{
//     return numero - 1
// }

const anterior = numero => numero - 1

let resultadoAnterior = anterior(2) 
console.log(resultadoAnterior)


const triple = numero => numero * 3

let resultadoTriple = triple(8)
console.log(resultadoTriple)

const anteriorTriple = ( x ) => {
   
    // let resultadoTriple = triple( x )
    // let resultadoAnterior = anterior( resultadoTriple )
    // return resultadoAnterior

   return anterior( triple( x ) )

}

console.log( anteriorTriple(3) )