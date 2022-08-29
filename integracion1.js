
// NOMBRE RAZA EDAD SONIDO y METODO DECIRSONIDO 
// METODO = RETORNAR ESE SONIDO 2 VECES

// ARRAY MISMASCOTAS



let misMascotas = [
    {
        nombre: "Jack",
        raza: "callejero",
        edad: 2, // 3
        sonido: 'guauuu',
        decirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "lola",
        raza: "persa",
        edad: 7, // 9
        sonido: 'miauu',
        decirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    },
    {
        nombre: "firulais",
        raza: "terval",
        edad: 14, // 21
        sonido: 'GUAUUUU',
        decirSonido: function(){
            return `${this.sonido} ${this.sonido}`
        }
    }
]

console.log( misMascotas[2].decirSonido() )

/*
Deberemos crear una función que se llame aumentarEdad 
que aumente la edad de cada animal en 1.
*/



const aumentarEdad = ( arr )=>{

    for(let i = 0; i < arr.length; i++){

        arr[i].edad += 1

    }

}

// aumentarEdad(misMascotas)

// console.log(misMascotas)


/**
 
Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
Si la mascota tiene más de 10 años, deberá sumarle la mitad de 
su edad

*/


const aumentarEdadMejorada = ( arr )=>{

    for( let i = 0; i < arr.length; i++ ){

        if( arr[i].edad < 6){
            arr[i].edad += 1
        }else if( arr[i].edad >= 6 && arr[i].edad <= 10){
            arr[i].edad += 2
        }else{
            arr[i].edad += ( arr[i].edad / 2 )
        }
    }


}

console.log(misMascotas)

aumentarEdadMejorada( misMascotas )

console.log(misMascotas)


const suma = (num1, num2) => num1 + num2

let resultado =  suma(2, 5)
console.log( resultado )


/*
Ahora crearemos una función que va a generar un identificador
(ID) en cada objeto, que será secuencial y 
que empezará en 1.

*/

const creadorDeId = ( arreglo )=>{
    

    for(let i = 0; i < arreglo.length; i++){

        arreglo[i].id = i + 1

    }

}

creadorDeId(misMascotas)

console.log(misMascotas)
