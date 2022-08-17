

// FOR / WHILE / DO WHILE

// MOSTRAR POR CONSOLA LOS NUMEROS DEL 1 AL 100


// INICIALIZACION ; CONDICION ; MODIFICADOR
// ITERAR o ITERANDO

// i = i + 1
// i++

// MOSTRAR LOS NUMEROS DEL 1 HASTA el numero pasado por parametros


const contar = ( x )=>{

    for( let i = 1;  i <= x; i++){
        // BLOQUE 
        console.log(i)

    }

}

// contar(20)


// 
const contarWhile = ( x )=>{
    
    let i = 1

    while(i <= x){
        // BLOQUE
        console.log("hola")
        
        i++
    }


}

// contarWhile(-15)




const probandoDoWhile = ( x )=>{

    let i = 1

    do{
        console.log(i)
        i++
    }while( i <= x)
    

}

// probandoDoWhile(2)

// EJERCICIOS
// 1) Hacer un código que nos muestre los números del 0 al 10.
// 2) Hacer un código en el cual se visualice una
// cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.


const contarHastaDiez = ()=>{

    for( let i = 1;  i <= 10; i++){
        // BLOQUE 
        console.log(`(${i} - ${11- i} )`)

    }

}

contarHastaDiez()


// 3) crear una funcion que receiba un numero por parametros y que muestre por consola
// todos los impares que hay en entre el 0 y ese numero
console.log("----------EJERCICIO NUMERO TRES---------")

// const mostrarImpares = ( numero )=>{

//     for(let i = 1; i <= numero; i = i + 2 ){
        
//         // if( i % 2 !== 0  ){
//         //     console.log(i)
//         // }
//         console.log(i)

//     }


// }


// mostrarImpares(20)

const mostrarImpares = ( numero )=>{

    for(let i = 0; i <= numero; i++ ){
        
        if( i % 2 !== 0  ){
            console.log(i)
        }

    }


}


mostrarImpares(20)



// numero % 2 === 0 // PAR
// numero % 2 !== 0 // IMPAR / TRUE