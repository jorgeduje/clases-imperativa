

// CREAR UN ARRAY LLAMADO MISMASCOTAS
// NOMBRE RAZA EDAD SONIDO
// decirSonido  QUE RETORNE ESE SONIDO 2 veces

console.log("ejercicio 1")

let misMascotas = [

    {
        nombre: "jack",
        raza: "callejero",
        edad: 2, // 3
        sonido: "guauu",
        decirSonido: function(){
            // return this.sonido + this.sonido
            return `${this.sonido} ${this.sonido}`
        }

    },
    {
        nombre: "lola",
        raza: "persa",
        edad: 7, // 9
        sonido: "miauuu",
        decirSonido: function(){
            // return this.sonido + this.sonido
            return `${this.sonido} ${this.sonido}`
        }

    },
    {
        nombre: "firulais",
        raza: "dogo",
        edad: 14, // 21
        sonido: "GUAUUUUUUUUU",
        decirSonido: function(){
            // return this.sonido + this.sonido
            return `${this.sonido} ${this.sonido}`
        }

    }

]


console.log( misMascotas[1].nombre )
console.log( misMascotas[1].decirSonido() )



console.log("====================")
console.log("ejercicio 2")
/*
Deberemos crear una función que se llame aumentarEdad
Recibe un array por parametros y aumenta la edad de los elementos en 1
*/

// misMascotas[0].edad = misMascotas[0].edad + 1


const aumentarEdad = ( arreglo )=>{
   
    for( let i = 0; i < arreglo.length; i++ ){

        // arreglo[i].edad = arreglo[i].edad + 1
        arreglo[i].edad += 1

    }

    
}

//  console.log( misMascotas )

//  aumentarEdad( misMascotas )

//  console.log( misMascotas )






/**
 
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de 
su edad

*/

const aumentarEdadCondicionada = ( arr )=>{

    for(let i = 0; i < arr.length; i++){

        if( arr[i].edad < 6 ){

            arr[i].edad += 1
            
        }else if( arr[i].edad >= 6 && arr[i].edad <= 10){

            arr[i].edad += 2

        }else{

            arr[i].edad += (arr[i].edad / 2)

        }

    }

}


aumentarEdadCondicionada(misMascotas)
console.log(misMascotas)



/*

Ahora crearemos una función que va a generar un identificador
(ID) en cada objeto, que será AutoIncremental y 
que empezará en 1.

*/

console.log("===========")
console.log("ejercicio 3")
const agregarId = ( arr )=>{

    for(let i = 0; i < arr.length; i++){

        arr[i].id = i + 1


    }

}

agregarId(misMascotas)

console.log(misMascotas)


// SUMAR LA CANTIDAD TOTAL DE AÑOS DE TODOS MIS OBJETOS


const sumarEdades = (arr)=>{

    let acumulador = 0 // 3 // 12 // 33

    for (let i = 0; i < arr.length; i++) {

        acumulador += arr[i].edad
        
    }

    return acumulador


}

let resultadoSuma = sumarEdades(misMascotas)
console.log( resultadoSuma )



let productos = [
    {
        nombre: "telefono",
        precio: 200,
        cantidad: 5
    },
    {
        nombre: "zapatilla",
        precio: 100,
        cantidad: 2
    },
    {
        nombre: "notebook",
        precio: 300,
        cantidad: 3
    },
    {
        nombre: "mac",
        precio: 500,
        cantidad: 4
    }
] // 2100


const calcularTotalVenta = (arr)=>{

    let acc = 0 // 1000 / 1200 / 2100

    for (let i = 0; i < arr.length; i++) {

        acc += ( arr[i].precio * arr[i].cantidad )
        
    }

    return acc

}

let resultadoVenta = calcularTotalVenta(productos)

console.log(resultadoVenta)



// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS POR PARAMETROS
// SI LOS 2 NUMEROS SON PARES Y MAYORES QUE CERO
// RETORNAR SU DIVISION
// SI UNO O MAS NUMEROS SON IMPARES , RETORNAR LA SUMA DE AMBOS


const verificar = ( num1, num2 )=>{

    if( num1 === 0 || num2 === 0){

        console.log("uno o mas numeros son iguales a cero")
        return

    }

    if( num1 % 2 === 0 && num1 > 0 && num2 % 2 === 0 && num2 > 0){

        // return num1 / num2
        console.log("los numeros son pares")

    }else if(num1 % 2 !== 0 && num2 % 2 !== 0){

        console.log("los numeros son impares")

    }else{
        console.log("un numero es par y el otro es impar")
        
    }


}

verificar(1, 0)




// ANCHOR PARES 
// num % 2 === 0 

// ANCHOR IMPARES
// numero % 2 !== 0

// ANCHOR NUMERO MULTIPLO DE UN NUMERO
// NUMERO MULTIPLO de 8
// CUALQUIER NUMERO DIVIDIDO EN 8 Y QUE SU RESTO SEA 0 
// console.log( 24 % 8 === 0  && 24 % 6 === 0)

/*
El array de Alicia es: alicia = [ 10, 80, 75 ]
El array de Bob es: bob = [ 90, 20, 25]
*/

let alicia = [ 10, 80, 75 ]
let bob = [ 90, 80, 25]


const concurso = ( arr1, arr2 )=>{
    
   

    let puntajesP1 = 0
    let puntajesP2 = 0
    
    for( let i = 0; i < arr1.length; i++ ){

        if(arr1[i] > arr2[i] ){
            puntajesP1 += 1
        }else if(arr1[i] < arr2[i]){
            puntajesP2 += 1
        }

    }

   if( puntajesP1 > puntajesP2){
        return `Gano el participante 1 con ${puntajesP1} puntos`
   }else if(puntajesP1 < puntajesP2){
        return `Gano el participante 2 con ${puntajesP2} puntos`
   }else{
        return "El concurso termino empatado"
   }


}

let resultadoConcurso = concurso(alicia, bob)

console.log( resultadoConcurso )