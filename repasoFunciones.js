

// DECLARADAS Y EXPRESADAS
// Sumar 3 numeros 

let num1 = 12
let num2 = 15
let num3 = 3
const sumar = (a, b, c)=>{
     return a + b + c
}

let resultado = sumar( num1, num2, num3 )

console.log( resultado )

// CREAR UNA FUNCION PARA 
// DIVIDIR EN 2 LO QUE ME RETORNO LA SUMA ANTERIOR
// Y RETORNAR ESE NUEVO RESULTADO

const dividir =   ( n1 ) => {

    let nombre = "pepito"
    return n1 / 2
}

let resultadoDivision = dividir( resultado )


console.log( resultadoDivision )

//ANCHOR SCOPE  / ALCANZE 
// CONST Y LET = SCOPE LOCAL 
// PUEDO ACCEDER POR DENTRO A VARIABLES QUE SE DECLARARON AFUERA
// PERO NO PUEDO ACCEDER POR FUERA A VARIABLES DECLARADAS ADENTRO

const pruebaScope = function( n1, n2, n3 ){

    let nombre = "pepito"

    function hola (){

       let nombre = "juancito"

       console.log(nombre)

    }

}
// console.log(algo)
// console.log( apellido ) //ESTO NO SE PUEDE



//ANCHOR ARROW FUNCTION 
// SI TENGO UN UNICO PARAMETRO PUEDO BORRAR LOS PARENTESIS
// SI TENGO UNA SOLA LINEA DE CODIGO
// PUEDO EVITAR LAS LLAVES Y EL RETURN


const restar = function ( a ) {

    return a - 1

}

const restar2 =  a => a - 1

console.log(restar(10))
console.log(restar2(10))


// ANTERIOR 

function anterior ( num ) {

    return num - 1 

}

// TRIPLE

function triple (num){
    return num * 3
}

// anteriorDelTriple

function anteriorDelTriple ( num ) {
    
    // let a = triple(num)
    // let b = anterior( a )
    // return b

    return anterior( triple(num) )

}
console.log(anteriorDelTriple(2))

